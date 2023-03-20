import  Router  from 'next/router';
import { useState, useCallback, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { resourceLimits } from 'worker_threads';
import * as customerService from "../service/customerService";


export default function Login() {

	const [email, setEmail] = useState("aaaba@gmail.com");
	const [password, setPassWord] = useState("test");
	const [jwtToken,setJWTToken] = useState("");


	// const requestOptions ={
	// 	method: 'POST',
	// 	headers:{'Content-Type': 'application/json'},
	// 	body: JSON.stringify({
	// 		"email" : "aaaba@gmail.com",
	// 		"password" : "test"
	// 	})
	//   };
	//   console.log("Login before")
		

	//   fetch("http://localhost:5000/api/auth/signin",  requestOptions)
	//   .then((res) => res.json())
	//   .then((data) =>  setJWTToken(data.accessToken) )
	//   .catch((error) => {
	//   console.log(error);
	//   setJWTToken("401 error");
	// 	}
	//   ) 
	//   console.log("Login do")

	//   function getJWT(){

		
	// }
	let inputEmail :string;
	let inputPassword :string;
	// Emailアドレスの入力値を変数に渡す
	const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
		inputEmail=e.currentTarget.value;
	}
	// パスワードの入力値を変数に渡す
	const onChangePasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
		inputPassword=e.currentTarget.value;
	}

		// ボタンを押したときに実行する関数
		const onLoginClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
			// todo エラーハンドリングの実装				
			const response = await customerService.signIn2(email,password);
			console.log(response)
			localStorage.setItem('accessToken', response);

			Router.push('/')
		}
	return(
	<>
	<div>ユーザーログイン画面</div>
	<div>Emailアドレス</div>	
	<input type="text" onChange={onChangeEmailHandler}></input>		
	<div>パスワード</div>
	<input type="password" onChange={onChangePasswordHandler}></input>
	<br/>
	<button onClick={onLoginClick} >ログイン</button>


	{/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" > 
        <Form.Label>Emailアドレス</Form.Label><br/>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/>
		<p>{email}</p>
        <Form.Text className="text-muted">
        ver share your email with anyone else.
        </Form.Text>
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label><br/>
        <Form.Control type="password" placeholder="Password" /><br/><br/>
      </Form.Group>

	  <Button variant="primary" type="submit" onClick={getJWT}>
        Submit
      </Button>
	</Form> */}
	<div>JWTトークン</div>
	<br/>


	</>
	) 
  }