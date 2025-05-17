'use client';

import { useEffect, useState } from 'react';

const jobTitleSuggestions = [
  "Delivery Driver", "Cleaning Assistant", "Babysitter", "Dog Walker", "Private Tutor",
  "Gardener", "Grocery Shopper", "Mover", "Event Helper"
];

const locationOptions = [
  "Remote", "Sarajevo", "Banja Luka", "Mostar", "Tuzla", "Zenica", "Brčko",
  "Bihać", "Travnik", "Goražde", "New York, NY", "Chicago, IL", "Las Vegas, NV"
];

export default function PostJobPage() {
  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState('');
  const [filteredTitles, setFilteredTitles] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [employerType, setEmployerType] = useState('My Organization');
  const [industry, setIndustry] = useState('');
  const [jobFunction, setJobFunction] = useState('');
  const [department, setDepartment] = useState('');
  const [employmentType, setEmploymentType] = useState('Full Time');
  const [experience, setExperience] = useState('');
  const [positions, setPositions] = useState('');
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [publishType, setPublishType] = useState('Public');

  useEffect(() => setMounted(true), []);

  const isFormValid = title && description && location && employerType &&
    industry && jobFunction && department && employmentType &&
    experience && positions && salaryMin && salaryMax && publishType;

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setFilteredTitles(
      value.length > 0
        ? jobTitleSuggestions.filter((t) =>
            t.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    setFilteredLocations(
      value.length > 0
        ? locationOptions.filter((loc) =>
            loc.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title, description, location, employerType, industry,
      jobFunction, department, employmentType, experience,
      positions, salaryMin, salaryMax, publishType
    });
    alert("Job submitted successfully (locally).");
  };

  if (!mounted) return null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Post a New Job</h1>
      <p className="text-gray-600 mb-6">
        Please fill out all fields below to publish a job listing on JobDrop. All entries are required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
          {filteredTitles.length > 0 && (
            <ul className="border mt-1 bg-white shadow-sm rounded text-sm">
              {filteredTitles.map((t) => (
                <li
                  key={t}
                  onClick={() => {
                    setTitle(t);
                    setFilteredTitles([]);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2 min-h-[120px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter a detailed job description..."
          />
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Start typing location..."
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            required
          />
          {filteredLocations.length > 0 && (
            <ul className="absolute z-10 bg-white w-full border rounded mt-1 max-h-52 overflow-auto shadow-md">
              {filteredLocations.map((loc) => (
                <li
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setFilteredLocations([]);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Employer */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Employer</label>
          <select
            value={employerType}
            onChange={(e) => setEmployerType(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
          >
            <option>My Organization</option>
            <option>Another Organization</option>
          </select>
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Choose an Industry</label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white"
            required
          >
            <option value="">All Industries</option>
            <option>Administrative & Business Operations</option>
            <option>Architecture & Engineering</option>
            <option>Cleaning & Grounds Maintenance</option>
            <option>Community & Human Services</option>
            <option>Construction & Labor</option>
            <option>Creative & Design</option>
            <option>Customer Support</option>
            <option>Education & Training</option>
            <option>Healthcare & Wellness</option>
            <option>Hospitality & Food Service</option>
            <option>IT & Software Development</option>
            <option>Legal</option>
            <option>Marketing & Advertising</option>
            <option>Retail & Sales</option>
            <option>Transportation & Delivery</option>
            <option>Other</option>
          </select>
        </div>

        {/* Job Function */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Function</label>
          <input
            type="text"
            value={jobFunction}
            onChange={(e) => setJobFunction(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        {/* Employment Details Section */}
        <div className="border border-gray-200 rounded p-4">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Employment Details</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
              <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Temporary</option>
                <option>Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Positions</label>
              <input
                type="number"
                value={positions}
                onChange={(e) => setPositions(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="e.g. 1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="e.g. 1-3"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Salary From</label>
              <input
                type="number"
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="e.g. 100000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Salary Upto</label>
              <input
                type="number"
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="e.g. 200000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Publishing Type</label>
              <select
                value={publishType}
                onChange={(e) => setPublishType(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option>Public</option>
                <option>Internal</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`px-6 py-2 rounded transition ${
            isFormValid
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
        >
          Submit Job
        </button>
      </form>
    </main>
  );
}
