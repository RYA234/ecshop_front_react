import { useState } from 'react';
import { Customer } from '../types/customer';
import * as customerService from "../service/customerService";
import Router from 'next/router';

//　ユーザー登録ページ
// http://127.0.0.1:3000/register
export default function Register() {
	let inputEmail :string;
	let inputPassword :string;
	// ボタンを押したときに実行する関数
	const onRegisterClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		// todo エラーハンドリングの実装				
		const response = await customerService.register(inputEmail,inputPassword);
		Router.push('/registerComplete')
	}

	// Emailアドレスの入力値を変数に渡す
	const onChangeEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
		inputEmail=e.currentTarget.value;
	}
	// パスワードの入力値を変数に渡す
	const onChangePasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
		inputPassword=e.currentTarget.value;
	}
	return(
	<div className="Layout">
			<div>ユーザー登録画面</div>
			入力したEメールに認証メールが送られます。
			<div>Emailアドレス</div>
			<input type="text" onChange={onChangeEmailHandler}></input>		
			<div>パスワード</div>
			<input type="password" onChange={onChangePasswordHandler}></input>
			<br/>
			<br/>
			<button onClick={onRegisterClick} >ユーザー登録</button>


		<style jsx>{`
				.Layout{
					text-align: center;
				}
			`}</style>

	</div>
	) 
  }