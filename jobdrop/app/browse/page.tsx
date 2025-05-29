'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import UserReviews from '../components/UserReviews';
import ReviewModal from '../components/ReviewModal';
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

export default function BrowseJobsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('default');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  
  // Reviews state
  const [showPosterReviews, setShowPosterReviews] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewTarget, setReviewTarget] = useState<{id: string, name: string} | null>(null);

  // Fetch jobs from backend
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
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
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to load jobs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Apply to a job
  const handleApply = async (jobId: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login to apply for jobs');
      window.location.href = '/login';
      return;
    }

    setIsApplying(true);
    try {
      const response = await fetch(`http://localhost:5001/api/jobs/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        alert('🎉 Application submitted successfully!');
        // Refresh jobs to update applicant count
        fetchJobs();
        setSelectedJob(null);
      } else {
        alert(`❌ ${data.message || 'Failed to apply'}`);
      }
    } catch (error) {
      console.error('Error applying to job:', error);
      alert('❌ Network error. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  // Handle contacting job poster
  const handleContactPoster = (job: Job) => {
    if (job.poster?.email) {
      const subject = encodeURIComponent(`JobDrop: Question about "${job.JobTitle}"`);
      const body = encodeURIComponent(`Hi ${job.poster.name},\n\nI'm interested in your job "${job.JobTitle}" on JobDrop and wanted to ask a question.\n\nBest regards`);
      window.open(`mailto:${job.poster.email}?subject=${subject}&body=${body}`);
    }
  };

  // Handle leaving a review for job poster
  const handleReviewPoster = (job: Job) => {
    if (job.poster) {
      setReviewTarget({ id: job.poster._id, name: job.poster.name });
      setShowReviewModal(true);
    }
  };

  // Get unique categories and locations from jobs
  const categories = [...new Set(jobs.map((job) => job.Category).filter(Boolean))].sort();
  const locations = [...new Set(jobs.map((job) => job.Location).filter(Boolean))].sort();

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch = job.JobTitle.toLowerCase().includes(search.toLowerCase()) ||
                           job.Description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || job.Category === category;
      const matchesLocation = !location || job.Location === location;
      
      return matchesSearch && matchesCategory && matchesLocation;
    })
    .sort((a, b) => {
      if (sort === 'asc') return (a.Pay || 0) - (b.Pay || 0);
      if (sort === 'desc') return (b.Pay || 0) - (a.Pay || 0);
      if (sort === 'newest') return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      return 0;
    });

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently posted';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatPay = (pay?: number) => {
    if (!pay) return 'Pay not specified';
    return `${pay} KM`;
  };

  if (loading) {
    return (
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Browse Jobs</h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          <span className="ml-3 text-gray-600">Loading jobs...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Browse Jobs</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
          <button 
            onClick={fetchJobs}
            className="ml-2 underline hover:no-underline"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Browse Jobs</h1>
          <p className="text-gray-600">Find quick gigs and part-time work near you</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} available
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="default">Sort by</option>
          <option value="newest">Newest First</option>
          <option value="asc">Lowest Pay</option>
          <option value="desc">Highest Pay</option>
        </select>
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && !loading && (
        <div className="text-center py-12">
          <div className="mb-4">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-4">
            {search || category || location 
              ? 'Try adjusting your filters to see more results.' 
              : 'No jobs have been posted yet. Check back later!'}
          </p>
          {(search || category || location) && (
            <button
              onClick={() => {
                setSearch('');
                setCategory('');
                setLocation('');
              }}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="w-full p-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden shadow-md text-white hover:shadow-lg transition-shadow"
          >
            <div className="z-10 relative">
              <h2 className="text-xl font-bold mb-2">{job.JobTitle}</h2>
              <p className="text-sm mb-1 opacity-90">
                <strong>📍</strong> {job.Location}
              </p>
              <p className="text-sm mb-1 opacity-90">
                <strong>💰</strong> {formatPay(job.Pay)}
              </p>
              {job.Time && (
                <p className="text-sm mb-1 opacity-90">
                  <strong>⏰</strong> {job.Time}
                </p>
              )}
              {job.Category && (
                <p className="text-sm mb-1 opacity-90">
                  <strong>🏷️</strong> {job.Category}
                </p>
              )}
              <p className="text-xs mb-3 opacity-75">
                Posted {formatDate(job.createdAt)}
              </p>
              
              <button
                onClick={() => setSelectedJob(job)}
                className="w-full mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold backdrop-blur-sm transition"
              >
                View Details & Apply
              </button>
            </div>
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-r from-white/10 to-white/5 rounded-full z-0" />
          </div>
        ))}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedJob.JobTitle}</h2>
                  {selectedJob.poster && (
                    <div className="flex items-center gap-3">
                      <p className="text-blue-100">
                        <strong>Posted by:</strong> {selectedJob.poster.name}
                      </p>
                      <button
                        onClick={() => setShowPosterReviews(true)}
                        className="text-blue-200 hover:text-white text-sm underline"
                      >
                        View Reviews
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-white hover:text-red-300 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <p><strong>Description:</strong> {selectedJob.Description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <p><strong>📍 Location:</strong> {selectedJob.Location}</p>
                  <p><strong>💰 Pay:</strong> {formatPay(selectedJob.Pay)}</p>
                </div>
                
                {selectedJob.Time && (
                  <p><strong>⏰ Duration:</strong> {selectedJob.Time}</p>
                )}
                
                {selectedJob.Category && (
                  <p><strong>🏷️ Category:</strong> {selectedJob.Category}</p>
                )}
                
                {selectedJob.WorkFromLocation && (
                  <p><strong>🏠 Remote Work:</strong> {selectedJob.WorkFromLocation}</p>
                )}
                
                {selectedJob.notes && (
                  <p><strong>📝 Additional Notes:</strong> {selectedJob.notes}</p>
                )}
                
                {selectedJob.applicants && (
                  <p><strong>👥 Applicants:</strong> {selectedJob.applicants.length} people applied</p>
                )}
                
                <p className="text-xs text-gray-500">
                  Posted on {formatDate(selectedJob.createdAt)}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
                >
                  Close
                </button>
                {selectedJob.poster && (
                  <>
                    <button
                      onClick={() => handleContactPoster(selectedJob)}
                      className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition font-medium"
                    >
                      📧 Contact Poster
                    </button>
                    <button
                      onClick={() => handleReviewPoster(selectedJob)}
                      className="flex-1 bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition font-medium"
                    >
                      ⭐ Review Poster
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleApply(selectedJob._id)}
                  disabled={isApplying}
                  className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isApplying ? 'Applying...' : 'Apply Now 🚀'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && selectedJob && reviewTarget && (
        <ReviewModal
          isOpen={showReviewModal}
          onClose={() => {
            setShowReviewModal(false);
            setReviewTarget(null);
          }}
          jobId={selectedJob._id}
          jobTitle={selectedJob.JobTitle}
          rateeId={reviewTarget.id}
          rateeName={reviewTarget.name}
          onReviewSubmitted={() => {
            console.log('Review submitted successfully!');
            setSelectedJob(null);
          }}
        />
      )}

      {/* Poster Reviews Modal */}
      {showPosterReviews && selectedJob?.poster && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPosterReviews(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Reviews for {selectedJob.poster.name}
                </h3>
                <button
                  onClick={() => setShowPosterReviews(false)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>
              <UserReviews 
                userId={selectedJob.poster._id} 
                userName={selectedJob.poster.name} 
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}