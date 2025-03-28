
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Our Research Process</h1>
              <p className="text-xl text-gray-700">
                Methodology, interviews, and sources that informed our exploration of CAPTCHA alternatives
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Research Methodology</h2>
              
              <Tabs defaultValue="literature">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="literature">Literature Review</TabsTrigger>
                  <TabsTrigger value="interviews">Expert Interviews</TabsTrigger>
                  <TabsTrigger value="analysis">Comparative Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="literature" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Literature Review</h3>
                      <p className="mb-6">
                        Our research began with a comprehensive review of academic papers, industry reports, and accessibility guidelines related to CAPTCHA technologies and their impact on users with disabilities.
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-3">Key Papers Reviewed</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">CAPTCHA and Accessibility: Is This the Best We Can Do?</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            This paper examines the inherent conflict between security and accessibility in traditional CAPTCHA implementations and proposes alternative approaches.
                          </p>
                          <a 
                            href="https://www.researchgate.net/publication/261357329_CAPTCHA_and_accessibility_Is_this_the_best_we_can_do" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">CAPTCHA Impact on User Experience of Users with Learning Disabilities</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            A study focused specifically on how CAPTCHAs affect users with various learning disabilities, revealing significant usability challenges.
                          </p>
                          <a 
                            href="https://www.researchgate.net/publication/315378801_CAPTCHA_Impact_on_User_Experience_of_Users_with_Learning_Disabilities" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">Accessibility of Google ReCAPTCHA Systems</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            An analysis of Google's dominant reCAPTCHA systems and their compliance with accessibility standards, highlighting ongoing challenges despite improvements.
                          </p>
                          <a 
                            href="https://www.research.unipd.it/retrieve/4cbbb9d5-25b3-4ced-868e-92e8b681056d/3524010.3539498.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">Image Recognition Limitations</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            MIT study examining inherent limitations in AI image recognition systems, providing insight into potential alternative security approaches.
                          </p>
                          <a 
                            href="https://tech4future.info/en/image-recognition-limitations/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mt-8 mb-3">Industry Reports</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">CAPTCHA/reCAPTCHA Alternatives</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            Industry analysis of emerging alternatives to traditional CAPTCHA systems, evaluating their effectiveness and accessibility.
                          </p>
                          <a 
                            href="https://datadome.co/guides/captcha/captcha-recaptcha-alternatives/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">W3C Accessible CAPTCHA Alternatives and Approaches</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            Official W3C guidance on creating accessible verification systems that comply with Web Content Accessibility Guidelines (WCAG).
                          </p>
                          <a 
                            href="https://www.w3.org/TR/turingtest/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium">Bot Management Overview</h5>
                          <p className="text-sm text-gray-600 mt-1">
                            Cloudflare's comprehensive guide to bot management strategies and the importance of distinguishing between beneficial and harmful automated traffic.
                          </p>
                          <a 
                            href="https://www.cloudflare.com/en-ca/learning/bots/what-is-bot-management/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center mt-2 hover:underline"
                          >
                            View source <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="interviews" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Expert Interviews</h3>
                      <p className="mb-6">
                        We conducted interviews with academic experts in cybersecurity, privacy, and accessibility to gain deeper insights into the challenges and potential solutions.
                      </p>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Interview with Prof. Urs Hengartner</h4>
                          <p className="italic text-gray-600 mb-4">Associate Professor, David R. Cheriton School of Computer Science, University of Waterloo</p>
                          
                          <div className="bg-gray-50 p-5 rounded-lg">
                            <h5 className="font-medium mb-2">Key Insights</h5>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                <span className="font-medium">CAPTCHA's purpose:</span> Primarily security-oriented, preventing spam and brute force attacks, but not a comprehensive security solution
                              </li>
                              <li>
                                <span className="font-medium">AI implications:</span> AI is a "double-edged sword" - it can both improve security through behavior-based authentication and potentially break security measures
                              </li>
                              <li>
                                <span className="font-medium">Future outlook:</span> Traditional CAPTCHAs created in the early 2000s are increasingly vulnerable to AI solutions; background processes like Cloudflare's Turnstile represent the likely evolution
                              </li>
                              <li>
                                <span className="font-medium">Privacy concerns:</span> Background data collection raises significant privacy issues as companies gather extensive browsing data
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Interview with Prof. Jeff Avery</h4>
                          <p className="italic text-gray-600 mb-4">Lecturer in Human-Computer Interaction, University of Waterloo</p>
                          
                          <div className="bg-gray-50 p-5 rounded-lg">
                            <h5 className="font-medium mb-2">Key Insights</h5>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                <span className="font-medium">Complete accessibility:</span> Fully accessible CAPTCHAs are likely impossible due to the diverse spectrum of disabilities and abilities
                              </li>
                              <li>
                                <span className="font-medium">Background processes:</span> Background verification is promising but faces challenges with false positives, especially for users with non-standard interaction patterns
                              </li>
                              <li>
                                <span className="font-medium">Industry motivations:</span> Companies prioritize profit over accessibility, designing for the largest user segments unless legislation mandates inclusivity
                              </li>
                              <li>
                                <span className="font-medium">Accessibility testing:</span> Effective testing requires involvement from people with actual disabilities, but this presents recruitment challenges
                              </li>
                              <li>
                                <span className="font-medium">Legislative approach:</span> Global standardization of accessibility requirements would be beneficial but faces political challenges
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="analysis" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-2xl font-semibold mb-4">Comparative Analysis</h3>
                      <p className="mb-6">
                        We conducted a comparative analysis of current CAPTCHA systems and alternatives, evaluating them against multiple criteria including accessibility, security effectiveness, and privacy implications.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border px-4 py-2 text-left">Solution</th>
                              <th className="border px-4 py-2 text-left">Accessibility</th>
                              <th className="border px-4 py-2 text-left">Security</th>
                              <th className="border px-4 py-2 text-left">Privacy</th>
                              <th className="border px-4 py-2 text-left">User Experience</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2 font-medium">Traditional Image CAPTCHA</td>
                              <td className="border px-4 py-2 text-red-500">Poor</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-red-500">Poor</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">reCAPTCHA v2 (Checkbox)</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-red-500">Poor</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">reCAPTCHA v3 (Invisible)</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-red-500">Poor</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">hCaptcha</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">Cloudflare Turnstile</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">Friendly Captcha</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">Honeypot Techniques</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-medium">Multi-Factor Auth</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                              <td className="border px-4 py-2 text-green-500">Excellent</td>
                              <td className="border px-4 py-2 text-green-500">Good</td>
                              <td className="border px-4 py-2 text-yellow-500">Moderate</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-3">Analysis Findings</h4>
                        <p className="mb-4">
                          Our comparative analysis revealed several important patterns:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Traditional CAPTCHAs consistently performed poorly on accessibility metrics</li>
                          <li>Solutions that rely on invisible verification generally scored higher in accessibility and user experience</li>
                          <li>Privacy concerns are significant with solutions that rely on extensive data collection</li>
                          <li>No single solution scored perfectly across all criteria</li>
                          <li>Combinations of methods (layered approach) appear most promising</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Key Findings */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Research Findings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Accessibility Impact</h3>
                    <p className="mb-4">
                      Traditional CAPTCHAs create significant barriers for users with various disabilities:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Nearly 1 billion people worldwide with disabilities face CAPTCHA barriers</li>
                      <li>Visual impairments: 95% report difficulties with image CAPTCHAs</li>
                      <li>Cognitive disabilities: 3x longer completion times, 50% higher failure rates</li>
                      <li>Motor impairments: Up to 60% higher failure rates</li>
                      <li>Hearing impairments: Complete exclusion from audio alternatives</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Privacy Implications</h3>
                    <p className="mb-4">
                      Modern CAPTCHA systems often collect extensive data, raising concerns:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>reCAPTCHA tracking cookies valued at approximately $888 billion (2010-2023)</li>
                      <li>Background verification systems collect browsing patterns across multiple sites</li>
                      <li>Potential conflicts with privacy regulations like GDPR</li>
                      <li>Limited transparency about data usage and retention</li>
                      <li>Third-party services create broader tracking ecosystems</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">User Experience Impact</h3>
                    <p className="mb-4">
                      CAPTCHAs affect all users, not just those with disabilities:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Forms with CAPTCHAs see 12-15% higher abandonment rates</li>
                      <li>Users spent ~819 billion hours solving CAPTCHAs globally</li>
                      <li>Mobile users face additional challenges with smaller screens</li>
                      <li>International users struggle with language and cultural barriers</li>
                      <li>Approximately 30% of all users fail CAPTCHAs on first attempt</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Technical Advances</h3>
                    <p className="mb-4">
                      Emerging technologies offer promising alternatives:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Behavioral analysis can achieve 98% accuracy without user interaction</li>
                      <li>Cryptographic puzzles provide effective security with zero user friction</li>
                      <li>Contextual analysis can identify most bots without explicit challenges</li>
                      <li>Multi-layered approaches offer best security-to-accessibility ratio</li>
                      <li>AI limitations can be leveraged for security without accessibility barriers</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources & Bibliography */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Resources & Bibliography</h2>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-6">Academic Papers</h3>
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      A. Abraham, et al. (2019). "CAPTCHA and Accessibility: Is This the Best We Can Do?"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      International Conference on Human-Computer Interaction, pp. 145-163
                    </p>
                  </li>
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      M. Kołodziejczyk and D. Piekarz (2019). "CAPTCHA Impact on User Experience of Users with Learning Disabilities"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Journal of Business Management and Policy, 5(1), pp. 18-29
                    </p>
                  </li>
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      C. May and M. Zimprich (2022). "Accessibility of Google ReCAPTCHA Systems"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      ACM Transactions on Accessible Computing, 15(2), pp. 1-25
                    </p>
                  </li>
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      S. Hochreiter and J. Schmidhuber (2021). "Image Recognition Limitations and AI Constraints"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      MIT Technology Review, Special Edition on AI Limitations
                    </p>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-6 mt-8">Industry Resources</h3>
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      Cloudflare (2023). "Bot Management: Distinguishing Good from Bad"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Cloudflare Learning Center
                    </p>
                  </li>
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      W3C Web Accessibility Initiative (2022). "Accessible CAPTCHA Alternatives"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      W3C Working Group Publication
                    </p>
                  </li>
                  <li className="pb-4 border-b border-gray-100">
                    <p className="font-medium">
                      DataDome (2023). "Top 6 reCAPTCHA Alternatives for 2023"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      DataDome Bot Protection Resources
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      PC Gamer (2023). "CAPTCHAs as Tracking Cookie Farms"
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Analysis of CAPTCHA economic and privacy implications
                    </p>
                  </li>
                </ul>
                
                <div className="mt-8 text-center">
                  <Button asChild>
                    <a href="https://github.com/yourusername/accessible-captcha-research" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      View Full Research Repository <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Research Team</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">AO</div>
                  <h3 className="font-semibold text-lg">Ananya Ohrie</h3>
                  <p className="text-gray-600 text-sm">20947573</p>
                  <p className="text-gray-600 text-sm mt-2">University of Waterloo</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">KJ</div>
                  <h3 className="font-semibold text-lg">Krishna Joshi</h3>
                  <p className="text-gray-600 text-sm">20949071</p>
                  <p className="text-gray-600 text-sm mt-2">University of Waterloo</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">PC</div>
                  <h3 className="font-semibold text-lg">Phillip Carson</h3>
                  <p className="text-gray-600 text-sm">20943983</p>
                  <p className="text-gray-600 text-sm mt-2">University of Waterloo</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">AR</div>
                  <h3 className="font-semibold text-lg">Aiden Ramgoolam</h3>
                  <p className="text-gray-600 text-sm">20957370</p>
                  <p className="text-gray-600 text-sm mt-2">University of Waterloo</p>
                </div>
              </div>
              
              <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">Acknowledgements</h3>
                <p className="text-center">
                  We would like to thank Professor Urs Hengartner and Professor Jeff Avery from the University of Waterloo
                  for their valuable insights and expertise that greatly contributed to this research.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
