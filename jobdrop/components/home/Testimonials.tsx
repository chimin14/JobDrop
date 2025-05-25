"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  { name: "Selma  ⭐⭐⭐⭐⭐", location: "Sarajevo, Bosnia & Herzegovina", text: "JobDrop helped me find kind, honest help for my mom. I trust it completely." },
  { name: "Amar  ⭐⭐⭐⭐⭐", location: "Ilidža, Bosnia & Herzegovina", text: "I earn flexible income during the week with real, local people. It’s easy and fast." },
  { name: "Lejla  ⭐⭐⭐⭐⭐", location: "Novo Sarajevo, Bosnia & Herzegovina", text: "I posted a small tutoring job and had 3 reliable offers the same day!" },
  { name: "Kenan  ⭐⭐⭐⭐⭐", location: "Zenica, Bosnia & Herzegovina", text: "A game-changer for finding help nearby. Simple and reliable." },
  { name: "Aida  ⭐⭐⭐⭐⭐", location: "Mostar, Bosnia & Herzegovina", text: "As a student, it’s the perfect way to earn extra money locally." },
  { name: "Faruk  ⭐⭐⭐⭐⭐", location: "Tuzla, Bosnia & Herzegovina", text: "Loved how fast I got matched with the right people!" },
];

export default function Testimonials() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const handleSubmit = () => {
    if (!name || !rating || !comment) {
      alert("Please fill out all fields.");
      return;
    }
    alert("Thank you for your feedback!");
    setName("");
    setRating(0);
    setHoveredRating(0);
    setComment("");
  };

  const nextTestimonials = () => {
    setStartIndex((prev) => (prev + 3) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="bg-[#f8fafc] py-16 px-4 md:px-8">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">What Our Users Say</h2>
        <p className="text-gray-600 text-lg">
          Real experiences from real people — students, families, and neighbors building trust through JobDrop.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Feedback Form */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Give us your feedback!</h3>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1 text-sm">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1 text-sm">Select Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  className={`text-xl transition-colors ${
                    star <= (hoveredRating || rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-sm">Your Comment</label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-800 transition-all w-full"
          >
            Submit
          </button>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-md">
          <div className="grid gap-4">
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <p className="font-semibold text-blue-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
                <p className="text-gray-700 italic text-sm mt-2">“{t.text}”</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={nextTestimonials}
              className="text-blue-700 hover:text-blue-900 transition"
              title="Show more testimonials"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
