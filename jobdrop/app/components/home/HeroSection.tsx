"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white text-center px-6 py-16 relative overflow-hidden">
      {/* Background pattern if needed */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('/brick.svg')] bg-repeat"></div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
            Find or offer help — fast, local, and trusted.
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            JobDrop connects everyday people for everyday tasks. Whether it's groceries, tutoring, or errands — post or find help in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/browse"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-center"
            >
              Browse Jobs
            </Link>
            <Link
              href="/post"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300 transition text-center"
            >
              Post a Job
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/homepic.svg"
            alt="Helping Illustration"
            width={500}
            height={500}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
