'use client';

import { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';
import UserReviews from './UserReviews';

type Applicant = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
  location?: string;
  createdAt?: string;
};

type Job = {
  _id: string;
  JobTitle: string;
  Description: string;
  Location: string;
};

type ApplicantsViewerProps = {
  jobId: string;
  jobTitle: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ApplicantsViewer({ jobId, jobTitle, isOpen, onClose }: ApplicantsViewerProps) {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [jobDetails, setJobDetails] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  
  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewTarget, setReviewTarget] = useState<{id: string, name: string} | null>(null);
  
  // User reviews state
  const [showUserReviews, setShowUserReviews] = useState(false);
  const [reviewsTarget, setReviewsTarget] = useState<{id: string, name: string} | null>(null);

  useEffect(() => {
    if (isOpen && jobId) {
      fetchApplicants();
    }
  }, [isOpen, jobId]);

  const fetchApplicants = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`http://localhost:5001/api/jobs/${jobId}/applicants`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized - please log in again');
        } else if (response.status === 403) {
          throw new Error('You can only view applicants for your own job postings');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJobDetails(data.job);
      setApplicants(data.applicants || []);
    } catch (error) {
      console.error('Error fetching applicants:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch applicants');
    } finally {
      setLoading(false);
    }
  };

  const handleContactApplicant = (applicant: Applicant) => {
    if (applicant.email) {
      const subject = encodeURIComponent(`JobDrop: ${jobTitle} - Application`);
      const body = encodeURIComponent(`Hi ${applicant.name},\n\nI saw your application for "${jobTitle}" on JobDrop. I'd like to discuss this opportunity with you.\n\nBest regards`);
      window.open(`mailto:${applicant.email}?subject=${subject}&body=${body}`);
    }
  };

  const handlePhoneContact = (phone: string) => {
    window.open(`tel:${phone}`);
  };

  const handleReviewApplicant = (applicant: Applicant) => {
    setReviewTarget({ id: applicant._id, name: applicant.name });
    setShowReviewModal(true);
  };

  const handleViewReviews = (applicant: Applicant) => {
    setReviewsTarget({ id: applicant._id, name: applicant.name });
    setShowUserReviews(true);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Job Applicants</h2>
              <p className="text-blue-100">
                <strong>Job:</strong> {jobTitle}
              </p>
              {jobDetails && (
                <p className="text-blue-100 text-sm mt-1">
                  📍 {jobDetails.Location}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-300 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading applicants...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
              <button 
                onClick={fetchApplicants}
                className="ml-2 underline hover:no-underline"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && applicants.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.196-2.121M9 20H4v-2a3 3 0 515.196-2.121m0 0a5.002 5.002 0 019.608 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
              <p className="text-gray-600">
                No one has applied to this job yet. Check back later!
              </p>
            </div>
          )}

          {!loading && !error && applicants.length > 0 && (
            <>
              <div className="mb-4">
                <p className="text-gray-600">
                  <strong>{applicants.length}</strong> {applicants.length === 1 ? 'person has' : 'people have'} applied to this job
                </p>
              </div>

              <div className="grid gap-4">
                {applicants.map((applicant) => (
                  <div
                    key={applicant._id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {applicant.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Applied {formatDate(applicant.createdAt)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewReviews(applicant)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          View Reviews
                        </button>
                        <button
                          onClick={() => setSelectedApplicant(applicant)}
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">
                          <strong>📧 Email:</strong> {applicant.email}
                        </p>
                      </div>
                      {applicant.phone && (
                        <div>
                          <p className="text-sm text-gray-600">
                            <strong>📱 Phone:</strong> {applicant.phone}
                          </p>
                        </div>
                      )}
                      {applicant.location && (
                        <div>
                          <p className="text-sm text-gray-600">
                            <strong>📍 Location:</strong> {applicant.location}
                          </p>
                        </div>
                      )}
                    </div>

                    {applicant.bio && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">
                          <strong>About:</strong> {applicant.bio}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3 flex-wrap">
                      <button
                        onClick={() => handleContactApplicant(applicant)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                      >
                        📧 Send Email
                      </button>
                      {applicant.phone && (
                        <button
                          onClick={() => handlePhoneContact(applicant.phone!)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                        >
                          📱 Call
                        </button>
                      )}
                      <button
                        onClick={() => handleReviewApplicant(applicant)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition text-sm font-medium"
                      >
                        ⭐ Leave Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Applicant Detail Modal */}
      {selectedApplicant && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedApplicant(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedApplicant.name}
                </h3>
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p><strong>📧 Email:</strong> {selectedApplicant.email}</p>
                {selectedApplicant.phone && (
                  <p><strong>📱 Phone:</strong> {selectedApplicant.phone}</p>
                )}
                {selectedApplicant.location && (
                  <p><strong>📍 Location:</strong> {selectedApplicant.location}</p>
                )}
                {selectedApplicant.bio && (
                  <p><strong>About:</strong> {selectedApplicant.bio}</p>
                )}
                <p><strong>Applied:</strong> {formatDate(selectedApplicant.createdAt)}</p>
              </div>

              <div className="flex gap-3 mt-6 flex-wrap">
                <button
                  onClick={() => handleContactApplicant(selectedApplicant)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  📧 Email
                </button>
                {selectedApplicant.phone && (
                  <button
                    onClick={() => handlePhoneContact(selectedApplicant.phone!)}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    📱 Call
                  </button>
                )}
              </div>
              
              <div className="mt-3">
                <button
                  onClick={() => {
                    handleReviewApplicant(selectedApplicant);
                    setSelectedApplicant(null);
                  }}
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  ⭐ Leave Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && reviewTarget && (
        <ReviewModal
          isOpen={showReviewModal}
          onClose={() => {
            setShowReviewModal(false);
            setReviewTarget(null);
          }}
          jobId={jobId}
          jobTitle={jobTitle}
          rateeId={reviewTarget.id}
          rateeName={reviewTarget.name}
          onReviewSubmitted={() => {
            console.log('Review submitted successfully!');
          }}
        />
      )}

      {/* User Reviews Modal */}
      {showUserReviews && reviewsTarget && (
        <div
          className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => {
            setShowUserReviews(false);
            setReviewsTarget(null);
          }}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Reviews</h3>
                <button
                  onClick={() => {
                    setShowUserReviews(false);
                    setReviewsTarget(null);
                  }}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>
              <UserReviews userId={reviewsTarget.id} userName={reviewsTarget.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}