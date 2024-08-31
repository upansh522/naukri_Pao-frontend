import React, { useState } from "react";

const ProfileInfo = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });
  const [resume, setResume] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleCoverPhotoUpload = (e) => {
    setCoverPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-600 mb-6">Profile Information</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="p-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-700 focus:ring focus:ring-orange-700 focus:ring-opacity-50"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Resume</h3>
            <input
              type="file"
              onChange={handleResumeUpload}
              className="p-4 block w-full text-sm text-gray-600 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none"
            />
            {resume && (
              <p className="mt-2 text-sm text-orange-400">
                Uploaded: {resume.name}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Cover Photo</h3>
            <input
              type="file"
              onChange={handleCoverPhotoUpload}
              className="p-4 block w-full text-sm text-gray-600 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none"
            />
            {coverPhoto && (
              <img src={coverPhoto} alt="Cover" className="mt-4 w-full h-48 object-cover rounded-md" />
            )}
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-orange-700 text-white py-2 px-4 rounded-md shadow-md hover:bg-orange-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
