'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Job = {
  _id: string;
  JobTitle: string;
  Description: string;
  Location: string;
  Category?: string;
  Pay?: number;
  Time?: string;
  WorkFromLocation?: string;
  notes?: string;
  poster?: {
    _id: string;
    name: string;
    email: string;
  };
  applicants?: string[];
  status?: string;
  createdAt?: string;
};

export default function RecentJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchRecentJobs();
  }, []);

  const fetchRecentJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/api/jobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      // Get the 6 most recent jobs
      const recentJobs = data.slice(0, 6);
      setJobs(recentJobs);
    } catch (error) {
      console.error('Error fetching recent jobs:', error);
      setError('Failed to load recent jobs');
    } finally {
      setLoading(false);
    }
  };

  const formatPay = (pay?: number) => {
    if (!pay) return 'Pay not specified';
    return `${pay} KM`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently posted';
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just posted';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const handleJobClick = (jobId: string) => {
    router.push(`/browse`);
  };

  const handleViewAllJobs = () => {
    router.push('/browse');
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
          Recent Job Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 rounded-xl p-6 animate-pulse">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
          Recent Job Posts
        </h2>
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchRecentJobs}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (jobs.length === 0) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
          Recent Job Posts
        </h2>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No jobs posted yet. Be the first!</p>
          <button
            onClick={() => router.push('/post-job')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Post a Job
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-blue-800">
          Recent Job Posts
        </h2>
        <button
          onClick={handleViewAllJobs}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
        >
          View All Jobs →
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            onClick={() => handleJobClick(job._id)}
            className="cursor-pointer relative bg-gradient-to-r from-purple-300 to-purple-100 rounded-xl p-6 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute w-36 h-36 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full top-[-25%] right-[-25%] z-0"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#3c3852] mb-2 pr-2">
                  {job.JobTitle}
                </h3>
                <span className="text-xs bg-white/50 px-2 py-1 rounded-full text-[#3c3852]">
                  {formatDate(job.createdAt)}
                </span>
              </div>
              
              <p className="text-sm text-[#3c3852] mb-1">
                <strong>📍 Location:</strong> {job.Location}
              </p>
              
              <p className="text-sm text-[#3c3852] mb-1">
                <strong>💰 Pay:</strong> {formatPay(job.Pay)}
              </p>
              
              {job.Category && (
                <p className="text-sm text-[#3c3852] mb-1">
                  <strong>🏷️ Category:</strong> {job.Category}
                </p>
              )}
              
              {job.Time && (
                <p className="text-sm text-[#3c3852] mb-1">
                  <strong>⏰ Duration:</strong> {job.Time}
                </p>
              )}
              
              {job.notes && (
                <p className="text-[#6e6b80] text-sm italic mt-2 line-clamp-2">
                  "{job.notes.length > 60 ? job.notes.substring(0, 60) + '...' : job.notes}"
                </p>
              )}
              
              {!job.notes && job.Description && (
                <p className="text-[#6e6b80] text-sm italic mt-2 line-clamp-2">
                  "{job.Description.length > 60 ? job.Description.substring(0, 60) + '...' : job.Description}"
                </p>
              )}

              {job.applicants && job.applicants.length > 0 && (
                <p className="text-xs text-[#6e6b80] mt-2">
                  👥 {job.applicants.length} applicant{job.applicants.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {jobs.length >= 6 && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewAllJobs}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View All Jobs ({jobs.length}+)
          </button>
        </div>
      )}
    </section>
  );
}