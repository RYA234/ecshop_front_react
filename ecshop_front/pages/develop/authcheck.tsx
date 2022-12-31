import { MouseEventHandler, useRef, useState } from "react";
import * as customerService from "../../service/customerService";
import { Customer } from "../../types/customer";
import { JwtResponse } from "../../types/jwtResponse.t";
import { Button, CarouselItem, Form } from 'react-bootstrap';
import { Category } from "../../types/category";


/**
 * @remarks 検証用ページ <br/
 *			以下の２点の実装方法を確認するためのページです。<br/>
 *	  	  1. nextjsをフロントとしてSpringSecurityの認証するための実装方法確認<br/>
 *		  2. 認証成功後、認可が必要なapiを使えるか実装方法確認y<br/>	
 * @returns 
 * 
 * 
 */
export default function Authcheck(){

	// 開発効率上げるため　この時点で登録情報は入力済みとする
	// 登録情報はMysqlに保存され　passwordはバックエンド側でbcrypt方式で暗号化され保存される。 
	const [inputEmail,setInputEmail] = useState<string>('aaaba@gmail.com');
	const [inputPassword,setInputPassword] = useState<string>('test');
	const [jwtAccessToken, setJwtAccessToken] = useState<string | null>();
	const [cartItemMessage,setCartItemMessage] = useState<string>();
	const [presentCartItems, setPresentCartItems] = useState<cartItemType[]>([]);

	// 本当は型定義ファイルに移すべきだが、今回はここに書く
	type cartItemType = {
		id:number,
		customerId:number,
		productId:number,
		quantity:number,
	}
	
	// 認証ログイン処理
	const submitHandler=(event : React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();
		const requestBody : Customer  ={
			email: inputEmail,
			password: inputPassword,			
			append: function (arg0: string, inputEmail: string): unknown {
				throw new Error("Function not implemented.");
			}
		} ;
		customerService
		.signIn(requestBody)
		.then((response) => {
			localStorage.setItem('accessToken', response.data.accessToken)
			setJwtAccessToken(response.data.accessToken);})
		.catch((error) => { 
			localStorage.setItem('accessToken', ' error');
			setJwtAccessToken(localStorage.getItem('accessToken'));})
		;
	}

	// 認可　顧客の買い物かごの情報を取得する。
	const getCategoriesHandler = (onClick? : React.MouseEvent<HTMLButtonElement> | undefined) => {
		customerService
		.getCartItems(jwtAccessToken as string)
		.then((cartItems) => {
				cartItems.data.map((cartItem : cartItemType) => { 
				setPresentCartItems(presentCartItems => [...presentCartItems,{
					id:cartItem.id,
					customerId:cartItem.customerId,
					productId:cartItem.productId,
					quantity:cartItem.quantity
				}]);
				setCartItemMessage('成功');
				}
				)
		})
		.catch((error: any) => {
			setPresentCartItems([]); // 初期化
			setCartItemMessage('失敗');
		})	
	}
	return(
		<>
			<h2>auth jwt 認証 ログイン</h2>
			フロント側:NextJs<br />
			バックエンド側:Springboot SpringSecurity<br />
			動き
			<br />
			URI http://localhost:5000/api/auth/signinにPOST Methodを送ります。<br />
			<br />
			リクエストボディにはjson形式で ユーザーが入力したemailとpasswordが含まれています。<br />
			正しいemailとpasswordが入力された場合、localstorageがJWT-Tokenが収納されます。<br />
			誤ったemailとpasswordが入力された場合、localstorageに「error」が収納されます。<br />

			local:storageの値「UseStateに渡している値」:<br />
			{jwtAccessToken}
			<Form onSubmit = {submitHandler} >
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label><br />
				<Form.Control 
					type="email" 
					placeholder="Enter email"  
					value  = {inputEmail as string}
					onChange={(event) => setInputEmail(event.target.value)}
					/><br />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label><br />
				<Form.Control 
					type="password" 
					placeholder="Password" 
					value ={inputPassword as string}
					onChange={(event) => setInputPassword(event.target.value)}
					/><br /><br />
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
			</Form>
		<div>
			<h2>auth jwt 認可</h2>
			認証が必要なAPIを叩けるか実際に確認する。<br />
				ユースケース的には、ECショップにおいてユーザーが自分の買い物カゴの情報を取得します。<br />
				<Button onClick={getCategoriesHandler}>買い物カゴの情報を取得する。</Button>
				<br />
				id, 商品Id、数量
				 {presentCartItems.map((cartItem:cartItemType) => {
					return(
						// eslint-disable-next-line react/jsx-key
						<div>
						{cartItem.id}  {cartItem.productId} {cartItem.quantity}
						</div>
					)
				 }
				)}
				<br/><br/>
				api実行できたか<br/>
				{cartItemMessage}
		</div>
	</>
	)
}