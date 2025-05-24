"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [email, setEmail] = useState("your@email.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Account Settings</h1>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          className="w-full border border-gray-300 rounded-md px-4 py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">
          Leave blank to keep your current password.
        </p>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="ml-2 text-gray-700">Receive email notifications</span>
        </label>
      </div>

      {/* Save button */}
      <div className="mb-8">
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
          Save Changes
        </button>
      </div>

      <hr className="my-6" />

      {/* Danger zone */}
      <div>
        <h2 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h2>
        <p className="text-sm text-gray-600 mb-4">
          Deleting your account is permanent and cannot be undone.
        </p>
        <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
          Delete My Account
        </button>
      </div>
    </div>
  );
}
