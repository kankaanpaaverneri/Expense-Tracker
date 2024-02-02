
import { useState } from 'react'
import './App.css'
import UsersContextProvider from './UsersContext'
import Header from './components/Header'
import SelectUser from './components/SelectUser'
function App() {
  const [selectedUser, setSelectedUser] = useState();

  return (
    <>
      <Header/>
      <UsersContextProvider>
        {!selectedUser && <SelectUser setSelectedUser={setSelectedUser}/>}
        {selectedUser && <h1>{`User is: ${selectedUser.name}`}</h1>}
      </UsersContextProvider>
    </>
  )
}

export default App
