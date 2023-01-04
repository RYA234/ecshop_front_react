import { useState, useEffect, useCallback } from "react";
import { CartItem } from "../../types/cartItem";
import { Customer } from "../../types/customer";
import * as customerService from "../../service/customerService";
import * as cartItemService from "../../service/cartItemService";
import { AxiosResponse } from "axios";
import { getCartItems } from "../../service/cartItemService";
import { CarouselItem } from "react-bootstrap";

export default function CartItemServiceCheck(this: any) {
  const [currentCartItems, setCurrentCartItems] = useState<CartItem[]>([]);
  const [jwtAccessToken, setJwtAccessToken] = useState<string | null>();

  // ログイン処理は初回時のみ実行 CartItemドメインの検証用ページなので
  useEffect(() => {
    loginAndGetCartItem(), [];
  });

  // ログイン処理後カートアイテムの情報取得更新する
  const loginAndGetCartItem = async () => {
    await login();
    console.log("await between login and getCartItems");
    await getCartItems();
  };

  // ログインする用のAPIを叩く
  const login = () => {
    const requestBody: Customer = {
      email: "aaaba@gmail.com",
      password: "test",
      append: function (arg0: string, inputEmail: string): unknown {
        throw new Error("Function not implemented.");
      },
    };
    customerService
      .signIn(requestBody)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setJwtAccessToken(response.data.accessToken);
        console.log("accesssToken is set");
      })
      .catch((error) => {
        localStorage.setItem("accessToken", " error");
        setJwtAccessToken(localStorage.getItem("accessToken"));
        console.log("accesssToken is not set");
      });
  };
  const getCartItems = () => {
    cartItemService
      .getCartItems(jwtAccessToken as string)
      .then((response) => {
        // 再レンダリングを防ぐために、レスポンスのデータが変わっている場合のみsetCurrentCartItemsを実行する。
        if (
          (response.data as CartItem[]).toString() !=
          currentCartItems.toString()
        ) {
          setCurrentCartItems(response.data);
          console.log(response.data);
        }

        console.log("cartItems are set");
      })
      .catch((error) => {
        console.log("cartItems are not set");
      });
  };

  let inputProductId: number = 0;
  let inputQuantity: number = 0;

  const addCartItem = async () => {
    const inputCartItem: CartItem = {
      // productId: inputProductId as number, quantity: inputQuantity as number,
      productId: inputProductId as number,
      quantity: inputQuantity as number,
      id: 0,
      customerId: 0,
    };

     await cartItemService
      .addProductCart(inputCartItem, jwtAccessToken as string)
      .then((response) => {
        console.log(response.data);
        console.log("cartItems is added");
      })
      .catch((error) => {
        console.log("cartItems are not set");
      });
  };

  // データベースに追加後、データベースから再取得する
  const addCartItemHandler = async () => {
    console.log("jwt" + jwtAccessToken);
    await addCartItem();
    console.log("between addCartItem and getCartItems");
    await getCartItems();
  };

  const removeCartItemHandler = (event: React.FormEvent<HTMLFormElement>) => {};

  const deleteCartItemHandler = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <div>※aaabaa@gmail.comでログインしているものとする。</div>
      <h1>カートアイテムの全取得</h1>
      <div>リアルタイムで表示されます。</div>
      顧客ID,商品ID,数量
      {currentCartItems.map((cartItem: CartItem) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <div>
              {cartItem.customerId},{cartItem.productId},{cartItem.quantity}
            </div>
          </div>
        );
      })}
      <h1>カートアイテム追加</h1>
      <label>商品ID</label>
      <input
        type="text"
        placeholder="商品ID"
        onChange={(event) =>
          (inputProductId = event.target.value as unknown as number)
        }
      />
      {/* onchangeをするとloginAndGetCartItemが実行されるのが良くない */}
      <br />
      <label>個数</label>
      <input
        type="text"
        placeholder="1"
        onChange={(event) =>
          (inputQuantity = event.target.value as unknown as number)
        }
      />
      <button onClick={addCartItemHandler}>カートアイテム追加</button>
      <h1>カートアイテムを1つ削除</h1>
      {/* <form onSubmit={removeCartItemHandler}>
					<label> 商品ID</label>
					<input type ="text" placeholder="削除したい商品ID"/>
					<button type="submit">削除</button>
				</form> */}
      <h1>カートアイテムを全削除</h1>
      <form onSubmit={deleteCartItemHandler}></form>
    </>
  );
}
