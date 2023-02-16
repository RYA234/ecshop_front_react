import { useState } from 'react';


export default function Register() {
	
	return(
	<>
		<form>
			<div>Emailアドレス</div>
			<input type="text"></input>
			
			<div>パスワード</div>
			<input type="password"></input>
			<br/>
			<br/>
			<button type="submit" >ユーザー登録</button>

		</form>

	</>
	) 
  }