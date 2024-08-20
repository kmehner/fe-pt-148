import React, { useContext, useState} from "react";
import { Form, Button, Container } from 'react-bootstrap'; 
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const {setUser} = useContext(UserContext); 
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault() // preventing default behavior - refreshing the page 

    setUser({
      username: username,
      password: password,
      isLoggedIn: true
    })

    console.log("Logged in the user")

    navigate('/'); 
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
