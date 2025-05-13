"use client";

import { FaClipboardList, FaSearch, FaStar } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <FaClipboardList className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Post a Job</h3>
            <p className="text-gray-600">
              Describe the task, set a price, and let people apply.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <FaSearch className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Browse & Apply</h3>
            <p className="text-gray-600">
              Search for jobs that match your skills and availability.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <FaStar className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Complete & Review</h3>
            <p className="text-gray-600">
              Finish the job, get paid directly, and leave a review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
