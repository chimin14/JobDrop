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
  const [qualifications, setQualifications] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => setMounted(true), []);

  const validateFields = () => {
    const fieldErrors: { [key: string]: boolean } = {};
    if (!title) fieldErrors.title = true;
    if (!description) fieldErrors.description = true;
    if (!location) fieldErrors.location = true;
    if (!industry) fieldErrors.industry = true;
    if (!jobFunction) fieldErrors.jobFunction = true;
    if (!department) fieldErrors.department = true;
    if (!experience) fieldErrors.experience = true;
    if (!positions) fieldErrors.positions = true;
    if (!salaryMin) fieldErrors.salaryMin = true;
    if (!salaryMax) fieldErrors.salaryMax = true;
    if (!qualifications) fieldErrors.qualifications = true;
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    const newJob = {
      title,
      description,
      location,
      date: new Date().toLocaleDateString(),
      notes: qualifications,
    };

    const existing = JSON.parse(localStorage.getItem("postedJobs") || "[]");
    localStorage.setItem("postedJobs", JSON.stringify([newJob, ...existing]));

    alert("Job submitted successfully (stored locally).");
  };

  if (!mounted) return null;

  const inputClass = (field: string) =>
    `mt-1 w-full border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2`;

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
            className={inputClass('title')}
            value={title}
            onChange={(e) => {
              const val = e.target.value;
              setTitle(val);
              setFilteredTitles(val.length > 0 ? jobTitleSuggestions.filter((t) => t.toLowerCase().includes(val.toLowerCase())) : []);
            }}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className={inputClass('description')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a detailed job description..."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Location Autocomplete */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className={inputClass('location')}
            value={location}
            onChange={(e) => {
              const val = e.target.value;
              setLocation(val);
              setFilteredLocations(val.length > 0 ? locationOptions.filter((loc) => loc.toLowerCase().includes(val.toLowerCase())) : []);
            }}
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
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

        {/* Industry Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select
            className={inputClass('industry')}
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">Select an Industry</option>
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
          {errors.industry && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Qualifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Qualifications</label>
          <textarea
            className={inputClass('qualifications')}
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            placeholder="List key qualifications or requirements..."
          />
          {errors.qualifications && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Job Function */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Function</label>
          <input
            type="text"
            className={inputClass('jobFunction')}
            value={jobFunction}
            onChange={(e) => setJobFunction(e.target.value)}
          />
          {errors.jobFunction && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            className={inputClass('department')}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          {errors.department && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
        </div>

        {/* Employment Details */}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
              <input
                type="text"
                className={inputClass('experience')}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 1-3"
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Positions</label>
              <input
                type="number"
                className={inputClass('positions')}
                value={positions}
                onChange={(e) => setPositions(e.target.value)}
              />
              {errors.positions && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Salary</label>
              <input
                type="number"
                className={inputClass('salaryMin')}
                value={salaryMin}
                onChange={(e) => setSalaryMin(e.target.value)}
              />
              {errors.salaryMin && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Salary</label>
              <input
                type="number"
                className={inputClass('salaryMax')}
                value={salaryMax}
                onChange={(e) => setSalaryMax(e.target.value)}
              />
              {errors.salaryMax && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Job
        </button>
      </form>
    </main>
  );
}
