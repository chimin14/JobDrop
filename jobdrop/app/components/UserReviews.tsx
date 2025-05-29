'use client';

import { useState, useEffect } from 'react';

type Review = {
  _id: string;
  rater: {
    _id: string;
    name: string;
  };
  ratee: {
    _id: string;
    name: string;
  };
  jobId: {
    _id: string;
    JobTitle: string;
  };
  rating: number;
  comment?: string;
  createdAt: string;
};

type UserReviewsProps = {
  userId: string;
  userName: string;
};

export default function UserReviews({ userId, userName }: UserReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState({ avg: 0, count: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [userId]);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/reviews/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
        setStats({ avg: data.avg, count: data.count });
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="text-yellow-400">
        {i < rating ? '⭐' : '☆'}
      </span>
    ));
  };

  if (loading) {
    return <div className="animate-pulse">Loading reviews...</div>;
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Reviews for {userName}
        </h3>
        {stats.count > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(Math.round(stats.avg))}</div>
            <span className="text-lg font-semibold">{stats.avg.toFixed(1)}</span>
            <span className="text-gray-600">({stats.count} review{stats.count !== 1 ? 's' : ''})</span>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-gray-900">{review.rater.name}</p>
                  <p className="text-sm text-gray-600">{review.jobId.JobTitle}</p>
                </div>
                <div className="text-right">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <p className="text-sm text-gray-500">{formatDate(review.createdAt)}</p>
                </div>
              </div>
              {review.comment && (
                <p className="text-gray-700 italic">"{review.comment}"</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}