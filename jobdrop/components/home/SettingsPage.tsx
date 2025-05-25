"use client";

import { useState } from "react";

const postedJobs = [
  {
    title: "Frontend Developer",
    location: "Sarajevo",
    department: "Engineering",
    date: "May 26, 2025",
  },
  {
    title: "Marketing Intern",
    location: "Remote",
    department: "Marketing",
    date: "May 25, 2025",
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Password");
  const [firstName, setFirstName] = useState("Amina");
  const [lastName, setLastName] = useState("Jusić");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Account Settings</h1>
        <p className="text-gray-600 mb-8">
          Manage your profile and updates here with ease.
        </p>

        {/* Tabs */}
        <div className="flex border-b mb-8 space-x-6">
          {["Password", "Active Jobs", "Delete Account"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-700 text-blue-800"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab: Password */}
        {activeTab === "Password" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Preferences
              </h2>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <span className="ml-2 text-gray-700">
                  Send updates and special offers by email
                </span>
              </label>
            </div>

            <div className="mt-10 flex justify-end gap-4">
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
                Cancel
              </button>
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Save Changes
              </button>
            </div>
          </>
        )}

        {/* Tab: Active Jobs */}
        {activeTab === "Active Jobs" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Active Jobs
            </h2>
            {postedJobs.map((job, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <h3 className="font-bold text-blue-900 text-md">{job.title}</h3>
                <p className="text-sm text-gray-700">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Department:</strong> {job.department}
                </p>
                <p className="text-xs text-gray-500">{job.date}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Delete Account */}
        {activeTab === "Delete Account" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Password
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              For added security, we recommend a <strong>one-time password</strong> when logging in. If you prefer using a password, you can set one up below.
            </p>

            <div className="border border-gray-200 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-700 mb-2">Change Password</h3>
              <p className="text-sm text-gray-600 mb-4">
                To change your password, you’ll need to verify the current one first. Then create a password you’re not using elsewhere.
              </p>
              <input
                type="password"
                value={password}
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mb-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="text-blue-600 font-medium text-sm hover:underline">
                Send reset password instruction
              </button>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-red-600 mb-2">
                Delete Account
              </h2>
              <p className="text-sm text-red-800 mb-4">
                Deleting your account will permanently remove all your data and
                job listings. This action cannot be undone.
              </p>
              <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
                Delete My Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
