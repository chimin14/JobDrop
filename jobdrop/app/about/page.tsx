"use client";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">About Us</h1>

      <section className="space-y-6 text-gray-800 leading-relaxed text-[0.96rem]">
        <p>
          JobDrop was born from a simple moment — a message from a grandma who needed groceries,
          and a grandchild who couldn't help at that moment. That one message made us realize how
          many people around us are in similar situations — needing help, offering help, but not knowing how to connect.
        </p>

        <p>
          In Bosnia and Herzegovina, people rely on Facebook groups to find someone to walk a dog,
          help with homework, or carry heavy bags. But those methods are unorganized and risky.
          That’s why we created <strong>JobDrop</strong> — a place where small, everyday jobs meet trustworthy people.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6">Our Mission</h2>
        <p>
          To connect communities through small, local jobs. We want to empower students, support families,
          and make informal work safer and more accessible.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-6">What Makes Us Different</h2>
        <ul className="list-disc pl-6">
          <li>No middleman fees — users connect directly</li>
          <li>Built specifically for the needs of Bosnia</li>
          <li>Verified users, reviews, and a supportive local culture</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800 mt-6">Our Team</h2>
        <p>
          We are five students with different strengths — design, development, business and heart — united by a
          shared goal: to make help more reachable and work more flexible.
        </p>
        <ul className="list-disc pl-6">
          <li>Amina Jusić – Project Manager & Business Lead</li>
          <li>Dejan Šućur – Frontend Developer</li>
          <li>Harun Mezit – Backend Developer</li>
          <li>Džejlan Čolakhodžić – Database & Data Logic</li>
          <li>Omer Bečić – QA & Support</li>
        </ul>

        <p className="mt-8 text-center font-medium text-blue-700">
          Together, we believe in local help, real people, and good work done simply.
        </p>
      </section>
    </main>
  );
}
