
import { useState } from 'react'
import './App.css'
import UsersContextProvider from './UsersContext'
import Header from './components/Header'
import SelectUser from './components/SelectUser'
import UserRoot from './components/UserRoot'
function App() {
  const [selectedUser, setSelectedUser] = useState();

  return (
    <>
      <Header/>
      <UsersContextProvider>
        {!selectedUser && <SelectUser setSelectedUser={setSelectedUser}/>}
        {selectedUser && <UserRoot selectedUser={selectedUser}/>}
      </UsersContextProvider>
    </>
  )
}

export default App
