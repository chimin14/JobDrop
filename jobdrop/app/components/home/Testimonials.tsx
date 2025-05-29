"use client";

import { useState, useEffect } from 'react';

type PlatformReview = {
  _id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const fallbackReviews = [
  {
    _id: '1',
    name: "Marko",
    email: "marko@example.com",
    rating: 5,
    comment: "Amazing platform! Found reliable help for moving in just hours. The review system makes it so trustworthy.",
    createdAt: new Date().toISOString()
  },
  {
    _id: '2', 
    name: "Ana",
    email: "ana@example.com",
    rating: 4,
    comment: "Love how simple it is to post jobs. Much better than other complicated job boards. Highly recommend!",
    createdAt: new Date().toISOString()
  },
  {
    _id: '3',
    name: "Stefan",
    email: "stefan@example.com", 
    rating: 5,
    comment: "Perfect for finding quick gigs as a student. The local focus really works well for Sarajevo.",
    createdAt: new Date().toISOString()
  }
];

export default function Testimonials() {
  const [platformReviews, setPlatformReviews] = useState<PlatformReview[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Review form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: ''
  });
  const [submittingReview, setSubmittingReview] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{name: string, email: string} | null>(null);

  useEffect(() => {
    fetchPlatformReviews();
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Fetch user profile
        const response = await fetch('http://localhost:5001/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const userData = await response.json();
          setIsLoggedIn(true);
          setUserInfo({ name: userData.name, email: userData.email });
          // Pre-fill form with user data
          setReviewForm(prev => ({
            ...prev,
            name: userData.name,
            email: userData.email
          }));
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  };

  const fetchPlatformReviews = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/platform-reviews');
      if (response.ok) {
        const data = await response.json();
        setPlatformReviews(data.length > 0 ? data : fallbackReviews);
      }
    } catch (error) {
      console.error('Error fetching platform reviews:', error);
      // Keep fallback reviews on error
    } finally {
      setLoading(false);
    }
  };

  const submitPlatformReview = async () => {
    if (!reviewForm.rating || !reviewForm.comment) {
      alert('Please provide a rating and comment');
      return;
    }

    if (!isLoggedIn && (!reviewForm.name || !reviewForm.email)) {
      alert('Please fill in your name and email');
      return;
    }

    if (reviewForm.comment.length < 10) {
      alert('Please write at least 10 characters in your review');
      return;
    }

    setSubmittingReview(true);
    try {
      const token = localStorage.getItem('token');
      const headers: any = {
        'Content-Type': 'application/json'
      };

      // Add auth header if logged in
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch('http://localhost:5001/api/platform-reviews', {
        method: 'POST',
        headers,
        body: JSON.stringify(reviewForm)
      });

      if (response.ok) {
        alert('🎉 Thank you for your review!');
        setReviewForm({ 
          name: isLoggedIn ? userInfo?.name || '' : '', 
          email: isLoggedIn ? userInfo?.email || '' : '', 
          rating: 0, 
          comment: '' 
        });
        setShowReviewForm(false);
        fetchPlatformReviews(); // Refresh reviews
      } else {
        const errorData = await response.json();
        alert(`❌ ${errorData.message || 'Failed to submit review. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('❌ Network error. Please try again.');
    } finally {
      setSubmittingReview(false);
    }
  };

  const renderStars = (rating: number, clickable = false, onStarClick?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-yellow-400 text-lg ${clickable ? 'cursor-pointer hover:scale-110 transition' : ''}`}
        onClick={clickable && onStarClick ? () => onStarClick(i + 1) : undefined}
      >
        {i < rating ? '⭐' : '☆'}
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const averageRating = platformReviews.length > 0 
    ? platformReviews.reduce((sum, review) => sum + review.rating, 0) / platformReviews.length 
    : 5;

  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">What People Say About JobDrop</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex">{renderStars(Math.round(averageRating))}</div>
            <span className="text-2xl font-bold text-blue-900">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600">({platformReviews.length} review{platformReviews.length !== 1 ? 's' : ''})</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real feedback from our community about the JobDrop platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Review Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
            
            {!showReviewForm ? (
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Help others discover JobDrop by sharing your experience with our platform.
                </p>
                {!isLoggedIn && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-blue-800 text-sm">
                      💡 <strong>Tip:</strong> <a href="/login" className="underline hover:no-underline">Login</a> to automatically fill your details!
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                >
                  ⭐ Write a Review
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {isLoggedIn && userInfo && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 text-sm">
                      ✅ <strong>Logged in as:</strong> {userInfo.name} ({userInfo.email})
                    </p>
                  </div>
                )}

                {!isLoggedIn && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={reviewForm.email}
                        onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                  <div className="flex gap-1">
                    {renderStars(reviewForm.rating, true, (rating) => setReviewForm({ ...reviewForm, rating }))}
                  </div>
                  {reviewForm.rating > 0 && (
                    <p className="text-sm text-gray-600 mt-1">
                      {reviewForm.rating === 1 && 'Poor'}
                      {reviewForm.rating === 2 && 'Fair'}
                      {reviewForm.rating === 3 && 'Good'}
                      {reviewForm.rating === 4 && 'Very Good'}
                      {reviewForm.rating === 5 && 'Excellent'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review *</label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your experience with JobDrop..."
                    minLength={10}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {reviewForm.comment.length}/10 characters minimum
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowReviewForm(false);
                      setReviewForm({ 
                        name: isLoggedIn ? userInfo?.name || '' : '', 
                        email: isLoggedIn ? userInfo?.email || '' : '', 
                        rating: 0, 
                        comment: '' 
                      });
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitPlatformReview}
                    disabled={submittingReview}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submittingReview ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Recent Reviews */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Recent Reviews</h3>
              {platformReviews.length > 3 && (
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  View All Reviews →
                </button>
              )}
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-4"></div>
                    <div className="h-16 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {platformReviews.slice(0, 3).map((review) => (
                  <div key={review._id} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <div className="flex mt-1">{renderStars(review.rating)}</div>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(review.createdAt)}</span>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            )}

            {!loading && platformReviews.length === 0 && (
              <div className="text-center py-8 text-gray-500 bg-white rounded-lg border">
                <p className="mb-2">No reviews yet.</p>
                <p className="text-sm">Be the first to review JobDrop!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* All Reviews Modal */}
      {showAllReviews && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAllReviews(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b bg-blue-600 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">All JobDrop Reviews</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex">{renderStars(Math.round(averageRating))}</div>
                    <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
                    <span className="text-blue-100">({platformReviews.length} total reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowAllReviews(false)}
                  className="text-white hover:text-red-300 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {platformReviews.map((review) => (
                  <div key={review._id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">{review.name}</p>
                        <div className="flex mt-1">{renderStars(review.rating)}</div>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(review.createdAt)}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-gray-600 text-sm">
          Join thousands of satisfied users building their community through JobDrop
        </p>
      </div>
    </section>
  );
}