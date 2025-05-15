"use client";

import { useState } from "react";

const tabs = ["My Profile", "Security", "Notifications", "Billing", "Data Export"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("My Profile");

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow p-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 mb-6 md:mb-0 md:border-r border-gray-200 pr-6">
        <ul className="space-y-3 text-sm">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 py-2 rounded ${
                activeTab === tab ? "bg-blue-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
          <li className="text-red-600 cursor-pointer mt-6 hover:underline">Delete Account</li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 pl-0 md:pl-6">
        {activeTab === "My Profile" && (
          <div className="space-y-6">
            {/* User header */}
            <div className="flex items-center justify-between border p-4 rounded">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/64"
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="font-semibold text-lg">Amina Jusić</p>
                  <p className="text-sm text-gray-500">Student, Sarajevo</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm hover:underline">Edit</button>
            </div>

            {/* Personal Info */}
            <div className="border rounded p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-800">Personal Information</h2>
                <button className="text-blue-600 text-sm hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-2 text-sm gap-4 mt-2">
                <p><strong>First Name:</strong> Amina</p>
                <p><strong>Last Name:</strong> Jusić</p>
                <p><strong>Email:</strong> amina@email.com</p>
                <p><strong>Phone:</strong> +387 62 888 321</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Status:</strong> Student</p>
              </div>
            </div>

            {/* Address Info */}
            <div className="border rounded p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-gray-800">Address</h2>
                <button className="text-blue-600 text-sm hover:underline">Edit</button>
              </div>
              <div className="grid grid-cols-2 text-sm gap-4 mt-2">
                <p><strong>Street:</strong> Zmaja od Bosne</p>
                <p><strong>House:</strong> 12</p>
                <p><strong>City:</strong> Sarajevo</p>
                <p><strong>Postal Code:</strong> 71000</p>
                <p><strong>Country:</strong> Bosnia and Herzegovina</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Security" && (
          <p className="text-gray-600">Here you can update your password and enable 2FA.</p>
        )}
        {activeTab === "Notifications" && (
          <p className="text-gray-600">Manage your email and app notifications here.</p>
        )}
        {activeTab === "Billing" && (
          <p className="text-gray-600">Billing options will appear here once available.</p>
        )}
        {activeTab === "Data Export" && (
          <p className="text-gray-600">You can request and export your account data.</p>
        )}
      </section>
    </div>
  );
}
