/* eslint-disable react-hooks/rules-of-hooks */
import { MouseEvent, useState, useEffect } from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import CartSubItem from "../../../component/cartItem/cartSubItem";
import { deleteByCustomer, updateQuantity } from '../../../service/cartItemServiceV2';



// http://127.0.0.1:3000/develop/cartItem/cartItemSubCheckV2
// サブアイテムの削除を検証する

export default function cartItemSubCheck(){
	type CartItemV2 ={
		productName:String;
		priceWithoutTax:number;
		priceIncludingTax:number;
		amount:number;	
	 }
	 let cartItemContents : JSX.Element[] = [];
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [sub,setSub] = useState<CartItemV2[]>([]);	
	// useEffect(() => {
	// 	deleteHandler();
	// },[sub.values])

	useEffect(() => {
		inita();
	},[])

	let addData = {productName:"豚肉　100g",priceWithoutTax:200,priceIncludingTax:299,amount:0} as CartItemV2;
	let addData1 = {productName:"豚肉　100sag",priceWithoutTax:200,priceIncludingTax:299,amount:0} as CartItemV2;
	
	const deleteHandler=()=>{
		setSub([...sub.slice(0,0), ...sub.slice(1)])
	// setSub([...sub,{productName:"豚肉　100g",priceWithoutTax:200,priceIncludingTax:299,amount:0}]);
	// setSub(
	// 	sub.filter((cartItem:CartItemV2, index)=>{cartItem !==  addData} )
	// )
	// updateQuantity();
	}

	const addHandler=()=>{
		setSub([...sub,addData]);
	}
	

	const updateQuantity=()=>{
		cartItemContents = [];
		sub?.map((cartItem:CartItemV2)=>{
			cartItemContents.push(<CartSubItem productName={"豚肉　100g"} priceWithoutTax={200} priceIncludingTax={299} amount={0}/>)
		})
	}

	
	const inita= ()=>{
		console.log("initが実行されました。")
		console.log("before"+sub.length)	
		  setSub([...sub, addData1, addData]);
		 // todo console.logが表示されない。なぜ？ 
		  console.log("after"+sub.length)
}
	
	return(		
		<div>
			{/* <CartSubItem productName={"豚肉　100g"} priceWithoutTax={200} priceIncludingTax={299} amount={0}/> */}
			{
				sub.map((content,index) => {
					return( 
					// eslint-disable-next-line react/jsx-key
					<div>
						<CartSubItem productName={content.productName as string} priceWithoutTax={content.priceWithoutTax} priceIncludingTax={1} amount={0}/>
					</div>
					)
				})
			}
			{console.log(sub)}
			<button onClick={deleteHandler}>削除</button>
			<button onClick={addHandler}>追加</button>
		
		</div>
	)
}