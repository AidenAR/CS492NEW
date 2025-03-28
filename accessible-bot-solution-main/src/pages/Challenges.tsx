
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Challenges = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">CAPTCHA Accessibility Challenges</h1>
              <p className="text-xl text-gray-700">
                Understanding the barriers that traditional CAPTCHAs create for people with disabilities
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Impact on Different User Groups</h2>
              
              <Tabs defaultValue="visual">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="visual">Visual Impairments</TabsTrigger>
                  <TabsTrigger value="auditory">Auditory Impairments</TabsTrigger>
                  <TabsTrigger value="cognitive">Cognitive Challenges</TabsTrigger>
                  <TabsTrigger value="motor">Motor Impairments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="visual" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Visual Impairment Challenges</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Image-based CAPTCHAs present significant barriers for users with visual impairments:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Screen readers cannot interpret distorted text or identify objects in images</li>
                            <li>Low vision users struggle with low contrast and distorted text</li>
                            <li>Color blindness affects ability to differentiate elements in puzzles</li>
                            <li>Alternative audio CAPTCHAs often have background noise that reduces clarity</li>
                          </ul>
                          <p>
                            According to research, over 95% of visually impaired users report difficulties with image-based CAPTCHAs, with many abandoning websites that require them.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <img 
                            src="https://images.unsplash.com/photo-1587301669187-775cc102b1d3" 
                            alt="Person with visual impairment using a computer" 
                            className="rounded-lg shadow-md w-full"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Screen readers cannot interpret the visual challenges in traditional CAPTCHAs, creating a significant barrier.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="auditory" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Auditory Impairment Challenges</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Audio alternatives to visual CAPTCHAs present challenges for users with hearing impairments:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Deaf or hard-of-hearing users cannot access audio CAPTCHAs</li>
                            <li>Background noise in audio CAPTCHAs reduces clarity even for those with mild hearing loss</li>
                            <li>Audio CAPTCHAs often use distorted sounds to prevent automated recognition, making them difficult for everyone</li>
                            <li>Users with both visual and hearing impairments are completely excluded from both options</li>
                          </ul>
                          <p>
                            Studies show that audio CAPTCHAs can take up to 5 times longer to complete than visual ones, even for users without impairments.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <img 
                            src="https://images.unsplash.com/photo-1596454207739-21492f5a4f87" 
                            alt="Person wearing hearing aids" 
                            className="rounded-lg shadow-md w-full"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Audio CAPTCHAs often contain background noise and distortions that create barriers for those with hearing impairments.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="cognitive" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Cognitive Challenges</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            CAPTCHAs can create significant barriers for users with cognitive impairments or learning disabilities:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Complex instructions can be difficult to understand</li>
                            <li>Time limits create pressure that affects performance</li>
                            <li>Users with dyslexia struggle with distorted text</li>
                            <li>Logic puzzles can be overwhelming for users with certain cognitive conditions</li>
                            <li>Task switching between CAPTCHA and the original form creates cognitive load</li>
                          </ul>
                          <p>
                            Research by the CAPTCHA Impact on User Experience study found that users with learning disabilities took on average 3 times longer to complete CAPTCHAs and had a 50% higher failure rate.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <img 
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                            alt="Person using a computer with a frustrated expression" 
                            className="rounded-lg shadow-md w-full"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            The complex instructions and time pressure of CAPTCHAs can cause significant difficulty for users with cognitive impairments.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="motor" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Motor Impairment Challenges</h3>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="mb-4">
                            Users with motor impairments face unique challenges with interactive CAPTCHAs:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>Drag-and-drop puzzles are difficult or impossible with alternative input devices</li>
                            <li>Click-based challenges can be difficult for those using mouth sticks, eye tracking, or voice control</li>
                            <li>Time limits disadvantage users who type or navigate more slowly</li>
                            <li>Small clickable areas create precision requirements that exclude many users</li>
                            <li>Behavior-based CAPTCHAs might incorrectly flag assistive technology users as bots</li>
                          </ul>
                          <p>
                            A study from the University of Washington found that users with motor impairments experienced CAPTCHA failure rates up to 60% higher than non-disabled users.
                          </p>
                        </div>
                        <div className="md:w-1/2">
                          <img 
                            src="https://images.unsplash.com/photo-1559757175-7cb35e6f790e" 
                            alt="Person using an adaptive mouse device" 
                            className="rounded-lg shadow-md w-full"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Interactive CAPTCHAs create barriers for users who rely on alternative input methods or assistive technologies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">CAPTCHA Limitations & Issues</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Security vs. Accessibility Tradeoffs</h3>
                    <p className="mb-4">
                      Traditional CAPTCHAs create a false dichotomy between security and accessibility:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>More secure CAPTCHAs tend to be less accessible</li>
                      <li>Simplified CAPTCHAs are more accessible but less effective</li>
                      <li>This tradeoff is unnecessary with modern approaches</li>
                      <li>Equal access is required by laws in many countries</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Privacy Concerns</h3>
                    <p className="mb-4">
                      Modern CAPTCHA systems like reCAPTCHA raise significant privacy issues:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Track user behavior across multiple sites</li>
                      <li>Collect data for marketing purposes</li>
                      <li>May violate privacy regulations like GDPR</li>
                      <li>Users often unaware of data collection scope</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">User Experience Impact</h3>
                    <p className="mb-4">
                      CAPTCHAs create friction that affects all users:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Increases form abandonment rates by 12-15%</li>
                      <li>Creates frustration even for non-disabled users</li>
                      <li>Adds time to complete simple online tasks</li>
                      <li>Disproportionately affects mobile users</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Global Accessibility</h3>
                    <p className="mb-4">
                      CAPTCHAs create global barriers beyond disabilities:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Language-specific challenges exclude non-native speakers</li>
                      <li>Cultural references may not translate globally</li>
                      <li>Assumes Western literacy and cognitive patterns</li>
                      <li>Disadvantages users in regions with limited bandwidth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistical Insights */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">CAPTCHA Impact in Numbers</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">~1 Billion</div>
                  <p className="text-gray-600">Global users with disabilities affected by inaccessible CAPTCHAs</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">~$1 Trillion</div>
                  <p className="text-gray-600">Estimated value of data collected by reCAPTCHA from 2010-2023</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">~819 Billion</div>
                  <p className="text-gray-600">Hours spent by users solving CAPTCHAs globally</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="text-4xl font-bold text-primary mb-2">~30%</div>
                  <p className="text-gray-600">Average abandonment rate for forms with CAPTCHAs</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Sources: CAPTCHA Impact on User Experience study, Web Accessibility Initiative (WAI), University of Maryland Human-Computer Interaction Lab
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Challenges;
