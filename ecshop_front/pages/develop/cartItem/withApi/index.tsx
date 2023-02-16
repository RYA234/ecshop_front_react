import { createContext, useEffect, useState } from "react";
import CartMainItemV2 from "../../../../component/cartItem/cartMainItemV2";
import CartSubItemV2 from "../../../../component/cartItem/cartSubItemV2";
import { Customer } from "../../../../types/customer";
import * as CustomerService from "../../../../service/customerService";
import * as CartItemService2 from "../../../../service/cartItemServiceV2";
import { CartItemResponse } from "../../../../types/cartItem/cartItemResponse";

// 買い物カゴ機能の実装
// Apiと接続して動作するか確認する
// http://127.0.0.1:3000/develop/cartItem/withApi

//　Stateをグローバル化するためにContextを作成
// StateはCartMainItemV2とCartSubItemV2にわたす
export const SubCartItemContext = createContext();

export default function Index() {
  // ログイン処理は初回時のみ実行
  useEffect(() => {
    loginAndGetCartItem();
  }, []);

  // carItemのResponse　Contextで子コンポーネントに渡す
  const [cartItemsResponse, setCartItemsResponse] =
    useState<CartItemResponse>();

  // ログインするときに必要なユーザー情報
  const loginRequestBody: Customer = {
    email: "aaaba@gmail.com",
    password: "test",
    append: function (arg0: string, inputEmail: string): unknown {
      throw new Error("Function not implemented.");
    },
  };

  // ログインしてカートアイテムの情報を取得する
  const loginAndGetCartItem = async () => {
    //await login2(loginRequestBody);
    const response = await CustomerService.signIn2(loginRequestBody);
    localStorage.setItem("accessToken", response);
    await getCartItem();
  };

  // 新しい商品を追加する
  const addHandler = async () => {
    await addCartItem();
    await getCartItem();
  };

  // ユーザーのカート情報を取得する
  const getCartItem = async () => {
    let response: CartItemResponse = await CartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    // console.log("getCartItem" + response);
    setCartItemsResponse(response);
  };

  // 新しい商品を買い物カゴに追加する
  const addCartItem = async () => {
    // 商品ID：5　数量:4の商品情報
		const productId : number = 5 
		const quantity : number = 4 
    const response = await CartItemService2.addProductCart2(
      productId,quantity,
      localStorage.getItem("accessToken") as unknown as string
    );
  };

  return (
    <div>
      {/* MainItemsの実装 金額関係 */}
      <SubCartItemContext.Provider key={-1} value={{ cartItemsResponse }}>
        <CartMainItemV2 />
      </SubCartItemContext.Provider>

      {/* SubItemsの実装 買い物カゴにいれた商品 */}
      {cartItemsResponse?.cartItemDtos.map((cartItems, index) => {
        let subItemvalue = {
          cartItemsResponse,
          setCartItemsResponse,
          index,
        };
        return (
          <SubCartItemContext.Provider key={index} value={subItemvalue}>
            <CartSubItemV2 />
          </SubCartItemContext.Provider>
        );
      })}
      <button onClick={addHandler}>商品を追加する</button>
    </div>
  );
}
