"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("jobs");

  return (
    <main className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-8">JobDrop</h2>
        <nav className="space-y-3">
          <button onClick={() => setSelectedTab("jobs")} className="block w-full text-left hover:text-blue-300">My Jobs</button>
          <button onClick={() => setSelectedTab("applications")} className="block w-full text-left hover:text-blue-300">Applications</button>
          <button onClick={() => setSelectedTab("messages")} className="block w-full text-left hover:text-blue-300">Messages</button>
          <button onClick={() => setSelectedTab("settings")} className="block w-full text-left hover:text-blue-300">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        {selectedTab === "jobs" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-4">My Posted Jobs</h1>
            <div className="space-y-4">
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">Deliver documents to City Hall</h3>
                <p className="text-sm text-gray-600">Location: Sarajevo | Pay: 15KM</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">Math tutoring for 9th grade</h3>
                <p className="text-sm text-gray-600">Location: Grbavica | Pay: 25KM/hr</p>
              </div>
            </div>
          </div>
        )}

        {selectedTab === "applications" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-4">My Applications</h1>
            <p className="text-gray-600">You have applied to 3 jobs.</p>
          </div>
        )}

        {selectedTab === "messages" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-4">Messages</h1>
            <p className="text-gray-600">No messages yet.</p>
          </div>
        )}

        {selectedTab === "settings" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-4">Account Settings</h1>
            <p className="text-gray-600">This is where you would change your info later.</p>
          </div>
        )}
      </section>
    </main>
  );
}
