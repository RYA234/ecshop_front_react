
import { useContext, useState } from "react";
import {mainContext } from './index';
// ショッピングカートの金額情報を表示するコンポーネント
export default function CartMainItemV3(this :any) {	
	
	const {cartItemsResponse} : any= useContext(mainContext)
	console.log("cartItemsResponse is" + cartItemsResponse)
	return (
		<div className="Layout" key={cartItemsResponse}>		
			<div className="Title">買い物カゴの中身</div>
			<button className="PurchaseButton">決済へ</button>
			<div className="MoneyInfomation">
				<div>合計額:</div>
				{/* cartItemsResponse.totalだとエラーになる「TypeError: Cannot read properties of undefined」 */}
				<div>{cartItemsResponse?.total.toFixed()}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>商品小計:</div>
				<div>{cartItemsResponse?.productCost}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>配送料:</div>
				<div>{cartItemsResponse?.shippingCost}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>消費税:</div>
				<div>{cartItemsResponse?.tax.toFixed()}円</div>
			</div>
			<style jsx>{`
				footer{
				}
				.Layout{
					display: flex;
					flex-direction: column;
					width:200px;
					aligh-items: center;
					border: 1px solid black;
				}
				.Title{
					align-self: center;
				}	
				.PurchaseButton{
					width:100px;
					align-self: center;
				}
				.MoneyInfomation{
					display: flex;
					flex-direction: row;
					justify-content:space-around;
				}
			`}</style>
		</div>
	)
}
