"use client";

import Image from "next/image";
import { MdPostAdd, MdPeopleAlt, MdDoneAll } from "react-icons/md";

const steps = [
  {
    title: "1. Post a Job",
    description: "Describe the task, set a location and price — it only takes a minute.",
    icon: <MdPostAdd className="text-blue-700 w-10 h-10" />,
  },
  {
    title: "2. Get Responses",
    description: "Helpers in your area apply — you review their profiles and ratings.",
    icon: <MdPeopleAlt className="text-blue-700 w-10 h-10" />,
  },
  {
    title: "3. Get It Done",
    description: "Connect, complete the job, and rate each other to build trust.",
    icon: <MdDoneAll className="text-blue-700 w-10 h-10" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* SVG Image */}
        <div className="flex justify-center">
          <Image
            src="/howitworks.svg"
            alt="How It Works"
            width={400}
            height={400}
            className="w-full max-w-md"
          />
        </div>

        {/* Steps */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
            How It Works
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition"
              >
                <div className="mt-1">{step.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
