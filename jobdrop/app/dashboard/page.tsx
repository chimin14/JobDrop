"use client";

import { useEffect, useState } from 'react';
import Sidebar from '@/app/components/home/Sidebar';
import SettingsPage from '@/app/components/home/SettingsPage';
import ApplicantsViewer from '@/app/components/ApplicantsViewer';
import ReviewModal from '@/app/components/ReviewModal';

const tabs = ['My Jobs', 'Applications', 'Settings'];

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
  poster?: {
    _id: string;
    name: string;
    email: string;
  };
  applicants?: string[];
  status?: string;
  createdAt?: string;
};

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState('My Jobs');
  const [selectedItem, setSelectedItem] = useState<JobCard | null>(null);
  const [postedJobs, setPostedJobs] = useState<JobCard[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<JobCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Applicants viewer state
  const [showApplicants, setShowApplicants] = useState(false);
  const [selectedJobForApplicants, setSelectedJobForApplicants] = useState<string>('');
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>('');

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewTarget, setReviewTarget] = useState<{id: string, name: string, jobId: string, jobTitle: string} | null>(null);

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }
    
    // Fetch initial data
    if (selectedTab === 'My Jobs') {
      fetchMyPostedJobs();
    } else if (selectedTab === 'Applications') {
      fetchMyApplications();
    }
  }, [selectedTab]);

  const fetchMyPostedJobs = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('http://localhost:5001/api/jobs/my-posted', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: JobCard[] = await response.json();
      setPostedJobs(data);
    } catch (error) {
      console.error('Error fetching posted jobs:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch posted jobs');
    } finally {
      setLoading(false);
    }
  };

  const fetchMyApplications = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('http://localhost:5001/api/jobs/my-applications', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: JobCard[] = await response.json();
      setAppliedJobs(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  // Handle viewing applicants for a job
  const handleViewApplicants = (job: JobCard) => {
    setSelectedJobForApplicants(job._id);
    setSelectedJobTitle(job.JobTitle);
    setShowApplicants(true);
    setSelectedItem(null); // Close the job detail modal
  };

  // Handle contacting job poster (for applications)
  const handleContactPoster = (job: JobCard) => {
    if (job.poster?.email) {
      const subject = encodeURIComponent(`JobDrop: Question about "${job.JobTitle}"`);
      const body = encodeURIComponent(`Hi ${job.poster.name},\n\nI applied for your job "${job.JobTitle}" on JobDrop and wanted to ask a question.\n\nBest regards`);
      window.open(`mailto:${job.poster.email}?subject=${subject}&body=${body}`);
    }
  };

  // Handle reviewing job poster (for applications)
  const handleReviewPoster = (job: JobCard) => {
    if (job.poster) {
      setReviewTarget({ 
        id: job.poster._id, 
        name: job.poster.name,
        jobId: job._id,
        jobTitle: job.JobTitle
      });
      setShowReviewModal(true);
      setSelectedItem(null); // Close the job detail modal
    }
  };

  // Handle editing a job
  const handleEditJob = (job: JobCard) => {
    // For now, we'll just redirect to post page with job data
    // You can implement a proper edit modal later
    alert(`Edit functionality coming soon for: ${job.JobTitle}`);
    // window.location.href = `/post-job?edit=${job._id}`;
  };

  const jobsToShow = selectedTab === 'My Jobs' ? postedJobs : appliedJobs;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTabDescription = () => {
    switch (selectedTab) {
      case 'My Jobs':
        return "Jobs you've posted and are managing.";
      case 'Applications':
        return "Jobs you've applied for and their current status.";
      default:
        return "";
    }
  };

  return (
    <main className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar categories={tabs} onCategorySelect={setSelectedTab} />

      <section className="flex-1 p-8 ml-0 md:ml-64 transition-all duration-300">
        {['My Jobs', 'Applications'].includes(selectedTab) && (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-900 mt-6 mb-2">{selectedTab}</h1>
                <p className="text-gray-600 text-md mb-4">
                  {getTabDescription()}
                </p>
              </div>
              
              {selectedTab === 'My Jobs' && (
                <button
                  onClick={() => window.location.href = '/post-job'}
                  className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                >
                  Post New Job
                </button>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
                <button 
                  onClick={() => selectedTab === 'My Jobs' ? fetchMyPostedJobs() : fetchMyApplications()}
                  className="ml-2 underline hover:no-underline"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
                <span className="ml-3 text-gray-600">Loading {selectedTab.toLowerCase()}...</span>
              </div>
            )}

            {/* Empty State */}
            {!loading && jobsToShow.length === 0 && !error && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {selectedTab === 'My Jobs' ? 'No jobs posted yet' : 'No applications yet'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedTab === 'My Jobs' 
                    ? 'Start by posting your first job listing.' 
                    : 'Browse available jobs and start applying.'}
                </p>
                {selectedTab === 'My Jobs' ? (
                  <button
                    onClick={() => window.location.href = '/post-job'}
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                  >
                    Post Your First Job
                  </button>
                ) : (
                  <button
                    onClick={() => window.location.href = '/browse'}
                    className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                  >
                    Browse Jobs
                  </button>
                )}
              </div>
            )}

            {/* Jobs Grid */}
            {!loading && jobsToShow.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsToShow.map((job) => (
                  <div
                    key={job._id}
                    onClick={() => setSelectedItem(job)}
                    className="cursor-pointer w-full p-4 font-sans rounded-xl bg-[#f1f1f3] shadow-md hover:shadow-lg transition relative"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-[1.3rem] font-bold text-[#3c3852] hover:text-[#7257fa] hover:underline pr-2">
                        {job.JobTitle}
                      </h3>
                      {job.status && (
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          job.status === 'active' ? 'bg-green-100 text-green-800' :
                          job.status === 'closed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {job.status}
                        </span>
                      )}
                    </div>

                    <p className="text-[0.86rem] text-[#3c3852] mt-3">
                      <strong>Location:</strong> {job.Location}
                    </p>
                    <p className="text-[0.86rem] text-[#3c3852]">
                      <strong>Category:</strong> {job.Category}
                    </p>
                    {job.Pay && (
                      <p className="text-[0.8rem] text-[#6e6b80] mt-2">Pay: {job.Pay} KM</p>
                    )}
                    
                    {/* Show poster info for applications */}
                    {selectedTab === 'Applications' && job.poster && (
                      <p className="text-[0.8rem] text-[#6e6b80] mt-1">
                        Posted by: {job.poster.name}
                      </p>
                    )}
                    
                    {/* Show applicant count for posted jobs */}
                    {selectedTab === 'My Jobs' && job.applicants && (
                      <p className="text-[0.8rem] text-[#6e6b80] mt-1">
                        {job.applicants.length} applicant{job.applicants.length !== 1 ? 's' : ''}
                      </p>
                    )}

                    {job.createdAt && (
                      <p className="text-[0.75rem] text-[#8e8e93] mt-2">
                        {formatDate(job.createdAt)}
                      </p>
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
            )}

            {/* Job Detail Modal */}
            {selectedItem && (
              <div
                className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setSelectedItem(null)}
              >
                <div
                  className="bg-white p-6 rounded-2xl w-full max-w-md shadow-xl relative max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
                    onClick={() => setSelectedItem(null)}
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-bold text-blue-900 mb-3 pr-8">
                    {selectedItem.JobTitle}
                  </h2>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Description:</strong> {selectedItem.Description}</p>
                    
                    {selectedItem.Pay && (
                      <p><strong>Pay:</strong> {selectedItem.Pay} KM</p>
                    )}
                    
                    <p><strong>Location:</strong> {selectedItem.Location}</p>
                    <p><strong>Category:</strong> {selectedItem.Category}</p>
                    
                    {selectedItem.Time && (
                      <p><strong>Duration:</strong> {selectedItem.Time}</p>
                    )}
                    
                    {selectedItem.WorkFromLocation && (
                      <p><strong>Work From:</strong> {selectedItem.WorkFromLocation}</p>
                    )}
                    
                    {selectedItem.notes && (
                      <p><strong>Notes:</strong> {selectedItem.notes}</p>
                    )}
                    
                    {selectedItem.status && (
                      <p><strong>Status:</strong> 
                        <span className={`ml-1 px-2 py-1 text-xs rounded-full ${
                          selectedItem.status === 'active' ? 'bg-green-100 text-green-800' :
                          selectedItem.status === 'closed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedItem.status}
                        </span>
                      </p>
                    )}

                    {selectedTab === 'Applications' && selectedItem.poster && (
                      <p><strong>Posted by:</strong> {selectedItem.poster.name}</p>
                    )}

                    {selectedTab === 'My Jobs' && selectedItem.applicants && (
                      <p><strong>Applicants:</strong> {selectedItem.applicants.length}</p>
                    )}

                    {selectedItem.createdAt && (
                      <p><strong>Posted:</strong> {formatDate(selectedItem.createdAt)}</p>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end space-x-3 flex-wrap gap-2">
                    {selectedTab === 'My Jobs' && (
                      <>
                        <button
                          onClick={() => handleEditJob(selectedItem)}
                          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleViewApplicants(selectedItem)}
                          className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition"
                        >
                          View Applicants ({selectedItem.applicants?.length || 0})
                        </button>
                      </>
                    )}
                    
                    {selectedTab === 'Applications' && (
                      <>
                        <button
                          onClick={() => handleContactPoster(selectedItem)}
                          className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200 transition"
                        >
                          📧 Contact Poster
                        </button>
                        <button
                          onClick={() => handleReviewPoster(selectedItem)}
                          className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded hover:bg-yellow-200 transition"
                        >
                          ⭐ Review Poster
                        </button>
                      </>
                    )}
                  </div>
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

        {/* Applicants Viewer Modal */}
        {showApplicants && (
          <ApplicantsViewer
            jobId={selectedJobForApplicants}
            jobTitle={selectedJobTitle}
            isOpen={showApplicants}
            onClose={() => {
              setShowApplicants(false);
              setSelectedJobForApplicants('');
              setSelectedJobTitle('');
            }}
          />
        )}

        {/* Review Modal */}
        {showReviewModal && reviewTarget && (
          <ReviewModal
            isOpen={showReviewModal}
            onClose={() => {
              setShowReviewModal(false);
              setReviewTarget(null);
            }}
            jobId={reviewTarget.jobId}
            jobTitle={reviewTarget.jobTitle}
            rateeId={reviewTarget.id}
            rateeName={reviewTarget.name}
            onReviewSubmitted={() => {
              alert('✅ Review submitted successfully!');
              setShowReviewModal(false);
              setReviewTarget(null);
            }}
          />
        )}
      </section>
    </main>
  );
}