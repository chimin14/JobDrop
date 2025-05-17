"use client";

import { useState } from "react";
import SettingsPage from "../components/SettingsPage";



const postedJobs = [
  {
    title: "Deliver documents to City Hall",
    description: "Small task, about 45 minutes total.",
    date: "May 5, 2025",
    notes: "Documents must be delivered before noon.",
  },
  {
    title: "Math tutoring for 9th grade",
    description: "Online or in-person, 2x weekly.",
    date: "May 2, 2025",
    notes: "Student needs help with algebra and geometry.",
  },
  {
    title: "Window cleaning",
    description: "First floor apartment, 4 windows total.",
    date: "May 3, 2025",
    notes: "Cleaning supplies provided.",
  },
  {
    title: "Pet sitting (cat)",
    description: "Feed and check litterbox daily.",
    date: "May 1, 2025",
    notes: "Needs to be available for 3 days.",
  },
  {
    title: "Move small furniture",
    description: "Help move items from storage to apartment.",
    date: "May 4, 2025",
    notes: "No elevator, second floor walk-up.",
  },
];

const appliedJobs = [
  {
    title: "Gardening assistance",
    description: "Mow lawn and trim hedges.",
    date: "April 30, 2025",
    postedBy: "Selma K.",
    notes: "Must bring your own tools.",
  },
  {
    title: "Fix kitchen faucet",
    description: "Leaking issue, needs tightening or replacement.",
    date: "April 29, 2025",
    postedBy: "Jasmin H.",
    notes: "Experienced handyman preferred.",
  },
  {
    title: "Grocery shopping for elderly neighbor",
    description: "Pick up a small list of groceries.",
    date: "May 1, 2025",
    postedBy: "Armin D.",
    notes: "Reimbursement on delivery.",
  },
  {
    title: "Evening babysitting",
    description: "Watch two children for 3 hours.",
    date: "May 3, 2025",
    postedBy: "Mina Z.",
    notes: "Dinner will be prepared beforehand.",
  },
  {
    title: "Deliver flower bouquet",
    description: "Deliver to address in Ilidža by 4PM.",
    date: "May 2, 2025",
    postedBy: "Lejla M.",
    notes: "Flowers will be pre-arranged.",
  },
];

const messages = [
  {
    from: "Selma K.",
    subject: "Your application for gardening",
    preview: "Hi! Just wanted to confirm your availability on Saturday…",
    date: "Apr 28, 2025",
  },
  {
    from: "Mina Z.",
    subject: "Babysitting request",
    preview: "Thanks for applying — can we schedule a short call…",
    date: "Apr 27, 2025",
  },
  {
    from: "Jasmin H.",
    subject: "Fixing kitchen faucet",
    preview: "Hey, are you okay with bringing your own tools?",
    date: "Apr 26, 2025",
  },
  {
    from: "Lejla M.",
    subject: "Flower delivery timing",
    preview: "Please deliver before 4PM. Let me know when you're on the way.",
    date: "Apr 25, 2025",
  },
  {
    from: "JobDrop Team",
    subject: "New updates to your dashboard",
    preview: "We’ve improved the layout and fixed a few bugs!",
    date: "Apr 24, 2025",
  },
];

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("jobs");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const renderCard = (item: any, type: "job" | "message") => (
    <div
      key={item.title || item.subject}
      className="relative bg-[#f1f1f3] rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer"
      onClick={() => openModal(item)}
    >
      <h3 className="text-lg font-bold mb-2 hover:text-[#7257fa] hover:underline">
        {item.title || item.subject}
      </h3>
      <p className="text-sm text-gray-700 mb-2">{item.description || item.preview}</p>
      <div className="text-xs text-gray-500">{item.date}</div>
      <div className="absolute bottom-0 right-0 bg-[#7257fa] p-2 rounded-bl-xl rounded-tr-xl hover:bg-black transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15"
          width="15"
        >
          <path
            fill="#fff"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          ></path>
        </svg>
      </div>
    </div>
  );

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
            <h1 className="text-2xl font-bold text-blue-900 mb-6">My Posted Jobs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {postedJobs.map((job) => renderCard(job, "job"))}
            </div>
          </div>
        )}

        {selectedTab === "applications" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-6">My Applications</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appliedJobs.map((job) => renderCard(job, "job"))}
            </div>
          </div>
        )}

        {selectedTab === "messages" && (
          <div>
            <h1 className="text-2xl font-bold text-blue-900 mb-6">Messages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((msg) => renderCard(msg, "message"))}
            </div>
          </div>
        )}

{selectedTab === "settings" && (
  <div className="max-w-6xl mx-auto">
    <SettingsPage />
  </div>
)}



      </section>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center" onClick={closeModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl" onClick={closeModal}>×</button>
            <h2 className="text-xl font-bold mb-2">{selectedItem.title || selectedItem.subject}</h2>
            <p className="text-sm text-gray-500 mb-4">{selectedItem.date}</p>
            <p className="text-gray-700 mb-3">{selectedItem.description || selectedItem.preview}</p>
            {selectedItem.notes && <p className="text-sm italic text-gray-600">{selectedItem.notes}</p>}
          </div>
        </div>
      )}
    </main>
  );
}
