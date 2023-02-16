import React, { useContext, useState } from "react";
import { SubCartItemContext } from "../../pages/develop/cartItem/withApi";
import * as cartItemServiceV2 from "../../service/cartItemServiceV2";
import { CartItemResponse } from "../../types/cartItem/cartItemResponse";

// ショッピングカートの商品のコンポーネント
export default function CartSubItemV2(this: any) {

  const { cartItemsResponse, setCartItemsResponse, index }: any = useContext(SubCartItemContext);
  // 数量を変えたときに一時的に収納する値　修正ボタンを押したときこの値に入っている値を処理をする
  let [tempNum, setTempNum] = useState<number>(
    cartItemsResponse.cartItemDtos[index].quantity
  );

  //　データベースから商品情報を取得する
  const getCartItem = async () => {
    let response: CartItemResponse = await cartItemServiceV2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    setCartItemsResponse(response);
  };

  // 「削除」ボタンを押した時の挙動 コンポーネントを削除して情報の更新
  const onDeleteButtonHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(
      `${cartItemsResponse.cartItemDtos[index].productName}を削除しました。`
    );
    // DELETEのAPIを叩く
    await removeCartItem();
    // GETのAPIを叩く
    await getCartItem();
  };

  // 「修正」ボタン押した時の挙動-数量を変更して描画更新
  const onQuantityChangeButtonHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    await updateCartItem();
    await getCartItem();
  };

  // 商品を一つ削除する
  const removeCartItem = async () => {
    await cartItemServiceV2.removeProduct(
      cartItemsResponse.cartItemDtos[index].productId,
      localStorage.getItem("accessToken") as string
    );
    console.log(removeCartItem);
  };

  // 数量を変更します。apiを使ってデータベースを更新
  const updateCartItem = async () => {
    await cartItemServiceV2.updateQuantity2(
      cartItemsResponse.cartItemDtos[index].productId,
      tempNum,
      localStorage.getItem("accessToken") as string
    );
  };

  // 数量変更したときに”一時的”に値を保持する。
  const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setTempNum(e.currentTarget.value as unknown as number);
    console.log(
      `商品名:${cartItemsResponse.cartItemDtos[index].productName}のセレクトボックス表示が${tempNum} に変更されました。)`
    );
  };

  return (
    <div className="Layout">
      <div>{cartItemsResponse.cartItemDtos[index].productName}</div>
      <div>税抜{cartItemsResponse.cartItemDtos[index].priceWithoutTax}円</div>
      <div className="IncludingTax">
        税込{cartItemsResponse.cartItemDtos[index].priceWithTax}円
      </div>
      <div className="SubLayout">
        <select
          value={tempNum}
          onChange={(e: React.FormEvent<HTMLSelectElement>) =>
            onChangeHandler(e)
          }
        >
          <option value={tempNum}>{tempNum}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button
          className="ModifyButton"
          onClick={onQuantityChangeButtonHandler}
        >
          修正
        </button>
        <button className="DeleteButton" onClick={onDeleteButtonHandler}>
          削除
        </button>
      </div>
      <style jsx>{`
        .Layout {
          display: flex;
          flex-direction: column;
          width: 200px;
          aligh-items: center;
          border: 1px solid black;
        }
        .SubLayout {
          display: flex;
          flex-direction: row;
          column-gap: 10px;
        }
        .IncludingTax {
          color: red;
        }
        .ModifyButton {
          background-color: green;
          color: white;
        }
        .DeleteButton {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
}
