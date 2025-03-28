
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import botDetector from "@/services/BotDetectionService";

const BotDetector = () => {
  const [score, setScore] = useState(0);
  const [verdict, setVerdict] = useState({ isBot: false, confidence: 0, reason: "" });
  const [indicators, setIndicators] = useState<any[]>([]);

  useEffect(() => {
    // Update the bot detection results every 2 seconds
    const interval = setInterval(() => {
      setScore(botDetector.getBotScore());
      setVerdict(botDetector.getVerdict());
      setIndicators(botDetector.getIndicators());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-center">Real-time Bot Detection</CardTitle>
        <CardDescription className="text-center">
          This demonstrates accessible bot detection without relying on traditional CAPTCHAs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Bot Probability Score</span>
              <span className="text-sm font-medium">{score}%</span>
            </div>
            <Progress value={score} className="h-2" />
          </div>

          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <h3 className="font-semibold mb-2">
              Verdict: {verdict.isBot ? "Likely Bot" : "Likely Human"}
            </h3>
            <p className="text-sm text-gray-700">{verdict.reason}</p>
            <p className="text-sm text-gray-700 mt-1">
              Confidence: {verdict.isBot ? verdict.confidence : 100 - verdict.confidence}%
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3">Detection Factors</h3>
            <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
              {indicators.map((indicator, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">{indicator.name}</span>
                    <p className="text-xs text-gray-500">{indicator.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">
                      {typeof indicator.value === "boolean"
                        ? indicator.value
                          ? "Yes"
                          : "No"
                        : indicator.value}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        indicator.isSuspicious ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BotDetector;
