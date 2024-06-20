import React, { useState } from 'react'

const NewUsers = ({handleNewUsers}) => {

    const [name, setName] = useState('');

    const handleAddUser = (event) =>{
      event.preventDefault();

      const newUser = {
        id: new Date().getDate().toString(),
        userName: name,
      }

      handleNewUsers(newUser);
    }
    




  return (
    <div className='pt-3 text-center mb-6 bg-white'>
        <div>Add New Users</div>
        <form action="" className="w-2/3 mx-auto p-4">
            <input placeholder='add new users'
            onChange={(event) => setName(event.target.value)}
            className='w-full bg-white border border-black p-3 focus:outline-none'
            />
            <button onClick={handleAddUser} className='bg-slate-500 py-2 px-2 mt-6 rounded-md text-white'>Add User</button>
        </form>

    </div>
  );
};

export default NewUsers