import React, { useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import useCartCount from '../hooks/useCartCount'

const HomePage = () => {
  const { user } = useContext(UserContext)
  const cartCount = useCartCount(); 

  return (
    <Container>
      <h1>Home Page</h1>


      { user.username ? 
        <h2>Welcome, {user.username}</h2>
      :
        <h2>Not logged in</h2>
      }
      

      <h3>Your cart has: {cartCount} items.</h3>

    </Container>
  )
}

export default HomePage