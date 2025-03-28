
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BotDetector from "@/components/BotDetector";

const Alternatives = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Accessible Alternatives to CAPTCHAs</h1>
              <p className="text-xl text-gray-700">
                Exploring more inclusive approaches to bot detection and online security
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Modern Alternatives</h2>
              
              <Tabs defaultValue="behavioral">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                  <TabsTrigger value="behavioral">Behavioral Analysis</TabsTrigger>
                  <TabsTrigger value="cryptographic">Cryptographic Puzzles</TabsTrigger>
                  <TabsTrigger value="contextual">Contextual Authentication</TabsTrigger>
                  <TabsTrigger value="honeypot">Honeypot Techniques</TabsTrigger>
                </TabsList>
                
                <TabsContent value="behavioral" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Behavioral Analysis</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Behavioral analysis detects bots by analyzing user interaction patterns without requiring explicit actions:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Monitors natural behaviors like mouse movements and typing patterns</li>
                            <li>Works in the background without user awareness</li>
                            <li>Adaptive to different user abilities and assistive technologies</li>
                            <li>Continuously improving through machine learning</li>
                          </ul>
                          <p className="mb-4">
                            Systems like Cloudflare's Turnstile use behavioral analysis to verify human users without disrupting their experience.
                          </p>
                          <p>
                            <strong>Accessibility benefit:</strong> No active participation required, making it accessible to users with various disabilities.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold mb-3">Behavioral Indicators</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Mouse movement patterns (speed, curvature, pauses)</li>
                              <li>Keyboard cadence and rhythm</li>
                              <li>Scroll behavior and patterns</li>
                              <li>Form field interaction sequences</li>
                              <li>Touch gestures on mobile devices</li>
                              <li>Time spent on different page elements</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                              <em>Note: Good implementations account for assistive technology usage patterns.</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3">Considerations</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium mb-2">Advantages</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Invisible to users - no interruption</li>
                              <li>No cognitive load or time requirement</li>
                              <li>Works with all forms of assistive technology</li>
                              <li>Continuously improves through machine learning</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Challenges</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Privacy concerns with behavioral tracking</li>
                              <li>May incorrectly flag unusual interaction patterns</li>
                              <li>Requires sufficient interaction time to make determination</li>
                              <li>Can be fooled by sophisticated bot simulations</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="cryptographic" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Cryptographic Puzzles</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Cryptographic puzzles leverage device processing power to validate humans without explicit action:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Device solves math puzzles in the background</li>
                            <li>Verification occurs without user awareness</li>
                            <li>Scales difficulty based on risk assessment</li>
                            <li>Compatible with all assistive technologies</li>
                          </ul>
                          <p className="mb-4">
                            Solutions like Friendly Captcha and Cloudflare Turnstile use this approach as a primary verification method.
                          </p>
                          <p>
                            <strong>Accessibility benefit:</strong> Completely invisible to the user, requiring no sensory perception or interaction.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold mb-3">How It Works</h4>
                            <ol className="list-decimal pl-5 space-y-2">
                              <li>Server sends a cryptographic puzzle to the browser</li>
                              <li>Browser uses JavaScript to solve the puzzle</li>
                              <li>Solution sent back to server for verification</li>
                              <li>Legitimate users proceed without interruption</li>
                              <li>Automated attacks are slowed by computation requirements</li>
                            </ol>
                            <p className="mt-4 text-sm text-gray-600">
                              <em>Unlike proof-of-work systems like cryptocurrency mining, these puzzles are designed to be quick and low-resource for legitimate users.</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3">Considerations</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium mb-2">Advantages</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Completely invisible to users</li>
                              <li>Works across all disabilities and assistive technologies</li>
                              <li>No data collection or privacy concerns</li>
                              <li>Can work even with JavaScript disabled in some implementations</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Challenges</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Consumes device computational resources</li>
                              <li>May slow down older devices or devices with limited processing power</li>
                              <li>Can be bypassed with sufficient computing power</li>
                              <li>Effectiveness decreases as computational power increases</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="contextual" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Contextual Authentication</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Contextual authentication uses multiple signals to verify legitimate users:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Evaluates device information, browser fingerprints, and network signals</li>
                            <li>Considers user reputation and history</li>
                            <li>Assesses request patterns and timing</li>
                            <li>Only presents challenges when suspicious activity is detected</li>
                          </ul>
                          <p className="mb-4">
                            Google's reCAPTCHA v3 incorporates contextual analysis, but often with privacy trade-offs.
                          </p>
                          <p>
                            <strong>Accessibility benefit:</strong> Most users never encounter verification challenges, regardless of ability.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold mb-3">Contextual Signals</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>IP address reputation and geolocation</li>
                              <li>Browser and device fingerprinting</li>
                              <li>History of previous interactions with the site</li>
                              <li>Time patterns and request frequency</li>
                              <li>Cookies and session information</li>
                              <li>Network connection characteristics</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                              <em>Risk scores determine when additional verification is required, minimizing disruption for legitimate users.</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3">Considerations</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium mb-2">Advantages</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Invisible to most users most of the time</li>
                              <li>Adapts security level to perceived risk</li>
                              <li>Works with all types of assistive technology</li>
                              <li>Highly effective against automated attacks</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Challenges</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Significant privacy concerns with data collection</li>
                              <li>May require fallback methods that could be inaccessible</li>
                              <li>Often relies on third-party services with extensive tracking</li>
                              <li>Users with VPNs or privacy tools may face higher friction</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="honeypot" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Honeypot Techniques</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Honeypot techniques create invisible traps that only bots will interact with:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Hidden form fields that humans can't see but bots will complete</li>
                            <li>CSS-hidden elements that aren't visible to humans</li>
                            <li>Timing analysis to detect automated form submissions</li>
                            <li>Requires no human interaction whatsoever</li>
                          </ul>
                          <p className="mb-4">
                            This technique is often used alongside other methods for enhanced security.
                          </p>
                          <p>
                            <strong>Accessibility benefit:</strong> Completely invisible to all users, with no barriers for anyone.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h4 className="text-lg font-semibold mb-3">Implementation Example</h4>
                            <p className="mb-3 text-sm font-medium text-gray-700">HTML with honeypot field:</p>
                            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`<form action="/submit" method="post">
  <input type="text" name="name" placeholder="Your Name">
  
  <!-- Honeypot field -->
  <input type="text" name="phone_number" 
         style="display:none" tabindex="-1"
         autocomplete="off">
  
  <input type="email" name="email" placeholder="Email">
  <button type="submit">Submit</button>
</form>`}
                            </pre>
                            <p className="mt-3 text-sm text-gray-600">
                              <em>If the hidden field contains data when submitted, the request is flagged as a bot.</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3">Considerations</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium mb-2">Advantages</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Simple to implement and maintain</li>
                              <li>Completely invisible to all users</li>
                              <li>No performance impact on the website</li>
                              <li>No privacy concerns or data collection</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Challenges</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Less effective against sophisticated bots</li>
                              <li>Requires careful implementation to avoid screen reader detection</li>
                              <li>Better as a supplementary rather than primary method</li>
                              <li>Some screen readers might accidentally interact with hidden fields</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Try Our Accessible Bot Detection</h2>
              <p className="text-center mb-8">
                This page uses behavioral analysis and contextual signals to detect bots without requiring any user action.
                The analysis happens in the background while you browse normally.
              </p>
              
              <BotDetector />
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">How This Demo Works</h3>
                <p className="mb-4">
                  Our demonstration uses a combination of techniques to detect bots without creating accessibility barriers:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Monitors natural interaction patterns like mouse movements and clicks</li>
                  <li>Examines browser characteristics and behavior</li>
                  <li>Detects suspicious patterns or anomalies</li>
                  <li>Provides real-time assessment of human vs. bot probability</li>
                </ol>
                <p className="mt-4 text-sm text-gray-600">
                  This approach works with all assistive technologies and requires no explicit user action, making it
                  accessible to everyone while maintaining security.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recommendations */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recommendations for Implementers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Implement multiple layers of invisible bot detection</li>
                      <li>Use risk-based approaches - only add friction when necessary</li>
                      <li>Test with various assistive technologies</li>
                      <li>Provide clear error messages when challenges occur</li>
                      <li>Balance security needs with user experience</li>
                      <li>Consider legal requirements for accessibility</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Technical Implementation</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Layer multiple detection methods for better security</li>
                      <li>Start with honeypot fields as a baseline</li>
                      <li>Add behavioral analysis for higher protection</li>
                      <li>Consider rate limiting and request pattern analysis</li>
                      <li>Implement progressive enhancement for varying capabilities</li>
                      <li>Test across different devices and assistive technologies</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Decision Framework</h3>
                    <p className="mb-4">
                      When implementing bot protection, ask these questions to ensure accessibility:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li><strong>Does it require active user participation?</strong> If yes, it will likely create barriers.</li>
                      <li><strong>Does it rely on sensory capabilities?</strong> Visual, auditory, or motor requirements exclude many users.</li>
                      <li><strong>Will it work with assistive technologies?</strong> Test with screen readers, voice control, and other tools.</li>
                      <li><strong>Is there a fallback that's accessible?</strong> Multiple options increase overall accessibility.</li>
                      <li><strong>Does it respect user privacy?</strong> Consider data collection implications and transparency.</li>
                      <li><strong>Is it proportional to the security risk?</strong> Higher-risk actions may justify more friction.</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Alternatives;
