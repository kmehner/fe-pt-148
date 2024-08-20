import React, { createContext} from 'react'

// Initializing a class 
const UserContext = createContext({
  user: {
    username: '', 
    password: '',
    isLoggedIn: '' 
  },

  setUser: () => {} // blank callback 
})

export default UserContext