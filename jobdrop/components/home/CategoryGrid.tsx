"use client";

import { useRouter } from "next/navigation";

const categories = [
  { name: "Babysitting", image: "/category_babysitting.svg" },
  { name: "Cleaning", image: "/category_cleaning.svg" },
  { name: "Tutoring", image: "/category_tutoring.svg" },
  { name: "Delivery", image: "/category_delivery.svg" },
  { name: "Pet Care", image: "/category_pets.svg" },
  { name: "Tech Help", image: "/category_technology.svg" },
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
            className="group perspective cursor-pointer"
          >
            <div className="relative preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-blue-50 rounded-lg shadow p-4 flex flex-col items-center justify-center backface-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <p className="text-sm font-medium text-blue-800">{cat.name}</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-white rounded-lg shadow p-4 flex items-center justify-center backface-hidden rotate-y-180">
                <p className="text-xs text-gray-500">Click me →</p>
              </div>
            </div>
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
