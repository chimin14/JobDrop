export default function PrivacyPolicyPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-10">Privacy Policy</h1>

      <div className="space-y-10 text-sm leading-7 text-justify">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">1. What Is a Privacy Policy?</h2>
          <p>
            This Privacy Policy explains how JobDrop ("we", "our", or "us") collects, uses, and protects your personal data when you interact with our website. Personal data refers to information that can be used to identify you directly or indirectly.
            We believe in transparency, so this page outlines our practices clearly, including what information we collect, how we use it, and the rights you have regarding your data.
          </p>
        </section>

        {/* 2. Why This Policy Matters */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">2. Why This Policy Matters</h2>
          <p>
            Having a privacy policy protects both you and JobDrop. We are committed to complying with international and local data privacy laws, such as the GDPR, CCPA, and PIPEDA, even when not strictly required. This policy also builds trust by being open about how we handle your information.
          </p>
        </section>

        {/* 3. Data We Collect */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">3. What Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Personal identifiers: Name, email address, phone number, location</li>
            <li>Account details: Skills, experience, photo, user preferences</li>
            <li>Technical data: IP address, browser type, device ID</li>
            <li>Usage data: Pages visited, time spent, interactions</li>
            <li>Cookies and tracking data (see section below)</li>
          </ul>
        </section>

        {/* 4. Why We Collect Your Data */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">4. Why We Collect Your Data</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>To provide personalized job-matching services</li>
            <li>To improve website functionality and security</li>
            <li>To communicate updates, offers, or alerts</li>
            <li>To comply with legal obligations</li>
            <li>To analyze platform usage and improve performance</li>
          </ul>
        </section>

        {/* 5. How Data Is Collected */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">5. How We Collect Data</h2>
          <p>
            We collect data in multiple ways:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>When you fill out forms or register</li>
            <li>When you browse or interact with the site</li>
            <li>Through cookies, analytics tools, and session tracking</li>
            <li>From publicly available sources or third-party integrations</li>
          </ul>
        </section>

        {/* 6. Use of Cookies */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">6. Cookies and Tracking</h2>
          <p>
            We use cookies to understand how users interact with JobDrop, improve their experience, and personalize content. Cookies may also be used by analytics and advertising tools such as Google Analytics. You can control cookie settings in your browser or reject non-essential cookies on our site.
          </p>
        </section>

        {/* 7. Third-Party Sharing */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">7. Data Sharing and Third Parties</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Employers or job posters (only if you apply to a job)</li>
            <li>Trusted third-party vendors (e.g. hosting providers, email platforms)</li>
            <li>Law enforcement or regulators if required by law</li>
          </ul>
        </section>

        {/* 8. How We Protect Your Data */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">8. How We Protect Your Data</h2>
          <p>
            Your data is stored securely with industry-standard safeguards including encryption, access controls, and secure servers. While no system is completely immune, we actively monitor and defend against unauthorized access or threats.
          </p>
        </section>

        {/* 9. Your Rights */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">9. Your Rights</h2>
          <p>
            You have the right to access, correct, delete, or restrict use of your personal data. You may also request a copy of your data or withdraw consent at any time by contacting us.
          </p>
        </section>

        {/* 10. International Users */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">10. International Compliance</h2>
          <p>
            JobDrop is based in Bosnia and Herzegovina. If you are located outside this region, you consent to processing of your information in accordance with this policy and the applicable data protection laws of your region.
          </p>
        </section>

        {/* 11. Policy Changes */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">11. Changes to This Policy</h2>
          <p>
            We reserve the right to update this policy. We will notify users of significant changes via email, banners, or platform alerts. The latest version will always be available on this page.
          </p>
        </section>

        {/* 12. Contact Info */}
        <section>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your data is handled, please reach out:
          </p>
          <p>
            JobDrop Team<br />
            Sarajevo, Bosnia and Herzegovina<br />
            Email: <a href="mailto:jobdrop.team@gmail.com" className="text-blue-600 underline">jobdrop.team@gmail.com</a><br />
            Phone: +387 62 888 321
          </p>
        </section>
      </div>
    </main>
  );
}
