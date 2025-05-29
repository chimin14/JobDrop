"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-2">
          Your privacy matters to us
        </p>
        <p className="text-sm text-gray-500">
          Effective Date: May 29, 2025 • Last Updated: May 29, 2025
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="space-y-12">
        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Commitment to Your Privacy</h3>
          <p className="text-base text-blue-800 leading-relaxed">
            JobDrop is committed to protecting your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your data in compliance with Bosnia and Herzegovina's Law on Protection of Personal Data 
            (Official Gazette nos. 49/06, 76/11, and 89/11) and our commitment to EU data protection standards.
          </p>
        </div>

        {/* Legal Basis */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">1</span>
            Legal Basis for Data Processing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Primary Legal Bases</h3>
              <div className="space-y-3 text-base">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Consent:</strong> When you voluntarily provide information</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Contract Performance:</strong> To provide our platform services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Legitimate Interest:</strong> Platform security and improvement</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-base text-gray-700">
                We operate under Bosnia and Herzegovina's Data Protection Law and are 
                preparing for alignment with EU GDPR standards as part of Bosnia's EU approximation process.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-700 font-bold">2</span>
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-4">Personal Information</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>• Full name and contact details</p>
                  <p>• Email address and phone number</p>
                  <p>• Location information</p>
                  <p>• Profile photo (optional)</p>
                  <p>• Identity verification data</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-4">Platform Activity</h3>
                <div className="space-y-2 text-sm text-green-800">
                  <p>• Job postings and applications</p>
                  <p>• Messages and communications</p>
                  <p>• Reviews and ratings</p>
                  <p>• Search and browsing history</p>
                  <p>• User preferences</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-6">
                <h3 className="font-semibold text-orange-900 mb-4">Technical Data</h3>
                <div className="space-y-2 text-sm text-orange-800">
                  <p>• IP address and location</p>
                  <p>• Browser and device information</p>
                  <p>• Usage analytics</p>
                  <p>• Session data</p>
                  <p>• Error logs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-700 font-bold">3</span>
            How We Use Your Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Core Platform Services</h3>
                <p className="text-base text-gray-700">Match job seekers with job providers, facilitate communication, process applications, and maintain user profiles.</p>
              </div>
              
              <div className="bg-white border-l-4 border-green-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Safety & Trust</h3>
                <p className="text-base text-gray-700">Verify user identities, prevent fraud, maintain platform security, and build community trust through reviews.</p>
              </div>
              
              <div className="bg-white border-l-4 border-purple-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Platform Improvement</h3>
                <p className="text-base text-gray-700">Analyze usage patterns, improve features, develop new services, and optimize user experience.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-orange-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-base text-gray-700">Send important updates, notifications about job matches, safety alerts, and service announcements.</p>
              </div>
              
              <div className="bg-white border-l-4 border-red-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                <p className="text-base text-gray-700">Comply with legal obligations, respond to lawful requests, and protect our rights and those of our users.</p>
              </div>
              
              <div className="bg-white border-l-4 border-indigo-500 pl-6 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                <p className="text-base text-gray-700">Respond to inquiries, resolve disputes, provide technical assistance, and improve support quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-700 font-bold">4</span>
            Data Sharing and Disclosure
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-900 mb-3">We Never Sell Your Personal Data</h3>
            <p className="text-base text-red-800">
              JobDrop does not sell, rent, or trade your personal information to third parties for commercial purposes.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">Limited sharing occurs only in these situations:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">With Other Users</h4>
                <p className="text-sm text-gray-700">Profile information necessary for job matching and communication (name, photo, reviews, general location)</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">Service Providers</h4>
                <p className="text-sm text-gray-700">Technical partners who help us operate the platform (hosting, analytics, customer support) under strict data protection agreements</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">Legal Requirements</h4>
                <p className="text-sm text-gray-700">When required by law, court orders, or to protect legal rights as mandated by Bosnia and Herzegovina authorities</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">With Your Consent</h4>
                <p className="text-sm text-gray-700">Any additional sharing only occurs with your explicit consent for specific purposes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-gray-700 font-bold">5</span>
            Data Security and Protection
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-base text-gray-800 mb-6">
              We implement technical and organizational measures as required by Bosnia and Herzegovina's 
              data protection regulations, including encryption, access controls, and regular security audits.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-700 font-bold">🔒</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Encryption</h4>
                <p className="text-sm text-gray-600">Data encrypted in transit and at rest</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-700 font-bold">🛡️</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Access Control</h4>
                <p className="text-sm text-gray-600">Strict employee access limitations</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-700 font-bold">🔍</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Monitoring</h4>
                <p className="text-sm text-gray-600">Continuous security monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-700 font-bold">6</span>
            Your Data Protection Rights
          </h2>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <p className="text-base text-green-800">
              Under Bosnia and Herzegovina's data protection law, you have specific rights regarding your personal data.
              We are also preparing to enhance these rights to align with EU GDPR standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-700 text-xs">👁️</span>
                  Right to Access
                </h4>
                <p className="text-sm text-gray-700">Request a copy of all personal data we hold about you</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 text-green-700 text-xs">✏️</span>
                  Right to Rectification
                </h4>
                <p className="text-sm text-gray-700">Correct inaccurate or incomplete personal information</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 text-red-700 text-xs">🗑️</span>
                  Right to Erasure
                </h4>
                <p className="text-sm text-gray-700">Request deletion of your personal data (with certain limitations)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 text-purple-700 text-xs">📤</span>
                  Right to Data Portability
                </h4>
                <p className="text-sm text-gray-700">Receive your data in a structured, commonly used format</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2 text-orange-700 text-xs">⏸️</span>
                  Right to Restrict Processing
                </h4>
                <p className="text-sm text-gray-700">Limit how we use your data in certain circumstances</p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-700 text-xs">🚫</span>
                  Right to Withdraw Consent
                </h4>
                <p className="text-sm text-gray-700">Cancel consent for data processing at any time</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <p className="text-base text-blue-800">
              <strong>How to Exercise Your Rights:</strong> Contact us at privacy@jobdrop.ba or through your account settings. 
              We will respond within 30 days as required by law.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-700 font-bold">7</span>
            Data Retention and Deletion
          </h2>
          
          <div className="space-y-6">
            <p className="text-base text-gray-700">
              We retain personal data only as long as necessary for the purposes outlined in this policy 
              and as required by Bosnia and Herzegovina law.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Active Accounts</h3>
                <p className="text-sm text-gray-700 mb-3">Data retained while your account is active and for legitimate business purposes</p>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-xs text-blue-800"><strong>Duration:</strong> Account lifetime + 2 years</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Inactive Accounts</h3>
                <p className="text-sm text-gray-700 mb-3">Accounts unused for extended periods may be archived or deleted</p>
                <div className="bg-orange-50 rounded p-3">
                  <p className="text-xs text-orange-800"><strong>Duration:</strong> 3 years of inactivity</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                <p className="text-sm text-gray-700 mb-3">Some data retained longer for legal compliance, safety, or fraud prevention</p>
                <div className="bg-red-50 rounded p-3">
                  <p className="text-xs text-red-800"><strong>Duration:</strong> Up to 7 years</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Transfers */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-700 font-bold">8</span>
            International Data Transfers
          </h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-base text-purple-800 mb-4">
              Your data is primarily processed within Bosnia and Herzegovina. When we use international service providers, 
              we ensure adequate protection through:
            </p>
            <div className="space-y-2 text-purple-700">
              <p>• Adequacy decisions from Bosnia and Herzegovina authorities</p>
              <p>• Standard contractual clauses and data protection agreements</p>
              <p>• Certification schemes and codes of conduct</p>
              <p>• Explicit consent when required</p>
            </div>
          </div>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-700 font-bold">9</span>
            Children's Privacy Protection
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">Age Restriction: 18+</h3>
            <p className="text-base text-red-800 mb-4">
              JobDrop is not intended for anyone under 18 years of age. We do not knowingly collect 
              personal information from minors.
            </p>
            <p className="text-base text-red-800">
              If you believe a minor has provided us with personal information, please contact us immediately 
              at privacy@jobdrop.ba so we can take appropriate action.
            </p>
          </div>
        </section>

        {/* Supervisory Authority */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-700 font-bold">10</span>
            Supervisory Authority and Complaints
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Local Authority</h3>
              <p className="text-base text-gray-700 mb-4">
                You have the right to lodge a complaint with the Agency for Personal Data Protection 
                in Bosnia and Herzegovina (AZLP) if you believe your data protection rights have been violated.
              </p>
              <div className="bg-indigo-50 rounded p-3">
                <p className="text-sm text-indigo-800">
                  <strong>Contact AZLP:</strong><br />
                  Website: azlp.ba<br />
                  Email: info@azlp.ba
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Us First</h3>
              <p className="text-base text-gray-700 mb-4">
                We encourage you to contact us directly before filing a complaint. 
                We're committed to resolving privacy concerns promptly and transparently.
              </p>
              <div className="bg-green-50 rounded p-3">
                <p className="text-sm text-green-800">
                  <strong>Privacy Team:</strong><br />
                  Email: privacy@jobdrop.ba<br />
                  Response time: 48 hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-700 font-bold">11</span>
            Changes to This Privacy Policy
          </h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-base text-yellow-800 mb-4">
              We may update this Privacy Policy to reflect changes in our practices, legal requirements, 
              or as Bosnia and Herzegovina aligns with EU data protection standards.
            </p>
            <p className="text-base text-yellow-800">
              <strong>We will notify you of significant changes through:</strong> platform notifications, 
              email alerts, or prominent website notices at least 30 days before changes take effect.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Our Privacy Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-lg">Privacy Inquiries</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="w-5 h-5 mr-3">📧</span>
                  privacy@jobdrop.ba
                </p>
                <p className="flex items-center">
                  <span className="w-5 h-5 mr-3">📞</span>
                  +387 62 888 321
                </p>
                <p className="flex items-center">
                  <span className="w-5 h-5 mr-3">🏢</span>
                  JobDrop Privacy Office<br />
                  <span className="ml-8">Sarajevo, Bosnia and Herzegovina</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg">Data Protection Officer</h3>
              <p className="mb-4">
                As part of our commitment to data protection excellence, we have designated 
                a Data Protection Officer to ensure compliance and address your privacy concerns.
              </p>
              <p className="flex items-center">
                <span className="w-5 h-5 mr-3">📧</span>
                dpo@jobdrop.ba
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-400">
            <p className="text-center text-blue-100">
              This Privacy Policy is effective as of May 29, 2025, and was last updated on May 29, 2025.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}