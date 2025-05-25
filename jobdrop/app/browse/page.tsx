'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type Job = {
  title: string;
  description: string;
  date: string;
  location: string;
  industry: string;
  qualifications: string;
  jobFunction: string;
  department: string;
  employmentType: string;
  experienceLevel: string;
  positions: string;
  salaryRange: string;
  notes: string;
  category: string;
};

const jobData: Job[] = [
  {
    title: 'Frontend Developer',
    description: 'Create and maintain UI components for web apps.',
    date: 'May 26, 2025',
    location: 'Sarajevo',
    industry: 'IT & Software Development',
    qualifications: '2+ years experience, Bachelor’s degree in CS.',
    jobFunction: 'Development',
    department: 'Engineering',
    employmentType: 'Weekly',
    experienceLevel: '2',
    positions: '1',
    salaryRange: '800 KM - 1200 KM',
    notes: 'React, Tailwind, Git experience required.',
    category: 'Tech Help',
  },
  {
    title: 'Marketing Intern',
    description: 'Assist with social media and email campaigns.',
    date: 'May 25, 2025',
    location: 'Remote',
    industry: 'Marketing & Advertising',
    qualifications: 'Good writing skills, basic analytics knowledge.',
    jobFunction: 'Outreach',
    department: 'Marketing',
    employmentType: 'Internship',
    experienceLevel: '0-1',
    positions: '2',
    salaryRange: '200 KM - 400 KM',
    notes: 'Remote work possible.',
    category: 'Tutoring',
  },
  {
    title: 'Babysitter for Toddler',
    description: 'Watch a toddler during weekday evenings.',
    date: 'May 20, 2025',
    location: 'Grbavica',
    industry: 'Childcare',
    qualifications: 'Experience with children required.',
    jobFunction: 'Caregiving',
    department: 'Family Services',
    employmentType: 'Weekly',
    experienceLevel: '1',
    positions: '1',
    salaryRange: '150 KM - 250 KM',
    notes: 'Prepare meals and playtime included.',
    category: 'Babysitting',
  },
  {
    title: 'Apartment Cleaner',
    description: 'Clean 2-bedroom apartment, tools provided.',
    date: 'May 24, 2025',
    location: 'Ilidža',
    industry: 'Cleaning & Grounds Maintenance',
    qualifications: 'Basic cleaning skills and reliability.',
    jobFunction: 'Cleaning',
    department: 'Housekeeping',
    employmentType: 'Weekly',
    experienceLevel: '0-1',
    positions: '1',
    salaryRange: '100 KM - 200 KM',
    notes: '1-2 hours of work.',
    category: 'Cleaning',
  },
  {
    title: 'Math Tutor - High School',
    description: 'Provide support for algebra and geometry.',
    date: 'May 23, 2025',
    location: 'Novo Sarajevo',
    industry: 'Education & Training',
    qualifications: 'Math degree or tutoring experience.',
    jobFunction: 'Tutoring',
    department: 'Academics',
    employmentType: 'Weekly',
    experienceLevel: '1-3',
    positions: '1',
    salaryRange: '25 KM - 40 KM',
    notes: 'Twice a week sessions.',
    category: 'Tutoring',
  },
  {
    title: 'Dog Walker - 1 Week',
    description: 'Walk a small dog daily for 30 minutes.',
    date: 'May 22, 2025',
    location: 'Otoka',
    industry: 'Animal Care',
    qualifications: 'Comfortable with animals, punctual.',
    jobFunction: 'Pet Care',
    department: 'Pet Services',
    employmentType: 'Temporary',
    experienceLevel: '0',
    positions: '1',
    salaryRange: '15 KM - 25 KM',
    notes: 'Leash and treats provided.',
    category: 'Pet Care',
  },
  {
    title: 'Fix Bathroom Sink',
    description: 'Resolve a leak in the bathroom faucet.',
    date: 'May 22, 2025',
    location: 'Stari Grad',
    industry: 'Plumbing',
    qualifications: 'Previous plumbing experience required.',
    jobFunction: 'Repair',
    department: 'Maintenance',
    employmentType: 'One-time',
    experienceLevel: '2+',
    positions: '1',
    salaryRange: '45 KM - 55 KM',
    notes: 'Bring your own tools.',
    category: 'Tech Help',
  },
  {
    title: 'Grocery Delivery',
    description: 'Deliver a short grocery list to an elderly person.',
    date: 'May 21, 2025',
    location: 'Grbavica',
    industry: 'Delivery',
    qualifications: 'Must have a car.',
    jobFunction: 'Delivery',
    department: 'Local Service',
    employmentType: 'One-time',
    experienceLevel: '0',
    positions: '1',
    salaryRange: '20 KM - 30 KM',
    notes: 'Afternoon delivery preferred.',
    category: 'Delivery',
  },
  {
    title: 'IT Support Setup',
    description: 'Help with setting up Wi-Fi and printer.',
    date: 'May 20, 2025',
    location: 'Dobrinja',
    industry: 'IT & Software Development',
    qualifications: 'Basic networking knowledge.',
    jobFunction: 'Support',
    department: 'Tech Services',
    employmentType: 'One-time',
    experienceLevel: '1',
    positions: '1',
    salaryRange: '30 KM - 50 KM',
    notes: 'Router and devices are ready.',
    category: 'Tech Help',
  },
  {
    title: 'Move Sofa',
    description: 'Help lift and move sofa to new apartment.',
    date: 'May 19, 2025',
    location: 'Centar',
    industry: 'Transportation & Delivery',
    qualifications: 'Physically able to lift 50kg.',
    jobFunction: 'Labor',
    department: 'Logistics',
    employmentType: 'One-time',
    experienceLevel: '0',
    positions: '2',
    salaryRange: '40 KM - 60 KM',
    notes: 'Truck provided.',
    category: 'Delivery',
  },
  {
    title: 'Childcare for 2 Kids',
    description: 'Evening babysitting for two children (ages 3 & 6).',
    date: 'May 18, 2025',
    location: 'Vogošća',
    industry: 'Childcare',
    qualifications: 'Experience with kids, CPR preferred.',
    jobFunction: 'Babysitting',
    department: 'Family Services',
    employmentType: 'Weekly',
    experienceLevel: '1-2',
    positions: '1',
    salaryRange: '60 KM - 100 KM',
    notes: 'Dinner will be ready.',
    category: 'Babysitting',
  },
  {
    title: 'Garden Cleanup',
    description: 'Trim hedges, pull weeds, tidy up yard.',
    date: 'May 17, 2025',
    location: 'Ilidža',
    industry: 'Gardening',
    qualifications: 'Own tools preferred.',
    jobFunction: 'Maintenance',
    department: 'Landscaping',
    employmentType: 'Weekly',
    experienceLevel: '0-2',
    positions: '1',
    salaryRange: '50 KM - 80 KM',
    notes: 'Flexible hours.',
    category: 'Cleaning',
  },
  {
    title: 'Package Pickup & Drop-off',
    description: 'Pickup at warehouse, deliver to apartment.',
    date: 'May 16, 2025',
    location: 'Novi Grad',
    industry: 'Delivery',
    qualifications: 'Driver\'s license required.',
    jobFunction: 'Delivery',
    department: 'Transport',
    employmentType: 'Temporary',
    experienceLevel: '1',
    positions: '1',
    salaryRange: '35 KM - 45 KM',
    notes: 'Navigation provided.',
    category: 'Delivery',
  },
  {
    title: 'Laptop Setup',
    description: 'Help configure a new laptop and software.',
    date: 'May 15, 2025',
    location: 'Remote',
    industry: 'Tech Help',
    qualifications: 'Familiarity with Windows and Office Suite.',
    jobFunction: 'Setup',
    department: 'Support',
    employmentType: 'One-time',
    experienceLevel: '0-1',
    positions: '1',
    salaryRange: '30 KM - 50 KM',
    notes: 'Via Zoom or in-person.',
    category: 'Tech Help',
  },
  {
    title: 'Wash Windows',
    description: 'Clean windows on ground floor apartment.',
    date: 'May 14, 2025',
    location: 'Stup',
    industry: 'Cleaning',
    qualifications: 'No fear of heights, reliable.',
    jobFunction: 'Cleaning',
    department: 'Facilities',
    employmentType: 'One-time',
    experienceLevel: '0',
    positions: '1',
    salaryRange: '40 KM - 60 KM',
    notes: 'Supplies available.',
    category: 'Cleaning',
  }
];
export default function BrowseJobsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const categories = [...new Set(jobData.map((job) => job.category))].sort();
  const locations = [...new Set(jobData.map((job) => job.location))].sort();

  const filteredJobs = jobData
    .filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (!category || job.category === category) &&
        (!location || job.location === location)
    )
    .sort((a, b) => {
      if (sort === 'asc') return parseInt(a.salaryRange) - parseInt(b.salaryRange);
      if (sort === 'desc') return parseInt(b.salaryRange) - parseInt(a.salaryRange);
      return 0;
    });

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Browse Jobs</h1>

      {/* Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 px-4 py-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="default">Sort by Salary</option>
          <option value="asc">Lowest to Highest</option>
          <option value="desc">Highest to Lowest</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="w-full p-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-300 relative overflow-hidden shadow-md text-white"
          >
            <div className="z-10 relative">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-sm mb-1"><strong>Location:</strong> {job.location}</p>
              <p className="text-sm mb-1"><strong>Salary:</strong> {job.salaryRange}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded font-semibold"
              >
                View Details
              </button>
            </div>
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full z-0 opacity-30" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">{selectedJob.title}</h2>
            <p className="text-sm text-gray-600"><strong>Description:</strong> {selectedJob.description}</p>
            <p className="text-sm text-gray-600"><strong>Location:</strong> {selectedJob.location}</p>
            <p className="text-sm text-gray-600"><strong>Industry:</strong> {selectedJob.industry}</p>
            <p className="text-sm text-gray-600"><strong>Qualifications:</strong> {selectedJob.qualifications}</p>
            <p className="text-sm text-gray-600"><strong>Job Function:</strong> {selectedJob.jobFunction}</p>
            <p className="text-sm text-gray-600"><strong>Department:</strong> {selectedJob.department}</p>
            <p className="text-sm text-gray-600"><strong>Employment Type:</strong> {selectedJob.employmentType}</p>
            <p className="text-sm text-gray-600"><strong>Experience:</strong> {selectedJob.experienceLevel} years</p>
            <p className="text-sm text-gray-600"><strong>Positions:</strong> {selectedJob.positions}</p>
            <p className="text-sm text-gray-600"><strong>Salary:</strong> {selectedJob.salaryRange}</p>
            <p className="text-sm text-gray-600"><strong>Notes:</strong> {selectedJob.notes}</p>
          </div>
        </div>
      )}
    </main>
  );
}