import React from 'react'

const User = ({user, handleUserDelete}) => {
    const {id, userName } = user;
    
    const handleDelete = (id) => {
      handleUserDelete(id);
        
    };

  return (
    <div className='bg-white shadow-md px-2 py-3 rounded-md'>

        <p className='text-base font-semibold'>{id}</p>
        <h1 className="text-lg font-bold">{userName}</h1>
        <button 
        onClick = {() => handleDelete(id)} 
        className='bg-red-600 px-5 py-2 rounded-md mt-3 text-white'>Delete</button>
    </div>
  )
}

export default User