export default function TermsPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-10">Terms and Conditions</h1>

      <div className="space-y-10 text-sm leading-7 text-justify">


        {/* 1. Introduction */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">1. Introduction</h2>
          <p>
            Welcome to JobDrop, a digital platform developed to connect job providers with individuals seeking short-term or task-based employment opportunities in Bosnia and Herzegovina. This Terms and Conditions document governs your use of our platform, services, and all associated content. By accessing or using JobDrop, you agree to comply with and be legally bound by these terms. If you do not agree with these terms, you may not use our platform.
            </p>
        </section>

        {/* 2. Changes to Terms */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">2. Changes to Terms</h2>
          <p>
            JobDrop reserves the right to update, modify, or replace any part of these Terms at our sole discretion. Updates will be communicated through in-app notifications, email (if provided), or posted directly on this page. Your continued use of the platform after such changes constitutes acceptance of the new terms. It is your responsibility to review these Terms periodically.          
            </p>
        </section>

        {/* 3. Acceptance of Agreement */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">3. Acceptance of Agreement</h2>
          <p>
            This agreement is a legal contract between you (“User”) and JobDrop (“we”, “us”, “our”). It outlines your rights, duties, and limitations while using our services. By creating an account, browsing the platform, or applying for a job, you confirm that you are at least 18 years of age, or have the legal authority to form a binding contract in your jurisdiction.
          </p>
        </section>

        {/* 4. User Responsibilities */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">4. User Responsibilities</h2>
          <p>As a user of JobDrop, you agree to:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Provide accurate and truthful information when registering or posting content.</li>
            <li>Use the platform only for lawful purposes and in accordance with these Terms.</li>
            <li>Keep your login credentials secure and confidential.</li>
            <li>Immediately report any unauthorized account activity or security breaches.</li>
            <li>Respect other users and interact in a professional, non-discriminatory manner.</li>
          </ul>
        </section>

        {/* 5. Prohibited Activities */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">5. Prohibited Activities</h2>
          <p>
            The following actions are strictly prohibited on JobDrop:
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Introducing or uploading viruses, malware, or malicious code.</li>
            <li>Hacking or attempting to gain unauthorized access to the system.</li>
            <li>Using your referral link for self-purchases or manipulation of promotions.</li>
            <li>Creating fake profiles or impersonating others.</li>
            <li>Posting inappropriate, offensive, or misleading job ads.</li>
            <li>Attempting to disrupt or overload platform infrastructure (DDoS attacks).</li>
          </ul>
        </section>

        {/* 6. Content Ownership */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">6. Content Ownership</h2>
          <p>
            All original content on JobDrop — including logos, UI elements, icons, texts, graphics, and design — is protected by intellectual property laws and belongs to JobDrop or its licensed providers. Any unauthorized reproduction, distribution, or use of such materials is strictly prohibited.
          </p>
        </section>

        {/* 7. Rights to Access and Use */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">7. Rights to Access and Use</h2>
          <p>
            Users are granted a limited, non-exclusive, non-transferable right to access and use JobDrop for personal or business purposes as intended. You may not redistribute, republish, scrape, or sublicense any part of the content or services unless explicitly authorized. Educational or promotional reuse of screenshots must credit JobDrop accordingly.
          </p>
        </section>

        {/* 8. Enforcement of Terms */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">8. Enforcement of Terms</h2>
          <p>
            We reserve the right to suspend or permanently terminate your access to JobDrop for violating these terms. JobDrop may also report violations to relevant legal authorities. We assume no responsibility for user interactions and disclaim all liability from third-party behavior.
          </p>
        </section>

        {/* 9. Third-Party Links */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">9. Third-Party Links and Content</h2>
          <p>
            The platform may include links to third-party websites, services, or offers. These links are provided for convenience only. JobDrop does not control and is not responsible for the content, privacy policies, or practices of third-party websites. Your use of linked sites is entirely at your own risk.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">10. Limitation of Liability and Disclaimers</h2>
          <p>
            JobDrop provides all services “as is” without warranties or guarantees of any kind. We are not liable for indirect, incidental, or consequential damages arising out of or related to the use or inability to use the platform. This includes loss of earnings, service interruptions, or data loss.
          </p>
          <p>
            You acknowledge that use of the platform is entirely at your own risk and responsibility.
          </p>
        </section>

        {/* 11. Privacy Policy */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">11. Privacy Policy</h2>
          <p>
            JobDrop respects your privacy and handles data in accordance with our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>. This includes how we collect, process, and share user data. By using the platform, you consent to our data practices.
          </p>
        </section>

        {/* 12. Governing Law */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Bosnia and Herzegovina. Any disputes arising under these terms shall be resolved in the appropriate courts located in Sarajevo. Users agree to submit to this jurisdiction and waive any objections based on location.
          </p>
        </section>

        {/* 13. Miscellaneous */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">13. Miscellaneous</h2>
          <p>
            These Terms represent the entire agreement between JobDrop and the user. If any provision is found invalid or unenforceable, the remaining provisions shall remain in full force and effect. Promotional offers may be changed, suspended, or withdrawn without notice.
          </p>
          <p>
            Headings in this document are for reference only and do not affect the interpretation of the content.
          </p>
        </section>

        {/* 14. Contact Information */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">14. Contact Information</h2>
          <p>
            For questions regarding these Terms or to report abuse:
          </p>
          <p>
            <strong>JobDrop Team</strong><br />
            Sarajevo, Bosnia and Herzegovina<br />
            Email: <a href="mailto:jobdrop.team@gmail.com" className="text-blue-600 underline">jobdrop.team@gmail.com</a><br />
            Phone: +387 62 888 321
          </p>
        </section>
      </div>
    </main>
  );
}
