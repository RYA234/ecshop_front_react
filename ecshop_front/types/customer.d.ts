/** 
* @remarks ユースケース上、ログイン機能の実装するために使います。顧客の詳細情報(電話番号、住所など)はCustomerDetail側の管轄になります。
*
* @author RYA234
* @link {signin.ts}
*/
export  type Customer = {
	/** MySQL側のIDです。フロント側では触りません*/
	id:number
	/** Eメールアドレスです。ログインするときに必要な情報です　入力した情報とMySql側で照合します。*/
	email:string
	/** パスワードです。 ログインするときに必要な情報です。SpringSecurity側でエンコードされます。*/
	password:string
}
