'use client';

import { useEffect, useState } from 'react';

const quickJobSuggestions = [
  "Help me move furniture", "Walk my dog", "Clean my apartment", "Babysit for evening",
  "Deliver groceries", "Tutor my kid in math", "Help with gardening", "Paint a room",
  "Computer help", "Event photography", "Food delivery", "House sitting"
];

const locationOptions = [
  "Sarajevo", "Banja Luka", "Mostar", "Tuzla", "Zenica", "Brčko",
  "Bihać", "Travnik", "Goražde", "Online/Remote"
];

const categoryOptions = [
  "Cleaning & Household", "Delivery & Transport", "Tutoring & Education", 
  "Pet Care", "Moving & Labor", "Tech Help", "Creative & Design",
  "Event Help", "Childcare", "Yard Work", "Other"
];

export default function PostJobPage() {
  const [mounted, setMounted] = useState(false);
  
  // Required fields
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [whoCanApply, setWhoCanApply] = useState('');
  
  // Optional fields
  const [category, setCategory] = useState('');
  const [pay, setPay] = useState('');
  const [notes, setNotes] = useState('');
  
  const [filteredTitles, setFilteredTitles] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => setMounted(true), []);

  const validateFields = () => {
    const fieldErrors: { [key: string]: boolean } = {};
    if (!jobTitle.trim()) fieldErrors.jobTitle = true;
    if (!description.trim()) fieldErrors.description = true;
    if (!location.trim()) fieldErrors.location = true;
    if (!duration) fieldErrors.duration = true;
    if (!whoCanApply) fieldErrors.whoCanApply = true;
    
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to post a job');
      window.location.href = '/login';
      return;
    }

    const jobData = {
      JobTitle: jobTitle.trim(),
      Description: description.trim(),
      Location: location.trim(),
      Category: category || 'Other',
      Pay: pay ? Number(pay) : null,
      Time: duration,
      WorkFromLocation: location.toLowerCase().includes('remote') || location.toLowerCase().includes('online') ? 'Yes' : 'No',
      notes: notes.trim() || undefined
    };

    try {
      const res = await fetch('http://localhost:5001/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(jobData),
      });

      if (res.ok) {
        alert('🎉 Job posted successfully!');
        // Reset form
        setJobTitle(''); setDescription(''); setLocation(''); setDuration('');
        setWhoCanApply(''); setCategory(''); setPay(''); setNotes('');
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        const errorData = await res.json();
        alert(`❌ Failed to post job: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert('❌ Network error. Please try again.');
      console.error('POST error:', error);
    }
  };

  if (!mounted) return null;

  const inputClass = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Post a Quick Job</h1>
        <p className="text-gray-600">
          Need help with something? Post it here and find someone nearby to help!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        
        {/* Job Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What do you need help with? *
          </label>
          <div className="relative">
            <input
              type="text"
              className={inputClass('jobTitle')}
              value={jobTitle}
              onChange={(e) => {
                const val = e.target.value;
                setJobTitle(val);
                setFilteredTitles(val.length > 0 ? quickJobSuggestions.filter((t) => 
                  t.toLowerCase().includes(val.toLowerCase())) : []);
              }}
              placeholder="e.g., Help me move furniture, Walk my dog, Clean my apartment..."
            />
            {filteredTitles.length > 0 && (
              <ul className="absolute z-10 bg-white w-full border rounded-lg mt-1 max-h-40 overflow-auto shadow-lg">
                {filteredTitles.map((title) => (
                  <li
                    key={title}
                    onClick={() => {
                      setJobTitle(title);
                      setFilteredTitles([]);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
                  >
                    {title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.jobTitle && <p className="text-red-500 text-sm mt-1">Please describe what you need help with</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            More details *
          </label>
          <textarea
            className={inputClass('description')}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Give more details about the job... What exactly needs to be done? Any special requirements?"
            rows={4}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">Please provide more details</p>}
        </div>

        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Where? *
          </label>
          <input
            type="text"
            className={inputClass('location')}
            value={location}
            onChange={(e) => {
              const val = e.target.value;
              setLocation(val);
              setFilteredLocations(val.length > 0 ? locationOptions.filter((loc) => 
                loc.toLowerCase().includes(val.toLowerCase())) : []);
            }}
            placeholder="City or 'Online/Remote'"
          />
          {filteredLocations.length > 0 && (
            <ul className="absolute z-10 bg-white w-full border rounded-lg mt-1 max-h-40 overflow-auto shadow-lg">
              {filteredLocations.map((loc) => (
                <li
                  key={loc}
                  onClick={() => {
                    setLocation(loc);
                    setFilteredLocations([]);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-50 text-sm"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
          {errors.location && <p className="text-red-500 text-sm mt-1">Please specify the location</p>}
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How long will it take? *
          </label>
          <select
            className={inputClass('duration')}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Select duration</option>
            <option value="1-2 hours">1-2 hours</option>
            <option value="Half day (3-4 hours)">Half day (3-4 hours)</option>
            <option value="Full day">Full day</option>
            <option value="2-3 days">2-3 days</option>
            <option value="1 week">1 week</option>
            <option value="Ongoing/Regular">Ongoing/Regular</option>
            <option value="One time">One time</option>
          </select>
          {errors.duration && <p className="text-red-500 text-sm mt-1">Please select duration</p>}
        </div>

        {/* Who Can Apply */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Who can apply? *
          </label>
          <select
            className={inputClass('whoCanApply')}
            value={whoCanApply}
            onChange={(e) => setWhoCanApply(e.target.value)}
          >
            <option value="">Choose who can apply</option>
            <option value="Anyone">Anyone</option>
            <option value="Students only">Students only</option>
            <option value="Adults (18+)">Adults (18+)</option>
            <option value="Experienced only">Experienced only</option>
            <option value="Teens (16+)">Teens (16+)</option>
          </select>
          {errors.whoCanApply && <p className="text-red-500 text-sm mt-1">Please specify who can apply</p>}
        </div>

        {/* Optional Fields */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Optional Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Pay */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pay (KM)</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                value={pay}
                onChange={(e) => setPay(e.target.value)}
                placeholder="e.g., 50"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any other info that might be helpful..."
              rows={3}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
        >
          Post Job 🚀
        </button>
      </form>
    </main>
  );
}