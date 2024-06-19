
import { useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {

  const [user, stUser] = useState({
    id: 1,
    userName: "Palash"
  })

  return (
    <>
      <Users />
    </>
  )
}

export default App
