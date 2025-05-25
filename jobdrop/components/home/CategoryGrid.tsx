"use client";

import { useRouter } from "next/navigation";

const categories = [
  { name: "Babysitting", image: "baby.svg" },
  { name: "Cleaning", image: "environment.svg" },
  { name: "Tutoring", image: "tutoring.svg" },
  { name: "Delivery", image: "delivery.svg" },
  { name: "Pet Care", image: "pet.svg" },
  { name: "Tech Help", image: "tech.svg" },
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
            className="bg-blue-50 hover:bg-blue-100 rounded-lg shadow p-4 transition cursor-pointer flex flex-col items-center"
          >
            <div className="w-full h-24 flex items-center justify-center mb-3">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-16 object-contain"
              />
            </div>
            <p className="text-sm font-medium text-blue-800">{cat.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
