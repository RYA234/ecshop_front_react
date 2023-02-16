import { MouseEvent, useEffect, useState } from "react";
import CartMainItem from "../../../component/cartItem/cartMainItem";
import CartSubItem from "../../../component/cartItem/cartSubItem";
import handler from '../../api/hello';
import { CartItem } from '../../../types/cartItem';
import { Product } from '../../../types/product/product';


// MainItemとSubItemを組み合わせて確認する。
// SubItem,MainItemともコード上でモックデータを入れて検証している。
// 買い物かごの取得と、数値変更、削除ボタンの動きを実装。
// http://127.0.0.1:3000/develop/cartItem/cartItemGetCheck
// にアクセスして動きを確認する。

type ShoppingCart = {
	 cartItems:CartItemV2[],
	 mainItem:mainTitle;

};



type mainTitle ={
	totalCost:number;
	productsCost:number;
	shippingCost:number;
	taxCost:number;
}

// todo 値を変更したとき、UIも更新できるようにする。
export default function CartItemGetCheck(){
	 type CartItemV2 ={
		productName:String;
		priceWithoutTax:number;
		priceIncludingTax:number;
		amount:number;	
	 }
	
	// subItemを作成する。
	const [cartMainItemContent, setCartMainItemContent] = useState<JSX.Element[]>([]);
	const [cartSubItemContent, setCartSubItemContent] = useState<JSX.Element[]>([]);
	// const cartSubItemContent : JSX.Element[] = [];
	const [shopppingCart, setShoppingCart] = useState<ShoppingCart>({cartItems:[],mainItem:{totalCost:0,productsCost:0,shippingCost:0,taxCost:0}});

	const cartSubItemContent2 : JSX.Element[] = [];
	const [sub,setSub] = useState<CartItemV2[]>([]);

 	const cart2 : CartItemV2 = {productName:"豚肉　100g",priceWithoutTax:200,priceIncludingTax:299,amount:0}
	 const cart3 : CartItemV2 = {productName:"豚肉　100g",priceWithoutTax:200,priceIncludingTax:299,amount:0}
	sub.push(cart2)
	sub.push(cart3)

	sub.map((item,index)=>{
		cartSubItemContent2.push(<CartSubItem productName={item.productName} priceWithoutTax={item.priceWithoutTax} priceIncludingTax={item.priceIncludingTax} amount={item.amount}/>);
	})

	useEffect(() => {
	adelete()},[sub]
	)

	const adelete=()=>{
		// cartSubItemContent.pop();
		console.log(cartSubItemContent2)
		// shopppingCart.cartItems.pop();
		cartSubItemContent2.pop();

	}

	cartSubItemContent.push(<CartSubItem productName={"豚肉　100g"} priceWithoutTax={200} priceIncludingTax={299} amount={0}/>);
	cartSubItemContent.push(<CartSubItem productName={"豚肉　200g"} priceWithoutTax={200} priceIncludingTax={299} amount={0}/>);
	console.log(cartSubItemContent)
	cartMainItemContent.push(<CartMainItem totalCost={400} productsCost={120} shippingCost={1121} taxCost={2112} cartSubItemContents={cartSubItemContent} />)
	// mainItemに追加する。
	// <CartMainItem totalCost={400} productsCost={120} shippingCost={1121} taxCost={2112} cartSubItemContents={[]} />

	const deleteHandler=(e:MouseEvent<HTMLButtonElement>)=>{
		// cartSubItemContent.pop();
		console.log(cartSubItemContent)
		// shopppingCart.cartItems.pop();
		cartSubItemContent.pop();

	}
	return(		
		<div>
			{/* {cartMainItemContent} */}
			{/* <CartMainItem totalCost={400} productsCost={120} shippingCost={1121} taxCost={2112} cartSubItemContents={cartSubItemContent} /> */}
			{

			}
			
			<button onClick={deleteHandler}>delete last</button>
		{cartSubItemContent2.map((item,index)=>{
			return(
				<div key={index}>
					{item}
				</div>
			)
		})
		}
		</div>
	)
}