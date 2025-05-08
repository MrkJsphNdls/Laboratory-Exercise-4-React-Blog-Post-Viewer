// UserList.js

import React from 'react';

function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <div>
            <strong>Address:</strong>
            <p style={{ marginLeft: '10px' }}>
              {user.address.street}, {user.address.suite}<br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <div>
            <strong>Company:</strong>
            <p style={{ marginLeft: '10px' }}>
              {user.company.name}<br />
              <em>{user.company.catchPhrase}</em>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;