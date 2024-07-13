import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';  // Adjust the import path accordingly

const TestComponent = () => {
  const { user, profileData } = useContext(AppContext);

  return (
    <div>
      <h1>Test Component</h1>
      {user ? (
        <div>
          <p>User ID: {user.uid}</p>
          {profileData ? (
            <div>
              <p>Username: {profileData.username}</p>
              <p>Email: {profileData.email}</p>
              {/* Display other profile data as needed */}
            </div>
          ) : (
            <p>No profile data found.</p>
          )}
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default TestComponent;
