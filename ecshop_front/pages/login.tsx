import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { resourceLimits } from 'worker_threads';

export default function Login() {
	let aa;
	const [email, setEmail] = useState("aaaba@gmail.com");
	const [password, setPassWord] = useState("test");
	const [jwtToken,setJWTToken] = useState("");



	const requestOptions ={
		method: 'POST',
		headers:{'Content-Type': 'application/json'},
		body: JSON.stringify({
			"email" : "aaaba@gmail.com",
			"password" : "test"
		})
	  };
	  console.log("Login before")
		

	  fetch("http://localhost:5000/api/auth/signin",  requestOptions)
	  .then((res) => res.json())
	  .then((data) =>  setJWTToken(data.accessToken) )
	  .catch((error) => {
	  console.log(error);
	  setJWTToken("401 error");
		}
	  ) 
	  console.log("Login do")

	  function getJWT(){

		
	}
	return(
	<>
	<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" > 
        <Form.Label>Email address</Form.Label><br/>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>
		<p>{email}</p>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br/>
        <Form.Control type="password" placeholder="Password" /><br/><br/>
      </Form.Group>

	  <Button variant="primary" type="submit" onClick={getJWT}>
        Submit
      </Button>
	</Form>
	<div>JWTトークン</div>
	<br/>
	{jwtToken}<br/>


	</>
	) 
  }