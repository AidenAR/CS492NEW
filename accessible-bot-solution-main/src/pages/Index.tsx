
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import BotDetector from "@/components/BotDetector";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Reimagining CAPTCHAs for Everyone
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Exploring accessible and inclusive alternatives to traditional CAPTCHA systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/challenges">Explore Challenges</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/alternatives">Discover Alternatives</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Why This Matters</h2>
                <p className="text-gray-700 mb-4">
                  CAPTCHAs are a ubiquitous part of the internet, used to distinguish real users from automated bots. However, they often impose significant challenges for individuals with disabilities.
                </p>
                <p className="text-gray-700 mb-6">
                  As the internet becomes increasingly integral to daily life, it is crucial to ensure that everyone, regardless of ability, can navigate it without obstacles.
                </p>
                <Button asChild variant="outline">
                  <Link to="/research" className="inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Computer screen showing code" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Aspects of Our Research</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Challenges</CardTitle>
                  <CardDescription>
                    Examining how CAPTCHAs create barriers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Traditional CAPTCHAs pose various accessibility challenges for users with visual, auditory, cognitive, and motor impairments, effectively excluding them from many online services.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Limitations</CardTitle>
                  <CardDescription>
                    Understanding AI's role in bot detection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    While AI is advancing rapidly, it still has inherent limitations that can be leveraged for more accessible security measures without relying on traditional CAPTCHA tests.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Better Alternatives</CardTitle>
                  <CardDescription>
                    Proposing more inclusive approaches
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our research explores emerging alternatives like behavior-based detection, cryptographic puzzles, and contextual analysis that maintain security while improving accessibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Live Bot Detection Demo</h2>
              <p className="text-gray-700 text-center mb-8">
                This demo uses behavior-based detection methods without requiring any user action.
                It analyzes patterns like mouse movements and typing behavior to distinguish between humans and bots.
              </p>
              
              <BotDetector />
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Note: This is a simplified demonstration. Real-world implementations would use more sophisticated
                algorithms and additional detection factors.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
