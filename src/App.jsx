
import './App.css'
import UsersContextProvider from './UsersContext'
import Header from './components/Header'
import SelectUser from './components/SelectUser'
function App() {

  return (
    <>
      <Header/>
      <UsersContextProvider>
        <SelectUser/>
      </UsersContextProvider>
    </>
  )
}

export default App
