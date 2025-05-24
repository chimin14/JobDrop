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
  location: string;
  industry: string;
  qualifications: string;
  jobFunction: string;
  department: string;
  employmentType: string;
  experienceLevel: string;
  positions: string;
  salaryRange: string;
};

type Message = {
  from: string;
  subject: string;
  date: string;
  message: string;
  profileLink: string;
};

const postedJobs: JobCard[] = [
  {
    title: 'Frontend Developer',
    description: 'Create and maintain UI components for web apps.',
    date: 'May 26, 2025',
    notes: 'React, Tailwind, Git experience required.',
    location: 'Sarajevo',
    industry: 'IT & Software Development',
    qualifications: '2+ years experience, Bachelor’s degree in CS.',
    jobFunction: 'Development',
    department: 'Engineering',
    employmentType: 'Weekly',
    experienceLevel: '2',
    positions: '1',
    salaryRange: '$800 - $1200',
  },
  {
    title: 'Marketing Intern',
    description: 'Assist with social media and email campaigns.',
    date: 'May 25, 2025',
    notes: 'Remote work possible.',
    location: 'Remote',
    industry: 'Marketing & Advertising',
    qualifications: 'Good writing skills, basic analytics knowledge.',
    jobFunction: 'Outreach',
    department: 'Marketing',
    employmentType: 'Internship',
    experienceLevel: '0-1',
    positions: '2',
    salaryRange: '$200 - $400',
  },
];

const appliedJobs: JobCard[] = [
  {
    title: 'Customer Support Agent',
    description: 'Respond to customer inquiries via email and chat.',
    date: 'May 22, 2025',
    notes: 'Shifts include evenings and weekends.',
    location: 'Zenica',
    industry: 'Customer Support',
    qualifications: 'Fluent in English, strong typing skills.',
    jobFunction: 'Support',
    department: 'Service',
    employmentType: 'Weekly',
    experienceLevel: '1',
    positions: '3',
    salaryRange: '$350 - $500',
  },
  {
    title: 'Warehouse Assistant',
    description: 'Sort and pack items for delivery.',
    date: 'May 21, 2025',
    notes: 'Must be able to lift 20kg boxes.',
    location: 'Banja Luka',
    industry: 'Transportation & Delivery',
    qualifications: 'Physical fitness, punctuality.',
    jobFunction: 'Logistics',
    department: 'Distribution',
    employmentType: 'Weekly',
    experienceLevel: '0-1',
    positions: '2',
    salaryRange: '$300 - $450',
  },
];

const messages: Message[] = [
  {
    from: 'Selma K.',
    subject: 'Application for Frontend Developer',
    date: 'May 26, 2025',
    message: 'Hi! I just submitted an application for your Frontend Developer post. Looking forward to hearing from you!',
    profileLink: '#',
  },
  {
    from: 'Ahmed H.',
    subject: 'Interested in Warehouse Assistant',
    date: 'May 25, 2025',
    message: 'Hello! I\'d love to help with your warehouse tasks, I’m available every morning.',
    profileLink: '#',
  },
];

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('My Jobs');
  const [selectedItem, setSelectedItem] = useState<JobCard | Message | null>(null);

  const isMessages = selectedTab === 'Messages';
  const jobsToShow = selectedTab === 'My Jobs' ? postedJobs : appliedJobs;

  return (
    <main className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar
        categories={['My Jobs', 'Applications', 'Messages', 'Settings']}
        onCategorySelect={setSelectedTab}
      />

      <section className="flex-1 p-8 ml-0 md:ml-64 transition-all duration-300">
        {['My Jobs', 'Applications', 'Messages'].includes(selectedTab) && (
          <>
            <h1 className="text-4xl font-bold text-blue-900 mt-6 mb-2">{selectedTab}</h1>
            <p className="text-gray-600 text-md mb-8">
              {selectedTab === 'My Jobs'
                ? 'This section gives you a quick overview of jobs you\'ve posted.'
                : selectedTab === 'Applications'
                ? 'This section shows jobs you have applied to.'
                : 'This section shows messages sent to you by applicants.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isMessages ? messages : jobsToShow).map((item: any, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer w-full p-4 font-sans rounded-xl bg-[#f1f1f3] shadow-md hover:shadow-lg transition relative"
                >
                  <h3 className="text-[1.3rem] font-bold text-[#3c3852] hover:text-[#7257fa] hover:underline">
                    {isMessages ? item.subject : item.title}
                  </h3>

                  {isMessages ? (
                    <>
                      <p className="text-[0.86rem] text-[#3c3852] mt-3"><strong>From:</strong> {item.from}</p>
                      <p className="text-[0.8rem] text-[#6e6b80] mt-2">{item.date}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-[0.86rem] text-[#3c3852] mt-3"><strong>Location:</strong> {item.location}</p>
                      <p className="text-[0.86rem] text-[#3c3852]"><strong>Industry:</strong> {item.industry}</p>
                      <p className="text-[0.86rem] text-[#3c3852]"><strong>Department:</strong> {item.department}</p>
                      <p className="text-[0.8rem] text-[#6e6b80] mt-2">{item.date}</p>
                    </>
                  )}

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

            {/* Modal */}
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

                  {isMessages ? (
                    <>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">{(selectedItem as Message).subject}</h2>
                      <p className="text-sm text-gray-600 mb-1"><strong>From:</strong> {(selectedItem as Message).from}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {(selectedItem as Message).date}</p>
                      <p className="text-sm text-gray-600 mt-4">{(selectedItem as Message).message}</p>

                      <a
                        href={(selectedItem as Message).profileLink}
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
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">{(selectedItem as JobCard).title}</h2>
                      <p className="text-sm text-gray-600 mb-1"><strong>Description:</strong> {(selectedItem as JobCard).description}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Qualifications:</strong> {(selectedItem as JobCard).qualifications}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Job Function:</strong> {(selectedItem as JobCard).jobFunction}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Employment Type:</strong> {(selectedItem as JobCard).employmentType}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Experience:</strong> {(selectedItem as JobCard).experienceLevel} years</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Positions:</strong> {(selectedItem as JobCard).positions}</p>
                      <p className="text-sm text-gray-600 mb-1"><strong>Salary Range:</strong> {(selectedItem as JobCard).salaryRange}</p>
                      {(selectedItem as JobCard).notes && (
                        <p className="text-sm text-gray-600"><strong>Notes:</strong> {(selectedItem as JobCard).notes}</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
