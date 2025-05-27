"use client";

import { useEffect, useState } from 'react';
import Sidebar from '@/components/home/Sidebar';
import SettingsPage from '@/components/home/SettingsPage';

const tabs = ['My Jobs', 'Applications', 'Messages', 'Settings'];

type JobCard = {
  _id: string;
  PostingID?: string;
  Pay?: number;
  JobTitle: string;
  Description: string;
  Time?: string;
  Location: string;
  WorkFromLocation?: string;
  Category?: string;
  notes?: string;
};

type Message = {
  from: string;
  subject: string;
  date: string;
  message: string;
  profileLink: string;
};

// Type guard to distinguish JobCard from Message
function isJobCard(item: JobCard | Message | null): item is JobCard {
  return !!item && 'JobTitle' in item;
}

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('My Jobs');
  const [selectedItem, setSelectedItem] = useState<JobCard | Message | null>(null);
  const [postedJobs, setPostedJobs] = useState<JobCard[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch('http://localhost:5000/jobpostings');
        if (!response.ok) throw new Error('Failed to fetch jobs');
        const data: JobCard[] = await response.json();
        setPostedJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
    fetchJobs();
  }, []);

  const jobsToShow = selectedTab === 'My Jobs' ? postedJobs : [];

  return (
    <main className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar categories={tabs} onCategorySelect={setSelectedTab} />

      <section className="flex-1 p-8 ml-0 md:ml-64 transition-all duration-300">
        {['My Jobs'].includes(selectedTab) && (
          <>
            <h1 className="text-4xl font-bold text-blue-900 mt-6 mb-2">{selectedTab}</h1>
            <p className="text-gray-600 text-md mb-8">
              This section gives you a quick overview of jobs you've posted.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobsToShow.map((job) => (
                <div
                  key={job._id}
                  onClick={() => setSelectedItem(job)}
                  className="cursor-pointer w-full p-4 font-sans rounded-xl bg-[#f1f1f3] shadow-md hover:shadow-lg transition relative"
                >
                  <h3 className="text-[1.3rem] font-bold text-[#3c3852] hover:text-[#7257fa] hover:underline">
                    {job.JobTitle}
                  </h3>

                  <p className="text-[0.86rem] text-[#3c3852] mt-3"><strong>Location:</strong> {job.Location}</p>
                  <p className="text-[0.86rem] text-[#3c3852]"><strong>Category:</strong> {job.Category}</p>
                  {job.Pay && <p className="text-[0.8rem] text-[#6e6b80] mt-2">Pay: {job.Pay} KM</p>}

                  <div className="absolute bottom-0 right-0 bg-[#7257fa] p-2 rounded-tl-xl rounded-br-xl hover:bg-black transition flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path
                        fill="#fff"
                        d="M13.47 17.97c-.29.29-.29.76 0 1.06.29.29.76.29 1.06 0l5.8-5.79c.69-.69.69-1.81 0-2.5l-5.8-5.8a.75.75 0 0 0-1.06 1.06L18.69 11.25H4c-.41 0-.75.34-.75.75s.34.75.75.75h14.69l-5.22 5.22z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {selectedItem && (
              <div
                className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setSelectedItem(null)}
              >
                <div
                  className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                    onClick={() => setSelectedItem(null)}
                  >
                    ✕
                  </button>

                  {isJobCard(selectedItem) ? (
                    <>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">{selectedItem.JobTitle}</h2>
                      <p className="text-sm text-gray-600 mb-1"><strong>Description:</strong> {selectedItem.Description}</p>
                      {selectedItem.Pay && (
                        <p className="text-sm text-gray-600 mb-1"><strong>Pay:</strong> {selectedItem.Pay} KM</p>
                      )}
                      <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {selectedItem.Location}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Category:</strong> {selectedItem.Category}</p>
                      {selectedItem.Time && (
                        <p className="text-sm text-gray-600 mb-1"><strong>Time:</strong> {selectedItem.Time}</p>
                      )}
                      {selectedItem.WorkFromLocation && (
                        <p className="text-sm text-gray-600 mb-1"><strong>Work From:</strong> {selectedItem.WorkFromLocation}</p>
                      )}
                      {selectedItem.notes && (
                        <p className="text-sm text-gray-600"><strong>Notes:</strong> {selectedItem.notes}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">{selectedItem.subject}</h2>
                      <p className="text-sm text-gray-600 mb-1"><strong>From:</strong> {selectedItem.from}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {selectedItem.date}</p>
                      <p className="text-sm text-gray-600 mt-4">{selectedItem.message}</p>

                      <a
                        href={selectedItem.profileLink}
                        target="_blank"
                        className="mt-6 inline-block bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-300 transition"
                      >
                        View Profile
                      </a>

                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => alert('Reply clicked')}
                          className="bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded hover:bg-blue-200 flex items-center gap-1"
                        >
                          Reply →
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {selectedTab === 'Settings' && (
          <div className="mt-8">
            <SettingsPage />
          </div>
        )}
      </section>
    </main>
  );
}
