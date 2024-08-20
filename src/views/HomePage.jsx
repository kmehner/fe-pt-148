import React, { useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <h1>Home Page</h1>

      { user.username ? 
        <h2>Welcome, {user.username}</h2>
      :
        <h2>Not logged in</h2>
      }
    </Container>
  )
}

export default HomePage