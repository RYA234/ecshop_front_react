import Image from 'next/image';

interface Props{
	productName:string;
	priceWithoutTax:number;
	priceIncludingTax:number;
	imageURL:string;
}
/**
 * 
 * @param props 商品情報 
 * @returns 商品情報を表示するコンポーネント
 */
export default function ProductContent(props : Props){

	return(
		<>
			<div className = 'ContentPadding ContentLayout'>
				<Image src={props.imageURL}
				width={160}
				height={150}
				alt='logo' />
				<div>{props.productName}</div>
				<div className='PriceWithoutTaxAndQuantityLayout'>
					<div>{`税抜` + props.priceWithoutTax  +`円`}</div>
					<div>数量</div>
					<div><select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className='PriceIncludingTaxAndBuyButtonLayout'>
				<div>{`税込` + props.priceIncludingTax  +`円`}</div>
				<button >購入</button>
				</div>
			</div>

			<style jsx>{`				
				// 大枠の空白部分を担当
				.ContentPadding{
					padding: 20px;
					border:1px solid black;
				}
				// 大枠のレイアウト（縦並び）		
				.ContentLayout{
					position:relative;
					flex:1;
					width:200px;
					height:350px;
				}
				// 税抜き価格と数量のレイアウト（横並び-等間隔）
				.PriceWithoutTaxAndQuantityLayout{
					display:flex;
					justify-content:space-between;
				}
				// 税込み価格と購入ボタンのレイアウト（横並び-等間隔）
				.PriceIncludingTaxAndBuyButtonLayout{
					display:flex;
					justify-content:space-between;
				}
			`}</style>	
		</>
	)
}