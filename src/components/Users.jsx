import React from 'react'
import User from './User'

const Users = ({ users, handleUserDelete }) => {

  return (
    <div className='grid grid-cols-4 gap-3'>
      {users.map((user, index) => (
        <User user = {user} handleUserDelete = {handleUserDelete} />
      ))}
    </div>
  );
};

export default Users;