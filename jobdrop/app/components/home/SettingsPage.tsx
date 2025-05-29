"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  // Profile data
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: ""
  });
  
  // Password data
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  // Notification preferences
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false
  });

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch('http://localhost:5001/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const userData = await response.json();
        setProfileData({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          bio: userData.bio || "",
          location: userData.location || ""
        });
        setNotifications({
          emailNotifications: userData.emailNotifications ?? true,
          jobAlerts: userData.jobAlerts ?? true,
          applicationUpdates: userData.applicationUpdates ?? true,
          marketingEmails: userData.marketingEmails ?? false
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });

      if (response.ok) {
        setMessage("Profile updated successfully!");
      } else {
        setMessage("Failed to update profile");
      }
    } catch (error) {
      setMessage("Error updating profile");
    }
    setLoading(false);
  };

  const updatePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/user/password', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        })
      });

      if (response.ok) {
        setMessage("Password updated successfully!");
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        const error = await response.json();
        setMessage(error.message || "Failed to update password");
      }
    } catch (error) {
      setMessage("Error updating password");
    }
    setLoading(false);
  };

  const updateNotifications = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/user/notifications', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(notifications)
      });

      if (response.ok) {
        setMessage("Notification preferences updated!");
      } else {
        setMessage("Failed to update notifications");
      }
    } catch (error) {
      setMessage("Error updating notifications");
    }
    setLoading(false);
  };

  const deleteAccount = async () => {
    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      } else {
        setMessage("Failed to delete account");
      }
    } catch (error) {
      setMessage("Error deleting account");
    }
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Account Settings</h1>
        <p className="text-gray-600 mb-8">
          Manage your profile and account preferences.
        </p>

        {message && (
          <div className={`mb-4 p-3 rounded ${message.includes('successfully') || message.includes('updated') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b mb-8 space-x-6">
          {["Profile", "Password", "Notifications", "Danger Zone"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-700 text-blue-800"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "Profile" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div className="flex justify-end">
              <button 
                onClick={updateProfile}
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "Password" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h2>
            
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={updatePassword}
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition disabled:opacity-50"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "Notifications" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h2>
            
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <label key={key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <span className="ml-3 text-gray-700">
                    {key === 'emailNotifications' && 'Email notifications'}
                    {key === 'jobAlerts' && 'Job alerts and recommendations'}
                    {key === 'applicationUpdates' && 'Application status updates'}
                    {key === 'marketingEmails' && 'Marketing emails and promotions'}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <button 
                onClick={updateNotifications}
                disabled={loading}
                className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </div>
        )}

        {/* Danger Zone Tab */}
        {activeTab === "Danger Zone" && (
          <div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-red-600 mb-2">Delete Account</h2>
              <p className="text-sm text-red-800 mb-4">
                Deleting your account will permanently remove all your data, job listings, and applications. 
                This action cannot be undone.
              </p>
              <button 
                onClick={deleteAccount}
                disabled={loading}
                className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition disabled:opacity-50"
              >
                {loading ? 'Deleting...' : 'Delete My Account'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}