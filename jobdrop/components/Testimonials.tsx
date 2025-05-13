"use client";

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12">
          What Our Users Say
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md p-6 rounded-md">
            <p className="text-gray-700 italic mb-4">
              “I found a flexible babysitting job near my university. The process was fast and easy.”
            </p>
            <h4 className="font-semibold text-blue-600">Amina, Student</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-md p-6 rounded-md">
            <p className="text-gray-700 italic mb-4">
              “JobDrop helped me find someone to fix my gate in less than an hour. Incredible idea.”
            </p>
            <h4 className="font-semibold text-blue-600">Jasmin, Homeowner</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-md p-6 rounded-md">
            <p className="text-gray-700 italic mb-4">
              “Finally a local app where I can find part-time work without getting scammed.”
            </p>
            <h4 className="font-semibold text-blue-600">Edin, Freelancer</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
