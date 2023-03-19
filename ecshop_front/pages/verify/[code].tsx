import { useRouter } from "next/router";
import {useEffect} from 'react';
import * as customerService from "../../service/customerService";


// 認証完了ページ
export default  function Verify(){
	// URLのパラメーターverify/〇〇の〇〇部分を変数に渡している
	const {code} = useRouter().query;
	// 初回実行時に実行する
	 // eslint-disable-next-line react-hooks/exhaustive-deps
	//  useEffect( ()=>{
	// 	 verify();},[]);

	
	// 認証コードを送信する関数
	const verify = async()=> {
		const response = await customerService.verify(code as string);
		console.log("aa");
	}
	 verify();

	return (
		<div>
			認証が完了しました。
			認証コード
			<div>{code}</div>
		</div>
	)
}