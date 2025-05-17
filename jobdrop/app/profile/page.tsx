'use client';

import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('profileData');
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  if (!profile) {
    return (
      <main className="p-6 max-w-3xl mx-auto">
        <p className="text-gray-500">No profile data available. Please <a href="/profile/edit" className="text-blue-600 underline">edit your profile</a>.</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      {/* ✅ Title */}
      <h1 className="text-3xl font-bold text-blue-900 mb-6">My Profile</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-8">
        {/* ✅ Profile Header */}
        <div className="flex items-center gap-6">
          <img
            src={profile.photo || '/images/pic_default.jpg'}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-500">{profile.location}</p>
            <p className="text-sm text-gray-500">{profile.email}</p>
            <p className="text-sm text-gray-500">{profile.phone}</p>
          </div>
        </div>

        {/* ✅ Bio */}
        <section>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">About</h3>
          <p className="text-gray-700">{profile.bio}</p>
        </section>

        {/* ✅ Skills */}
        <section>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-3">
            {profile.skills.map((skill: string, i: number) => (
              <li key={i} className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* ✅ Experience */}
        <section>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Experience</h3>
          <div className="space-y-6">
            {profile.experiences.map((exp: any, i: number) => (
              <div key={i} className="border-l-4 border-blue-500 pl-4">
                <p className="text-lg font-medium text-gray-800">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.company} | {exp.years}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Edit Button */}
        <div className="pt-4">
          <a href="/profile/edit">
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Edit Profile
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
