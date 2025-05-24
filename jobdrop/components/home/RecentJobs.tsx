"use client";

const jobs = [
  {
    title: "Grocery Delivery for Elderly",
    location: "Grbavica",
    pay: "20KM",
    notes: "Needs help this afternoon. Few bags only.",
  },
  {
    title: "Dog Walking – 3 Days",
    location: "Hrasno",
    pay: "15KM/day",
    notes: "Medium dog, 30 min walk, leash provided.",
  },
  {
    title: "Math Tutoring – Grade 9",
    location: "Online or Sarajevo",
    pay: "25KM/hr",
    notes: "Looking for someone twice a week.",
  },
];

export default function RecentJobs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
        Recent Job Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow transition"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Pay:</strong> {job.pay}
            </p>
            <p className="text-gray-600 text-sm italic">"{job.notes}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
