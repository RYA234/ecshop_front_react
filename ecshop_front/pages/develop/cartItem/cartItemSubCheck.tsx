import { MouseEvent } from "react";
import CartSubItem from "../../../component/cartItem/cartSubItem";


// http://127.0.0.1:3000/develop/cartItem/cartItemSubCheck
// にアクセスして動きを確認する。
export default function cartItemSubCheck(){
	return(		
		<div>
			<CartSubItem productName={"豚肉　100g"} priceWithoutTax={200} priceIncludingTax={299} amount={0}/>
		</div>
	)
}