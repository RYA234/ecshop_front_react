import { useState, useEffect, useCallback } from "react";
import { CartItem } from "../../../types/cartItem";
import { Customer } from "../../../types/customer";
import * as customerService from "../../../service/customerService";
import * as cartItemService from "../../../service/cartItemService";
import * as cartItemService2 from "../../../service/cartItemServiceV2";
import { AxiosResponse } from "axios";
import * as productServiceV2 from "../../../service/productServiceV2";
import CartSubItem from "../../../component/cartItem/cartSubItem";
import CartMainItem from "../../../component/cartItem/cartMainItem";
import { Product } from "../../../types/product/product";
/**
 *
 * @remarks SpringBootのRestAPIを nextjs側が動かせるかの検証用ページ
 *
 * @authoer RYA234
 *
 * @returns
 */

// http://127.0.0.1:3000/develop/cartItem/cartItemSubWithApi
export default function CartItemSubWithApi(this: any) {
  const [currentCartItems, setCurrentCartItems] = useState<CartItem[]>([]);
  const [jwtAccessToken, setJwtAccessToken] = useState<string | null>();
  let jwt: string = "";
  const cartSubItemContent : JSX.Element[] = [];

  // ログイン処理は初回時のみ実行 CartItemドメインの検証用ページなので
  useEffect(() => {
    loginAndGetCartItem();
  }, []);

  // 	cartItemService2.addProductCart2(inputCartItem, jwtAccessToken as string)
  //   }, [jwtAccessToken]);

  const loginRequestBody: Customer = {
    email: "aaaba@gmail.com",
    password: "test",
    append: function (arg0: string, inputEmail: string): unknown {
      throw new Error("Function not implemented.");
    },
  };

  // ログイン処理後カートアイテムの情報取得更新する
  const loginAndGetCartItem = async () => {
    //await login2(loginRequestBody);
    const response = await customerService.signIn2(loginRequestBody);
    localStorage.setItem("accessToken", response);
    await getCartItem();
	await addSubCartItem();
  };
  // 買い物カゴの情報を取得する
  const getCartItem = async () => {
    const response: any = await cartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    console.log("getCartItem" + response);
	setCurrentCartItems(response as CartItem[])
	console.log("subContent is" + cartSubItemContent)
  };

   const addSubCartItem = async()=>{
	await currentCartItems.map(  async (cartItem) => {
		console.log("productId" + cartItem.productId)
	const responseA  =  await  productServiceV2.getProductById2(cartItem.productId); 
	
	cartSubItemContent.push(<CartSubItem productName={responseA.data.name} priceWithoutTax={responseA.data.price} priceIncludingTax={responseA.data.price} amount={cartItem.quantity}/>);
	console.log("responseA is" + cartSubItemContent.values)
}
	)}

  let inputProductId: number = 0;
  let inputQuantity: number = 0;

  // データベースに追加後、データベースから再取得する
  // ボタンに割り当てる
  const addCartItemHandler = async () => {
    const inputCartItem: CartItem = {
      productId: inputProductId as number,
      quantity: inputQuantity as number,
      id: 0,
      customerId: 0,
    };
    await cartItemService2.addProductCart2(
      inputCartItem,
      localStorage.getItem("accessToken") as string
    );
    getCartItem();
  };

  // カートアイテムの数量を更新後、データベースから再取得して画面更新する。
  // ボタンに割り当てる
  const updateQuantitAndGetCartItemsyHandler = async () => {
    await updateQuantity();
    console.log("between updateQuantity and getCartItems");
   	await getCartItem();
  };

  let updateInputquantiy: number = 0;
  let updateInputProductId: number = 0;
  // カートアイテムの数量を更新する
  const updateQuantity = async () => {

    const updateCarItem: CartItem = {
      productId: updateInputProductId as number,
      quantity: updateInputquantiy as number,
      id: 0, // 使わない
      customerId: 0, // 使わない
    };
   const response = await cartItemService2.updateQuantity2(updateCarItem,  localStorage.getItem("accessToken") as unknown as string)
  };
  let removeInputProductId: number = 0;

  // removeInputProducIdの値の商品を削除後　再度データベースから取得して画面更新する。
  // ボタンに割り当てる
  const removeCartItemAndGetItemsHandler = async () => {
    await removeCartItem();
	await getCartItem();
  };

  // removeInputProducIdの値の商品を削除する
  const removeCartItem = async () => {
    const removeCartItem: CartItem = {
      productId: removeInputProductId as number,
      id: 0,
      customerId: 0,
      quantity: 0,
    };
    await cartItemService2.removeProduct(removeCartItem, localStorage.getItem("accessToken") as string)
  };
  // 顧客のカートアイテム全削除後、再度データベースから取得して画面更新する。
  // ボタンに割り当てる
  const deleteAndGetItemsHandler = async () => {
    await deleteCartItem();
    let datas: any = await cartItemService2.getCartItems2(
      jwtAccessToken as string
    );
    console.log("Debug is ended");
    console.log(datas);
    setCurrentCartItems(datas.data as CartItem[]);
  };

  // 顧客のカートアイテム全削除する
  const deleteCartItem = async () => {
    await cartItemService
      .deleteByCustomer(jwtAccessToken as string)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>カートアイテムの取得、追加、更新、削除 検証ページ</h1>
      <div>※aaabaa@gmail.comでログインしているものとする。</div>
      <h1>カートアイテムの全取得</h1>
      <div>リアルタイムで表示されます。</div>
      顧客ID,商品ID,数量
	  
	  {/* cartItemを取得する */}
	  {/* cartItemのproductIdで */}
	  <CartMainItem totalCost={400} productsCost={120} shippingCost={1121} taxCost={2112} cartSubItemContents={cartSubItemContent} />
      {currentCartItems != undefined ? (
        currentCartItems.map((cartItem: CartItem) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <div>
                {cartItem.customerId},{cartItem.productId},{cartItem.quantity}
              </div>
            </div>
          );
        })
      ) : (
        <div>カートアイテムがありません</div>
      )}
      <br />
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
      <h1>カートアイテムの数量を変更</h1>
      <label>数量変更する商品ID</label>
      <input
        type="text"
        placeholder="商品ID"
        onChange={(event) =>
          (updateInputProductId = event.target.value as unknown as number)
        }
      />
      <br />
      <label>数量</label>
      <input
        type="text"
        placeholder="数量"
        onChange={(event) =>
          (updateInputquantiy = event.target.value as unknown as number)
        }
      />
      <br />
      <button onClick={updateQuantitAndGetCartItemsyHandler}>数量変更</button>
      <h1>カートアイテムを1つ削除</h1>
      <label> 商品ID</label>
      <input
        type="text"
        placeholder="削除したい商品ID"
        onChange={(event) =>
          (removeInputProductId = event.target.value as unknown as number)
        }
      />
      <br />
      <button onClick={removeCartItemAndGetItemsHandler}>remove</button>
      <h1>カートアイテムを全削除</h1>
      <button onClick={deleteAndGetItemsHandler}>
        delete カートアイテム全削除
      </button>
    </>
  );
}
