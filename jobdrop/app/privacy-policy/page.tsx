"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Effective Date: May 2025</p>

      <section className="space-y-6 text-gray-800 leading-relaxed text-[0.95rem]">
        <p>
          Welcome to JobDrop. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our platform.
          Please read this policy carefully to understand our views and
          practices regarding your personal data.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Personal details (name, email address, phone number, location)</li>
          <li>Profile information (skills, experiences, photo, description)</li>
          <li>Job postings and applications</li>
          <li>Messages exchanged on the platform</li>
          <li>Device and log data (IP address, browser type, usage)</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800">2. How We Use Your Information</h2>
        <p>We use the information to:</p>
        <ul className="list-disc pl-6">
          <li>Provide and improve our services</li>
          <li>Match job seekers with job posters</li>
          <li>Communicate important updates</li>
          <li>Enhance safety and trust through verification</li>
          <li>Prevent fraud and misuse of the platform</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800">3. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data.</p>
        <p>We may share data with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers assisting in platform maintenance</li>
          <li>Law enforcement, when legally required</li>
          <li>Partners, only with your consent</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800">4. Security of Your Information</h2>
        <p>
          We implement technical and organizational safeguards to protect your
          personal data. However, no system is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">5. Your Data Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Request portability of your data</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800">6. Children’s Privacy</h2>
        <p>
          JobDrop is not intended for use by anyone under the age of 16. We do
          not knowingly collect data from minors.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. You will be notified
          of significant changes via the platform or email.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">8. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding your data,
          you can contact us at:
          <br />
          <strong>Email:</strong> privacy@jobdrop.ba
          <br />
          <strong>Phone:</strong> +387 62 888 321
        </p>
      </section>
    </main>
  );
}
