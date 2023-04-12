import React, { useContext, useState } from "react";
import {mainContext } from "../../pages/mainPage";
import * as cartItemServiceV2 from "../../service/cartItemServiceV2";
import { CartItemResponse } from "../../types/cartItem/cartItemResponse";

// ショッピングカートの商品部分のコンポーネント
export default function CartSubItemV3(props:{index:number}) {

  const { cartItemsResponse, setCartItemsResponse}: any = useContext(mainContext);
  // 数量を変えたときに一時的に収納する値　修正ボタンを押したときこの値に入っている値を処理をする
  let [tempNum, setTempNum] = useState<number>(cartItemsResponse?.cartItemDtos[props.index]?.quantity); 

  // 「削除」ボタンを押した時の処理 コンポーネントを削除して情報の更新
  const onDeleteButtonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await removeCartItem();
    await getCartItem();
  };

  // 「修正」ボタン押した時の処理-数量を変更して描画更新
  const onQuantityChangeButtonHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    await updateCartItem();
    await getCartItem();
  };

  //プルダウンリストで数量変更を変更したときに実行。”一時的”に値を保持する。
  const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    setTempNum(e.currentTarget.value as unknown as number);
    console.log(
      `商品名:${cartItemsResponse.cartItemDtos[props.index].productName}のセレクトボックス表示が${tempNum} に変更されました。)`
    );
  };

   //　データベースからユーザーの買い物カゴの商品情報を取得する関数
   const getCartItem = async () => {
    let response: CartItemResponse = await cartItemServiceV2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    setCartItemsResponse(response);
  };

  //買い物カゴの 商品を一つ削除
  const removeCartItem = async () => {
    await cartItemServiceV2.removeProduct(
      cartItemsResponse.cartItemDtos[props.index].productId,
      localStorage.getItem("accessToken") as string
    );
    console.log(removeCartItem);
  };

  // 買い物カゴに入った数量を変更
  const updateCartItem = async () => {
    await cartItemServiceV2.updateQuantity2(
      cartItemsResponse.cartItemDtos[props.index].productId,
      tempNum,
      localStorage.getItem("accessToken") as string
    );
  };

  return (
    <div className="Layout">
      <div className="Title">
        {cartItemsResponse?.cartItemDtos[props.index].productName}
      </div>
      <div className="WithoutTax">
        税抜：{cartItemsResponse?.cartItemDtos[props.index].priceWithoutTax}円
      </div>
      <div className="IncludingTax">
        税込：{cartItemsResponse?.cartItemDtos[props.index].priceWithTax.toFixed()}円
      </div>
      <div className="Selector">
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
      </div>
        <button
          className="ModifyButton"
          onClick={onQuantityChangeButtonHandler}
        >
          修正
        </button>
        <button className="DeleteButton" onClick={onDeleteButtonHandler}>
          削除
        </button>

      <style jsx>{`
        .Layout {
          box-sizing: border-box;
          
          position: relative;
          width: 217px;
          height: 107px;
          // left: 0px;
           top: 147px;
          
          background: #FFF5F5;
          border: 1px solid #000000;
          border-radius: 5px;
          
        }
        .Selector{
          box-sizing: border-box;

          position: absolute;
          width: 20px;
          height: 20px;
          left: 50px;
          top: 77px;          
        }
        .Title{

          position: absolute;
          width: auto;
          height: 15px;
          // left: 90px;
          top: 12px;
          text-align: center;

          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          /* ボックスの高さと同一 */          
          color: #000000;
          
        }
        .IncludingTax {
          position: absolute;
          width: 96px;
          height: 15px;
          left: 19px;
          top: 61px;
          
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          /* ボックスの高さと同一 */
          
          
          color: #000000;
        }
        .WithoutTax {
          position: absolute;
          width: 96px;
          height: 15px;
          left: 19px;
          top: 36px;
          
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          /* ボックスの高さと同一 */
          
          
          color: #000000;          
        }
        .ModifyButton {
          box-sizing: border-box;

          position: absolute;
          width: 51px;
          height: 20px;
          left: 90px;
          top: 79px;
          
          background: #43D651;
          border: 1px solid #000000;
          border-radius: 3px;
          color: white;
        }
        .DeleteButton {
          box-sizing: border-box;

          position: absolute;
          width: 51px;
          height: 20px;
          left: 141px;
          top: 79px;
          
          background: #FF8383;
          border: 1px solid #000000;
          border-radius: 3px;
          color: white;
        }
      `}</style>
    </div>
  );
}
