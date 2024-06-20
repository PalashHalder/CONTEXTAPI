
import { useState } from 'react'
import './App.css'
import Users from './components/Users'
import NewUsers from './components/NewUsers'


function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
    userName: "Palash",
    },
    {
      id: 2,
    userName: "Halder",
    },

  ]);

  const handleUserDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id)
    setUsers(filteredUser);
  };

  const handleNewUsers = (newUser) =>{
    setUsers((prev) => [...prev, newUser] ) 
  }

  return (
    <div className='bg-gradient-to-tr from-cyan-200 to-slate-50 w-full h-screen flex justify-center'>
      <div className='w-5/6'>
        <NewUsers handleNewUsers = {handleNewUsers} />
        <Users users = {users} handleUserDelete = {handleUserDelete} />
      </div>
    </div>
  )
}

export default App; 

// API --> Users --> User
