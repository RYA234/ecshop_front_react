import { Product } from '../../types/product/product';
import React, { useState } from 'react';

interface cartSubItemProps{
	productName:string;
	priceWithoutTax:number;
	priceIncludingTax:number;
	amount:number;
}

export const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	console.log("delete")
}

export const onAmountChangeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	console.log("modify");
}



export default function cartSubItem({productName,priceWithoutTax,priceIncludingTax, amount,onAmountChange}:cartSubItemProps) {
// export default function cartSubItem(props:{productName:string,priceWithoutTax:number,priceIncludingTax:number, amount:number}) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [clickedButton, setClickedButton] = useState<string>(`null`);

	// const onAmountChange = (event: React.MouseEvent<HTMLButtonElement>) => {
	//   event.preventDefault();
  
	//   const button: HTMLButtonElement = event.currentTarget;
	//   setClickedButton(button.name);
	// };
	
	return (
		<div className="Layout">
			<div>{productName}</div>		
			<div>税抜{priceWithoutTax}円</div>
			<div className="IncludingTax">税込{priceIncludingTax}円</div>
			<div className="SubLayout">
				<select>
				<option value={amount}>1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>					
				</select>
				<button className="ModifyButton" onClick={onAmountChangeHandler}>修正</button>
				<button className="DeleteButton" onClick ={onDeleteHandler}>削除</button>
			</div>
			<style jsx>{`
				.Layout{
					display: flex;
					flex-direction: column;
					width:200px;
					aligh-items: center;
				}
				.SubLayout{
					display: flex;
					flex-direction: row;
					column-gap: 10px;
				}
				.IncludingTax{
					color:red;
				}
				.ModifyButton{
					background-color: green;
					color:white;
				}
				.DeleteButton{
					background-color: red;
					color:white;
				}				
			`}</style>
		</div>
	)
}
