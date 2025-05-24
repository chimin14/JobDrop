"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const jobData = [
  {
    title: "Help with delivery",
    category: "Delivery",
    location: "Ilidža",
    price: 22,
    description: "Looking for reliable help, about 1-2 hours of work.",
    notes: "Must have a car.",
  },
  {
    title: "Apartment cleaning",
    category: "Cleaning",
    location: "Grbavica",
    price: 37,
    description: "Should be done quickly, tools provided if needed.",
    notes: "Must be able to lift 20kg.",
  },
  {
    title: "Math tutoring",
    category: "Tutoring",
    location: "Novo Sarajevo",
    price: 23,
    description: "Must be available this weekend.",
    notes: "High school level.",
  },
  {
    title: "Dog walking",
    category: "Pet Sitting",
    location: "Hrasno",
    price: 15,
    description: "Prefer someone from the neighborhood.",
    notes: "Dog is friendly.",
  },
  {
    title: "Fix bathroom sink",
    category: "Plumbing",
    location: "Centar",
    price: 21,
    description: "Nothing too difficult, just need a hand.",
    notes: "Must have tools.",
  },
  {
    title: "Mow the lawn",
    category: "Gardening",
    location: "Vogošća",
    price: 30,
    description: "You'll be paid after completion on site.",
    notes: "Must have own mower.",
  },
  {
    title: "Move a sofa",
    category: "Moving",
    location: "Stari Grad",
    price: 42,
    description: "Simple task for someone experienced.",
    notes: "Must have a truck.",
  },
  {
    title: "Run an errand",
    category: "Errands",
    location: "Otoka",
    price: 18,
    description: "Need assistance ASAP!",
    notes: "Must be available today.",
  },
  {
    title: "Set up WiFi router",
    category: "Tech Help",
    location: "Dobrinja",
    price: 25,
    description: "Must be punctual and polite.",
    notes: "Experience with routers preferred.",
  },
  {
    title: "Watch a toddler",
    category: "Babysitting",
    location: "Marijin Dvor",
    price: 35,
    description: "Flexible schedule, message me if interested.",
    notes: "Must have experience with toddlers.",
  },
];

export default function BrowseJobsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("default");
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const uniqueCategories = [
    ...new Set(jobData.map((job) => job.category)),
  ].sort();
  const uniqueLocations = [
    ...new Set(jobData.map((job) => job.location)),
  ].sort();

  const filteredJobs = jobData
    .filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (category ? job.category === category : true) &&
        (location ? job.location === location : true)
    )
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Browse Jobs</h1>

      {/* Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 px-4 py-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="default">Sort by Salary</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      {/* Jobs */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-md border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-blue-800">{job.title}</h2>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600 mb-2">Pay: {job.price}KM</p>
            <p className="text-sm text-gray-500 mb-4">{job.description}</p>
            <button
              onClick={() => {
                setSelectedJob(job);
                setModalOpen(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-blue-900">
              {selectedJob.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Posted by: {selectedJob.postedBy || "Unknown"}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Pay:</strong> {selectedJob.price}KM
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Description:</strong> {selectedJob.description}
            </p>
            <p className="text-gray-600 text-sm italic">
              {selectedJob.notes || "No additional notes."}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
