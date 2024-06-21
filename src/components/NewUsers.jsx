import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UsersContext';
import Users from './Users';
import { UserHooks } from '../hooks/UsersHooks';

const NewUsers = () => {
    
    const {users, setUsers} = UserHooks();
    const [name, setName] = useState('');

    const handleAddUser = (event) =>{
      event.preventDefault();

      const newId = 
      users.length > 0 ? Math.max(...users.map((users) => users.id)) : "0";


      const newUser = {
        id: newId + 1,
        userName: name,
      };

      setName("");
      setUsers((prev) => [...prev, newUser] ) 
    };
    

  return (
    <div className='pt-3 text-center mb-6 bg-white'>
        <div>Add New Users</div>
        <form action="" className="w-2/3 mx-auto p-4">
            <input 
            value={name}
            placeholder='add new users'
            onChange={(event) => setName(event.target.value)}
            className='w-full bg-white border border-black p-3 focus:outline-none'
            />
            <button onClick={handleAddUser} className='bg-slate-500 py-2 px-2 mt-6 rounded-md text-white'>Add User</button>
        </form>

    </div>
  );
};

export default NewUsers