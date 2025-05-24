'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/home/Sidebar';
import Card from '@/components/home/Cards'; // <-- new Tailwind card

const tabs = ['My Jobs', 'Applications', 'Messages', 'Settings'];

type JobCard = {
  title: string;
  description: string;
  date: string;
  notes?: string;
  photo?: string;
  link?: string;
};

type Message = {
  from: string;
  subject: string;
  preview: string;
  date: string;
  link?: string;
};

// MOCK DATA
const mockPostedJobs: JobCard[] = [
  {
    title: "Deliver documents to City Hall",
    description: "Small task, about 45 minutes total.",
    date: "May 5, 2025",
    notes: "Documents must be delivered before noon.",
    link: "#"
  },
  {
    title: "Math tutoring for 9th grade",
    description: "Online or in-person, 2x weekly.",
    date: "May 2, 2025",
    notes: "Student needs help with algebra and geometry.",
    link: "#"
  },
  {
    title: "Window cleaning",
    description: "First floor apartment, 4 windows total.",
    date: "May 3, 2025",
    notes: "Cleaning supplies provided.",
    link: "#"
  },
  {
    title: "Pet sitting (cat)",
    description: "Feed and check litterbox daily.",
    date: "May 1, 2025",
    notes: "Needs to be available for 3 days.",
    link: "#"
  },
  {
    title: "Move small furniture",
    description: "Help move items from storage to apartment.",
    date: "May 4, 2025",
    notes: "No elevator, second floor walk-up.",
    link: "#"
  },
];

const appliedJobs: JobCard[] = [
  {
    title: "Gardening assistance",
    description: "Mow lawn and trim hedges.",
    date: "April 30, 2025",
    notes: "Must bring your own tools.",
    link: "#"
  },
  {
    title: "Fix kitchen faucet",
    description: "Leaking issue, needs tightening or replacement.",
    date: "April 29, 2025",
    notes: "Experienced handyman preferred.",
    link: "#"
  },
  {
    title: "Grocery shopping for elderly neighbor",
    description: "Pick up a small list of groceries.",
    date: "May 1, 2025",
    notes: "Reimbursement on delivery.",
    link: "#"
  },
  {
    title: "Evening babysitting",
    description: "Watch two children for 3 hours.",
    date: "May 3, 2025",
    notes: "Dinner will be prepared beforehand.",
    link: "#"
  },
  {
    title: "Deliver flower bouquet",
    description: "Deliver to address in Ilidža by 4PM.",
    date: "May 2, 2025",
    notes: "Flowers will be pre-arranged.",
    link: "#"
  },
];

const messages: Message[] = [
  {
    from: "Selma K.",
    subject: "Your application for gardening",
    preview: "Hi! Just wanted to confirm your availability on Saturday…",
    date: "Apr 28, 2025",
    link: "#"
  },
  {
    from: "Mina Z.",
    subject: "Babysitting request",
    preview: "Thanks for applying — can we schedule a short call…",
    date: "Apr 27, 2025",
    link: "#"
  },
  {
    from: "Jasmin H.",
    subject: "Fixing kitchen faucet",
    preview: "Hey, are you okay with bringing your own tools?",
    date: "Apr 26, 2025",
    link: "#"
  },
  {
    from: "Lejla M.",
    subject: "Flower delivery timing",
    preview: "Please deliver before 4PM. Let me know when you're on the way.",
    date: "Apr 25, 2025",
    link: "#"
  },
  {
    from: "JobDrop Team",
    subject: "New updates to your dashboard",
    preview: "We’ve improved the layout and fixed a few bugs!",
    date: "Apr 24, 2025",
    link: "#"
  },
];

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('My Jobs');
  const [postedJobs, setPostedJobs] = useState<JobCard[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('postedJobs') || '[]');
    const formatted = stored.map((job: any) => ({
      title: job.title,
      description: job.description || job.notes,
      date: job.date || "Unknown date",
      link: '#'
    }));
    setPostedJobs(formatted);
  }, []);

  const renderCard = (item: JobCard | Message) => {
    const title = 'title' in item ? item.title : item.subject;
    const description = 'description' in item ? item.description : item.preview;
    const date = item.date;
    const link = item.link || "#";

    return (
      <Card
        key={title + date}
        title={title}
        description={description}
        date={date}
        link={link}
      />
    );
  };

  return (
    <main className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar categories={tabs} onCategorySelect={setSelectedTab} />

      <section className="flex-1 p-8 ml-0 md:ml-64 transition-all duration-300">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">{selectedTab}</h1>

        {selectedTab === 'My Jobs' && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Mock Posted Jobs</h2>
            <div className="flex flex-wrap gap-6 mb-10">
              {mockPostedJobs.map(renderCard)}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Posted Jobs</h2>
            <div className="flex flex-wrap gap-6">
              {postedJobs.length > 0 ? postedJobs.map(renderCard) : <p className="text-gray-500">No jobs posted yet.</p>}
            </div>
          </>
        )}

        {selectedTab === 'Applications' && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Applications</h2>
            <div className="flex flex-wrap gap-6">
              {appliedJobs.map(renderCard)}
            </div>
          </>
        )}

        {selectedTab === 'Messages' && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Messages</h2>
            <div className="flex flex-wrap gap-6">
              {messages.map(renderCard)}
            </div>
          </>
        )}

        {selectedTab === 'Settings' && (
          <div className="text-gray-600">Settings page coming soon.</div>
          )}

      </section>
    </main>
  );
}
