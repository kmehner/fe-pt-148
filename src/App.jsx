import React, {useState} from 'react'
import UserContext from './context/UserContext'
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'

const App = () => {
  // Setting the default values 
  const [user, setUser] = useState({
    username: '', 
    password: '',
    isLoggedIn: '' 
  })

  return (
    // "Instantiating the class" with default values 
    <UserContext.Provider value={{ user, setUser }}>
      <HomePage />
      <LoginPage />
    </UserContext.Provider>
  )
}

export default App