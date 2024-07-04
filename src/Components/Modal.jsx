import React, { useState } from 'react';

const ProfileSetupModal = ({ isOpen, onClose, onSave }) => {
  const [bio, setBio] = useState('');
  const [favAuthor, setFavAuthor] = useState('');
  const [bookRecommendation, setBookRecommendation] = useState('');
  const [currentlyReading, setCurrentlyReading] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      bio,
      favAuthor,
      bookRecommendation,
      currentlyReading,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Setup Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="2"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us something about yourself"
            ></textarea>
          </div>
    
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favAuthor">
              Favorite Author
            </label>
            <input
              id="favAuthor"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={favAuthor}
              onChange={(e) => setFavAuthor(e.target.value)}
              placeholder="Your favorite author"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookRecommendation">
              Book Recommendation
            </label>
            <input
              id="bookRecommendation"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={bookRecommendation}
              onChange={(e) => setBookRecommendation(e.target.value)}
              placeholder="A book you recommend"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentlyReading">
              Currently Reading
            </label>
            <input
              id="currentlyReading"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={currentlyReading}
              onChange={(e) => setCurrentlyReading(e.target.value)}
              placeholder="What you're currently reading"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetupModal;
