// App.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import BlogPostList from './BlogPostList'; // We will change this
import UserList from './UserList'; // Import a new or renamed component for users
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [users, setUsers] = useState([]); // Renamed from posts to users
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Change the API endpoint to fetch users
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // Store the user data
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users'); // Update error message
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ErrorBoundary>
      {/* Pass users data to the UserList component */}
      <UserList users={users} />
    </ErrorBoundary>
  );
}

export default App;