


export default function cartMainItem(props:{totalCost:number,productsCost:number,shippingCost:number,taxCost:number}) {
	return (
		<div className="Layout">		
			<div className="Title">買い物カゴの中身</div>
			<button className="PurchaseButton">決済へ</button>
			<div className="MoneyInfomation">
				<div>合計額:</div>
				<div>{props.totalCost}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>商品小計:</div>
				<div>{props.productsCost}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>配送料:</div>
				<div>{props.shippingCost}円</div>
			</div>
			<div className="MoneyInfomation">
				<div>消費税:</div>
				<div>{props.taxCost}円</div>
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
