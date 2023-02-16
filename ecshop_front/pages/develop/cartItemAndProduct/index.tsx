import { createContext, useState,useEffect } from "react";
import { CartItemResponse } from "../../../types/cartItem/cartItemResponse";
import { Customer } from "../../../types/customer";
import { ProductResponse } from "../../../types/product/productResponse";
import * as CustomerService from "../../../service/customerService";
import * as CartItemService2 from "../../../service/cartItemServiceV2";
import ProductView from "./productView";
import CartItemView from "./cartItemView";

export const mainContext  = createContext(0);
// 商品一覧機能と買い物カゴ機能をつなげる方法を確認するページ
// http://127.0.0.1:3000/develop/cartItemAndProduct
export default function Index() {
  // 商品情報のhttpレスポンス
  const [productResponse, setProductResponse] = useState<ProductResponse>();
  // 買い物カゴ情報のhttpレスポンス
  const [cartItemsResponse, setCartItemsResponse] = useState<CartItemResponse>();
  // 初回時　ログインしてユーザーの買い物かご情報を取得する。
 useEffect(() => {
	loginAndGetCartItem();
		},[]);

  // ログインするときに必要なユーザー情報
  const loginRequestBody: Customer = {
    email: "aaaba@gmail.com",
    password: "test",
    append: function (arg0: string, inputEmail: string): unknown {
      throw new Error("Function not implemented.");
    },
  };

//   ログインしてカートアイテムの情報を取得する
  const loginAndGetCartItem = async () => {
    const response = await CustomerService.signIn2(loginRequestBody);
    localStorage.setItem("accessToken", response);
    await getCartItem();
  };
  // ユーザーのカート情報を取得する
  const getCartItem = async () => {
    let response: CartItemResponse = await CartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
	 setCartItemsResponse(response);
  };
  return(
  	<div className="Layout">
		<div className="ProductViewPosition">
			<mainContext.Provider value={{ productResponse, setProductResponse,setCartItemsResponse }}>
				<ProductView />
			</mainContext.Provider>
		</div>

		<div className="CartItemViewPosition">
		<mainContext.Provider value={{ cartItemsResponse, setCartItemsResponse }}>
			<CartItemView />
		</mainContext.Provider>

		</div>

		<style jsx>{`
			.Layout{
				display:flex;
				flex-direction:row;
			}				
			// ProductViewは中心に置く
			.ProductViewPosition{
				display:flex;
				flex-basis:1000px;
				flex-wrap:wrap;					
				// width:500px;

			}
			// CartItemViewは右側に置く
			.CartItemViewPosition{
				//align-self:stretch;
			}
		`}</style>
  
  	</div>
	);
}
