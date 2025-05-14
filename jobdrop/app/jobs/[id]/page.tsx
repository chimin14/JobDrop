"use client";

//import { useParams } from "next/navigation";

export default function JobDetailPage() {
  // const { id } = useParams();

  // Later: fetch job data by `id`
  const job = {
    
    title: "Help with groceries",
    description: "Carry groceries to 4th floor. Takes ~30 minutes.",
    location: "Ilidža",
    price: "20KM",
    poster: "Amina J.",
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-700 mb-2"><strong>Pay:</strong> {job.price}</p>
      <p className="text-gray-700 mb-4"><strong>Posted by:</strong> {job.poster}</p>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-800">{job.description}</p>
      </div>

      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Apply for this Job
      </button>
    </main>
  );
}

// Later: Add functionality to apply for the job