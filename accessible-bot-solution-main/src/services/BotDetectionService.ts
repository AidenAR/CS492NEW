
/**
 * BotDetectionService - An accessible bot detection service that uses behavioral patterns
 * instead of traditional CAPTCHAs to identify bots
 */

interface BotIndicator {
  name: string;
  description: string;
  value: boolean | number | string;
  isSuspicious: boolean;
}

class BotDetectionService {
  private indicators: BotIndicator[] = [];
  private initialized: boolean = false;
  private startTime: number = Date.now();
  private mouseMoves: number = 0;
  private mouseClicks: number = 0;
  private scrollEvents: number = 0;
  private keyPresses: number = 0;

  constructor() {
    if (typeof window !== "undefined") {
      this.initialize();
    }
  }

  private initialize(): void {
    if (this.initialized) return;
    this.initialized = true;
    
    // Add event listeners to track user behavior
    window.addEventListener("mousemove", () => this.mouseMoves++);
    window.addEventListener("click", () => this.mouseClicks++);
    window.addEventListener("scroll", () => this.scrollEvents++);
    window.addEventListener("keydown", () => this.keyPresses++);
    
    // Run initial checks that don't rely on user behavior
    this.runInitialChecks();
    
    // Schedule periodic analysis
    setInterval(() => this.analyzeData(), 5000);
  }

  private runInitialChecks(): void {
    // Check for common bot indicators
    this.addIndicator("navigator.webdriver", 
      "Presence of automated webdriver property", 
      !!navigator.webdriver, 
      !!navigator.webdriver);
    
    this.addIndicator("window size", 
      "Unusual window dimensions", 
      `${window.innerWidth}x${window.innerHeight}`, 
      window.innerWidth < 100 || window.innerHeight < 100);
    
    this.addIndicator("user agent", 
      "User agent string analysis", 
      navigator.userAgent, 
      this.isSuspiciousUserAgent(navigator.userAgent));
    
    this.addIndicator("languages", 
      "Browser language settings", 
      navigator.languages ? navigator.languages.join(", ") : navigator.language, 
      !navigator.languages || navigator.languages.length === 0);
    
    // Check for typical bot fingerprints
    const canvas = document.createElement("canvas");
    const canvasSupported = !!(canvas.getContext && canvas.getContext("2d"));
    
    this.addIndicator("canvas support", 
      "Support for canvas element", 
      canvasSupported, 
      !canvasSupported);
  }

  private analyzeData(): void {
    const timeElapsed = (Date.now() - this.startTime) / 1000; // in seconds
    
    if (timeElapsed > 3) {
      // Movement patterns
      const movesPerSecond = this.mouseMoves / timeElapsed;
      this.addIndicator("mouse movement rate", 
        "Mouse movements per second", 
        movesPerSecond.toFixed(2), 
        movesPerSecond === 0 || movesPerSecond > 100);
      
      // Click patterns
      const clicksPerSecond = this.mouseClicks / timeElapsed;
      this.addIndicator("click rate", 
        "Mouse clicks per second", 
        clicksPerSecond.toFixed(2), 
        clicksPerSecond > 10);
      
      // Scroll patterns
      const scrollsPerSecond = this.scrollEvents / timeElapsed;
      this.addIndicator("scroll rate", 
        "Scroll events per second", 
        scrollsPerSecond.toFixed(2), 
        scrollsPerSecond > 20);
      
      // Interaction patterns
      const interactionsPerSecond = 
        (this.mouseMoves + this.mouseClicks + this.scrollEvents + this.keyPresses) / timeElapsed;
      this.addIndicator("overall interaction rate", 
        "Combined user interactions per second", 
        interactionsPerSecond.toFixed(2), 
        interactionsPerSecond === 0 || interactionsPerSecond > 150);
    }
  }

  private addIndicator(name: string, description: string, value: boolean | number | string, isSuspicious: boolean): void {
    // Update existing indicator if it exists
    const existingIndex = this.indicators.findIndex(ind => ind.name === name);
    
    if (existingIndex >= 0) {
      this.indicators[existingIndex] = { name, description, value, isSuspicious };
    } else {
      this.indicators.push({ name, description, value, isSuspicious });
    }
  }

  private isSuspiciousUserAgent(userAgent: string): boolean {
    const botPatterns = [
      "bot", "crawl", "spider", "headless", "phantom", "selenium", "chrome-lighthouse"
    ];
    
    userAgent = userAgent.toLowerCase();
    return botPatterns.some(pattern => userAgent.includes(pattern));
  }

  public getIndicators(): BotIndicator[] {
    return [...this.indicators];
  }

  public getBotScore(): number {
    if (this.indicators.length === 0) return 0;
    
    const suspiciousCount = this.indicators.filter(ind => ind.isSuspicious).length;
    return Math.round((suspiciousCount / this.indicators.length) * 100);
  }

  public getVerdict(): { isBot: boolean; confidence: number; reason: string } {
    const score = this.getBotScore();
    
    if (score > 70) {
      return {
        isBot: true,
        confidence: score,
        reason: "Multiple bot indicators detected"
      };
    } else if (score > 40) {
      return {
        isBot: true,
        confidence: score,
        reason: "Some suspicious behavior detected"
      };
    } else {
      return {
        isBot: false,
        confidence: 100 - score,
        reason: "Behavior consistent with human user"
      };
    }
  }
}

// Create a singleton instance
const botDetector = new BotDetectionService();
export default botDetector;
