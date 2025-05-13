"use client";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-16 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to earn or get help?
        </h2>
        <p className="text-lg mb-8">
          Join Bosnia’s growing community of job seekers and task posters today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/register"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Create an Account
          </a>
          <a
            href="/browse"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition"
          >
            Browse Jobs
          </a>
        </div>
      </div>
    </section>
  );
}
