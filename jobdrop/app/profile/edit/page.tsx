"use client";

import { useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("Amina Jusić");
  const [location, setLocation] = useState("Sarajevo, Bosnia & Herzegovina");
  const [bio, setBio] = useState("University student looking for flexible part-time jobs.");
  const [skills, setSkills] = useState("Tutoring, Babysitting, Delivery");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, location, bio, skills });
    // Later: send this data to your backend
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
