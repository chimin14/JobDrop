"use client";

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Terms and Conditions</h1>
        <p className="text-lg text-gray-600">
          Effective Date: May 29, 2025 • Last Updated: May 29, 2025
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="space-y-12 text-gray-800 leading-relaxed">
        {/* Quick Summary Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Summary</h3>
          <p className="text-base text-blue-800">
            JobDrop is a platform connecting people in Bosnia and Herzegovina for small jobs and tasks. 
            By using our service, you agree to act responsibly, respect others, and follow local laws. 
            We facilitate connections but are not responsible for the actual work arrangements between users.
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">1</span>
            Introduction and Platform Purpose
          </h2>
          <p className="text-base mb-4">
            Welcome to JobDrop, a digital platform designed to connect job providers with individuals seeking 
            short-term, task-based employment opportunities throughout Bosnia and Herzegovina. Our mission is to 
            create a trusted community where small jobs meet reliable people.
          </p>
          <p className="text-base">
            These Terms and Conditions govern your use of our platform and are subject to the 
            Law on Protection of Personal Data (Official Gazette of BiH, nos. 49/06, 76/11 and 89/11) and 
            applicable consumer protection laws in Bosnia and Herzegovina. By accessing or using JobDrop, 
            you agree to be legally bound by these terms.
          </p>
        </section>

        {/* 2. Legal Framework and Jurisdiction */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">2</span>
            Legal Framework and Jurisdiction
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-base mb-4">
              JobDrop operates under the laws of Bosnia and Herzegovina and is working toward 
              compliance with EU standards as part of Bosnia and Herzegovina's EU approximation process. 
              Any disputes will be resolved in the competent courts of Sarajevo, Bosnia and Herzegovina.
            </p>
            <p className="text-base">
              As an intermediary platform, JobDrop facilitates connections between users but does not 
              directly employ workers or provide services. We operate as a technology platform under applicable 
              e-commerce regulations.
            </p>
          </div>
        </section>

        {/* 3. User Eligibility and Registration */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">3</span>
            User Eligibility and Registration
          </h2>
          <p className="text-base mb-4">To use JobDrop, you must:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Be at least 18 years of age</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Have legal capacity to enter contracts</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Provide accurate registration information</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Maintain account security</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Comply with local employment laws</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base">Respect platform community guidelines</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Platform Services and Limitations */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-700 font-bold">4</span>
            Platform Services and Limitations
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 mb-3">Important: JobDrop's Role</h3>
            <p className="text-base text-amber-700 mb-4">
              JobDrop serves as an intermediary platform only. We do not:
            </p>
            <div className="space-y-2 text-amber-700">
              <p>• Employ users or act as an employer</p>
              <p>• Guarantee job completion or quality</p>
              <p>• Control the actual work arrangements</p>
              <p>• Handle payments between users directly</p>
              <p>• Provide insurance or worker protections</p>
            </div>
          </div>
        </section>

        {/* 5. Prohibited Activities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-700 font-bold">5</span>
            Prohibited Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Security & System Abuse</h3>
              <div className="space-y-2 text-base">
                <p>• Hacking or unauthorized access attempts</p>
                <p>• Introducing malware or viruses</p>
                <p>• DDoS attacks or system disruption</p>
                <p>• Data scraping or automated access</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Content & Behavior</h3>
              <div className="space-y-2 text-base">
                <p>• Creating fake profiles or impersonation</p>
                <p>• Posting illegal or inappropriate content</p>
                <p>• Discriminatory or harmful behavior</p>
                <p>• Circumventing platform safety measures</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-purple-700 font-bold">6</span>
            Intellectual Property Rights
          </h2>
          <p className="text-base mb-4">
            All original content on JobDrop — including our logo, design elements, user interface, and proprietary 
            technology — is protected by intellectual property laws and belongs to JobDrop or our licensed providers.
          </p>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-base text-purple-800">
              <strong>User Content:</strong> You retain ownership of content you post but grant JobDrop a limited 
              license to display and distribute it on our platform for service purposes.
            </p>
          </div>
        </section>

        {/* 7. Privacy and Data Protection */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-700 font-bold">7</span>
            Privacy and Data Protection
          </h2>
          <p className="text-base mb-4">
            Your privacy is important to us. JobDrop processes personal data in accordance with 
            Bosnia and Herzegovina's Law on Protection of Personal Data and our commitment to EU standards. 
            For detailed information, please review our <a href="/privacy-policy" className="text-blue-600 underline font-medium">Privacy Policy</a>.
          </p>
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-base text-green-800">
              <strong>Your Rights:</strong> You have the right to access, rectify, erase, and port your personal data, 
              as well as to withdraw consent for processing at any time.
            </p>
          </div>
        </section>

        {/* 8. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 text-orange-700 font-bold">8</span>
            Limitation of Liability
          </h2>
          <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
            <p className="text-base mb-4">
              JobDrop provides services "as is" without warranties. Given the complex legal 
              environment in Bosnia and Herzegovina, we strongly recommend users verify all legal requirements 
              for their work arrangements.
            </p>
            <p className="text-base font-medium text-orange-800">
              JobDrop is not liable for: disputes between users, work quality issues, payment problems, 
              or any indirect damages arising from platform use.
            </p>
          </div>
        </section>

        {/* 9. Enforcement and Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-gray-700 font-bold">9</span>
            Enforcement and Account Termination
          </h2>
          <p className="text-base mb-4">
            We reserve the right to suspend or terminate accounts that violate these terms. 
            Serious violations may be reported to relevant authorities in accordance with 
            Bosnia and Herzegovina law.
          </p>
        </section>

        {/* 10. Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-700 font-bold">10</span>
            Changes to These Terms
          </h2>
          <p className="text-base">
            We may update these Terms periodically. Significant changes will be communicated through the platform 
            or via email. Continued use after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Legal Inquiries</h3>
              <p className="mb-2">Email: legal@jobdrop.ba</p>
              <p>Phone: +387 62 888 321</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">General Support</h3>
              <p className="mb-2">Email: support@jobdrop.ba</p>
              <p>Address: Sarajevo, Bosnia and Herzegovina</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}