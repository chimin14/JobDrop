"use client";

import { useRouter } from "next/navigation";

const categories = [
  { name: "Babysitting", icon: "🧸" },
  { name: "Cleaning", icon: "🧼" },
  { name: "Tutoring", icon: "📘" },
  { name: "Delivery", icon: "📦" },
  { name: "Pet Care", icon: "🐕" },
  { name: "Tech Help", icon: "💻" },
];

export default function CategoryGrid() {
  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/browse?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
        Popular Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleClick(cat.name)}
            className="bg-blue-50 hover:bg-blue-100 rounded-lg shadow p-4 transition cursor-pointer"
          >
            <div className="text-3xl mb-2">{cat.icon}</div>
            <p className="text-sm font-medium text-blue-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
