/* eslint-disable react/no-danger-with-children */
import { useContext, useState } from "react";
import { mainContext } from "../../pages/mainPage";
import Router from "next/router";
// ショッピングカートの金額情報を表示するコンポーネント
export default function CartMainItemV3() {
  const { cartItemsResponse }: any = useContext(mainContext);
  console.log("cartItemsResponse is" + cartItemsResponse);

  const onCheckoutClick = () => {
    Router.push("/checkout");
  };

  let content: string = `合計額: ${cartItemsResponse.total.toFixed()}円
商品小計: ${cartItemsResponse.productCost}円
配送料: ${cartItemsResponse.shippingCost}円
消費税: ${cartItemsResponse.tax.toFixed()}円
`;
  return (
    <div className="Layout" key={cartItemsResponse}>
      <div className="TitleBack"></div>
      <div className="TitleText">現在の買い物カゴの中身</div>
      <button className="PurchaseButton" onClick={onCheckoutClick}>
        決済へ
      </button>
      <div className="Content">{content}</div>

      <style jsx>{`
        .TitleBack {
          position: absolute;
          height: 18px;
          left: 0%;
          right: 0%;
          top: 1px;
          background: #4fa9eb;
        }
        .Content {
          position: absolute;
          width:auto;
          height: 60px;
          left: 54px;
          right: 55px;
          bottom: 14px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 100;
          font-size: 12px;
          line-height: 15px;
          color: #000000;
          white-space: pre-wrap;
        }
        .Layout {
          position: absolute;
          width: 217px;
          height: 147px;
          border: 1px solid #000000;
          border-radius: 4px;
        }
        .TitleText {
          /* TitleText */

          position: absolute;
          height: 15px;
          left: 42px;
          right: 43px;
          top: 4px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          /* ボックスの高さと同一 */

          color: #ffffff;
        }
        .PurchaseButton {
          box-sizing: border-box;

          position: absolute;
          height: 24px;
          left: 49px;
          right: 48px;
          top: 27px;

          background: #98f0a1;
          border: 1px solid #000000;
          border-radius: 5px;
        }
        .MoneyInfomation {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
}
