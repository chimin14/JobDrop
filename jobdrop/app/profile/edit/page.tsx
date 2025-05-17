'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("Amina Jusić");
  const [location, setLocation] = useState("Sarajevo, Bosnia & Herzegovina");
  const [email, setEmail] = useState("amina@example.com");
  const [phone, setPhone] = useState("+387 61 123 456");
  const [bio, setBio] = useState("University student looking for flexible part-time jobs.");
  const [skills, setSkills] = useState("Tutoring, Babysitting, Delivery");
  const [experiences, setExperiences] = useState([{ role: '', company: '', years: '', description: '' }]);
  const [image, setImage] = useState<string | null>(null);

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updated = [...experiences];
    updated[index][field as keyof typeof updated[0]] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([...experiences, { role: '', company: '', years: '', description: '' }]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result?.toString();
    if (base64String) {
      setImage(base64String); // ← This will trigger preview
    }
  };
  reader.readAsDataURL(file);
};

  {image && (
    <img
      src={image}
      alt="Preview"
      className="mt-4 w-24 h-24 rounded-full object-cover border"
    />
  )}


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profileData = {
      name,
      location,
      email,
      phone,
      bio,
      skills: skills.split(',').map((s) => s.trim()),
      experiences,
      photo: image
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    router.push("/profile");
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-6">
        {/* Upload Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500"
          />
          {image && <img src={image} alt="Preview" className="mt-4 w-24 h-24 rounded-full object-cover" />}
        </div>

        {/* Name, Location, Email, Phone */}
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
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Bio */}
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

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-2 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => handleExperienceChange(idx, 'role', e.target.value)}
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)}
                  className="p-2 border rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Years"
                  value={exp.years}
                  onChange={(e) => handleExperienceChange(idx, 'years', e.target.value)}
                  className="p-2 border rounded w-full"
                />
              </div>
              <textarea
                placeholder="Description"
                rows={3}
                value={exp.description}
                onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)}
                className="p-2 border rounded w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="text-sm text-blue-600 hover:underline"
          >
            + Add Another Experience
          </button>
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
