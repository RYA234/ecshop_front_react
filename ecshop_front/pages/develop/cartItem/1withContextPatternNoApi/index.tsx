import { createContext, useState } from "react";
import { CartItemView } from "../../../../component/cartItem/CartItemView";
import CartMainItemV2 from "../../../../component/cartItem/cartMainItemV2";
import CartSubItemV2 from "../../../../component/cartItem/cartSubItemV2";
import CartMainItemStories from "../../../../stories/cartMainItem.stories";
import { CartItem } from "../../../../types/cartItem";
type ShoppingCart ={
	totalCost:number;
	productCost:number;
	shippingCost:number;
	taxCost:number;
}


// contextを使って状態管理をしている場合
// APIは使わないで、固定値で動作するか確認する
// http://127.0.0.1:3000/develop/cartItem/withContextPatternNoApi


export const ShoppingCartContext = createContext();
export const SubCartItemContext = createContext();


export default function Index(){
	const initialShoppingCart:ShoppingCart = {
		totalCost:0,
		productCost:0,
		shippingCost:0,
		taxCost:0
	}
	const initialSubItems : CartItemView[] = ([{productName:"商品名1",priceWithoutTax:1000,priceIncludingTax:1000,amount:1},
	{productName:"商品名2",priceWithoutTax:1000,priceIncludingTax:1000,amount:1}])
	 
	const [cartItemViews,setCartItemViews] = useState<CartItemView[]>(initialSubItems);
	let [shoppingCart,setShoppingCart] = useState<ShoppingCart>(initialShoppingCart);
	
	// 新しい商品を追加する
	const addHandler=()=>{
		// 固定値　後でAPI取得するように変更する。
		setCartItemViews([...cartItemViews,{productName:"商品名3",priceWithoutTax:1000,priceIncludingTax:1000,amount:1}]);
		
	}
	return(
		<div>
			{/* MainItemsの実装 金額関係 */}
			<ShoppingCartContext.Provider value={{shoppingCart,setShoppingCart}}>
				<CartMainItemV2/>
			</ShoppingCartContext.Provider>

			{/* SubItemsの実装 買い物カゴにいれた商品 */}
			{cartItemViews.map((cartItemView,index)=>{
			let subItemvalue = {
				cartItemViews,setCartItemViews,index
			}
			return(
					<SubCartItemContext.Provider key={index} value={subItemvalue}>
						<CartSubItemV2/>
					</SubCartItemContext.Provider>
				)
			})}
			<button onClick={addHandler}>商品を追加する</button>
		</div>
	)
}