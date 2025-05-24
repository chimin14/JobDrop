"use client";

const testimonials = [
  {
    name: "Selma",
    location: "Sarajevo",
    text: "JobDrop helped me find kind, honest help for my mom. I trust it completely.",
    avatar: "/default-user.png",
  },
  {
    name: "Amar",
    location: "Ilidža",
    text: "I earn flexible income during the week with real, local people. It’s easy and fast.",
    avatar: "/default-user.png",
  },
  {
    name: "Lejla",
    location: "Novo Sarajevo",
    text: "I posted a small tutoring job and had 3 reliable offers the same day!",
    avatar: "/default-user.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Users Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Real experiences from real people — students, families, and neighbors building trust through JobDrop.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <p className="font-semibold text-blue-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
