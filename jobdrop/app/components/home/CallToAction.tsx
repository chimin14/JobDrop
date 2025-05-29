"use client";

import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-blue-700 text-white py-20 px-6 text-center">
      {/* Visible SVG icon */}
      <div className="flex justify-center mb-6">
        <Image
          src="/start.svg"
          alt="Get Started"
          width={56}
          height={56}
          className="w-14 h-14"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you want to earn extra money or need help with a small task — JobDrop makes it simple, safe, and fast.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/post"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Post Your First Job
          </Link>
          <Link
            href="/browse"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Find Your First Job
          </Link>
        </div>
      </div>
    </section>
  );
}
