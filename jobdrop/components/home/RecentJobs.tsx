'use client';

const jobs = [
  {
    title: 'Grocery Delivery for Elderly',
    location: 'Grbavica',
    salaryRange: '20 KM',
    description: 'Deliver groceries for elderly woman in need.',
    category: 'Delivery',
    industry: 'Delivery',
    qualifications: 'Must have a car and be punctual.',
    jobFunction: 'Delivery',
    department: 'Support',
    employmentType: 'One-time',
    experienceLevel: '0',
    positions: '1',
    notes: 'Needs help this afternoon. Few bags only.',
  },
  {
    title: 'Dog Walking – 3 Days',
    location: 'Hrasno',
    salaryRange: '15 KM/day',
    description: 'Walk a medium dog 30 min a day.',
    category: 'Pet Care',
    industry: 'Pet Services',
    qualifications: 'Loves animals, punctual.',
    jobFunction: 'Pet Walker',
    department: 'Animal Care',
    employmentType: 'Temporary',
    experienceLevel: '0-1',
    positions: '1',
    notes: 'Leash provided.',
  },
  {
    title: 'Math Tutoring – Grade 9',
    location: 'Online or Sarajevo',
    salaryRange: '25 KM/hr',
    description: 'Help with algebra and geometry.',
    category: 'Tutoring',
    industry: 'Education',
    qualifications: 'Math proficiency, tutoring experience preferred.',
    jobFunction: 'Tutor',
    department: 'Academics',
    employmentType: 'Weekly',
    experienceLevel: '1-2',
    positions: '1',
    notes: 'Looking for someone twice a week.',
  },
];

export default function RecentJobs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
        Recent Job Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-r from-purple-300 to-purple-100 rounded-xl p-6 overflow-hidden shadow-md"
          >
            <div className="absolute w-36 h-36 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full top-[-25%] right-[-25%] z-0"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-[#3c3852] mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-[#3c3852] mb-1">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-sm text-[#3c3852] mb-1">
                <strong>Salary:</strong> {job.salaryRange}
              </p>
              <p className="text-sm text-[#3c3852] mb-1">
                <strong>Category:</strong> {job.category}
              </p>
              <p className="text-[#6e6b80] text-sm italic mt-1">"{job.notes}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
