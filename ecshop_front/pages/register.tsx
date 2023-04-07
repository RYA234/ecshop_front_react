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
			<div className="Title" >会員登録画面</div>
			<div className="Content">入力したEメールに認証メールが送られます。</div>
			<div className="EmailText">Eメール</div>

			<input type="text" onChange={onChangeEmailHandler} className="InputEmail"></input>		
			<div className="PasswordText">パスワード</div>
			<input type="password" onChange={onChangePasswordHandler} className="InputPassword"></input>
			<br/>
			<button onClick={onRegisterClick} className="RegisterButton" >
				ユーザー登録
			</button>
		<style jsx>{`
				.Content{
					position: absolute;
					height: 29px;
					width: 488px;
					left: 476px;
					top: 151px;
					border-radius: nullpx;		
					// font-family: 'Impact';
					font-style: normal;
					font-weight: 400;
					font-size: 24px;
					line-height: 29px;
					
					color: #000000;					
				}
				.Layout{
					// text-align: center;
				}
				.RegisterButton{
					box-sizing: border-box;

					position: absolute;
					height: 40px;
					width: 167px;
					left: 637px;
					top: 442px;
					border-radius: 5px;		
					background: #8DD4FC;
					border: 1px solid #000000;
					border-radius: 5px;
	
					font-size: 20px
				}
				.Title{
					position: absolute;
					height: 49px;
					width: 240px;
					left: 600px;
					top: 84px;
					border-radius: nullpx;
					
										
					font-family: 'Impact';
					font-style: normal;
					font-weight: 400;
					font-size: 40px;
					line-height: 49px;
					/* ボックスの高さと同一 */		
					color: #000000;
						
				}
				.EmailText{
					position: absolute;
					height: 49px;
					width: 145px;
					left: 449px;
					top: 217px;
					border-radius: nullpx;
							
					// font-family: 'Impact';
					font-style: normal;
					font-weight: 400;
					font-size: 40px;
					line-height: 49px;
					/* ボックスの高さと同一 */
					color: #000000;
				}
				.InputEmail{
					box-sizing: border-box;
					position: absolute;					
					height: 44px;
					width: 335px;
					left: 613px;
					top: 222px;
					border-radius: 4px;
					
					background: #FFFFFF;
					border: 1px solid #000000;
					border-radius: 4px;
					font-size: 30px;	
				}
				.PasswordText{
					position: absolute;
					height: 49px;
					width: 209px;
					left: 385px;
					top: 327px;
					border-radius: nullpx;									
					font-family: 'Impact';
					font-style: normal;
					font-weight: 400;
					font-size: 40px;
					line-height: 49px;
					/* ボックスの高さと同一 */			
					color: #000000;		

				}
				.InputPassword{
					/* InputPassword */
					box-sizing: border-box;
					
					position: absolute;
					height: 44px;
					width: 335px;
					left: 613px;
					top: 330px;
					border-radius: 4px;			
					background: #FFFFFF;
					border: 1px solid #000000;
					border-radius: 4px;
					font-size: 30px;								
				}
				

			`}</style>

	</div>
	) 
  }