"use client";

export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
          Find or Post Short-Term Jobs, Instantly.
        </h1>
        <p className="text-lg sm:text-xl text-blue-800 mb-8">
          JobDrop connects real people with real opportunities — simple, local, and flexible.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/browse"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Browse Jobs
          </a>
          <a
            href="/post"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition"
          >
            Post a Job
          </a>
        </div>
      </div>
    </section>
  );
}
