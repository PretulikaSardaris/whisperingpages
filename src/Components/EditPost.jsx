import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, onSave, initialContent}) => {
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    setEditContent(initialContent || ''); // Set initial content of the post to edit
  }, [initialContent]);

  const handleChange = (e) => {
   setEditContent(e.target.value)
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editContent)
  };
   
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-2/3">
        <h2 className="text-3xl text-center text-black font-bold mb-4">Edit Post</h2>
        <form 
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <textarea
              value={editContent}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              rows="4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;