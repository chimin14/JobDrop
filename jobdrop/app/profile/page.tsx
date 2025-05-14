"use client";

export default function ProfilePage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">My Profile</h1>

      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        {/* User info */}
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Amina Jusić</h2>
            <p className="text-sm text-gray-500">Sarajevo, Bosnia & Herzegovina</p>
          </div>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">About Me</h3>
          <p className="text-gray-700">
            I am a university student looking for flexible part-time jobs to support my studies. I am reliable,
            communicative, and enjoy working with people.
          </p>
        </div>

        {/* Skills or Interests */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">Tutoring</li>
            <li className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">Babysitting</li>
            <li className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">Delivery</li>
            <li className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">Cleaning</li>
          </ul>
        </div>

        {/* Edit Button */}
        <a href="/profile/edit">
  <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
    Edit Profile
  </button>
</a>

      </div>
    </main>
  );
}
