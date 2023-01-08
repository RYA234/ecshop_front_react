import Image from 'next/image';


export default function productBrief(){
	// レイアウト（css分野）検証用のため　全て固定値
	const productName : string = 'サンプル商品'
	const priceWithoutTax : number = 100;
	const priceIncludingTax : number = 108;
	const imageURL : string = '/sampleProduct1.JPG'; 

	return(
		<>
			<div className = 'ContentPadding ContentLayout'>
				<Image src={imageURL}
				width={160}
				height={150}
				alt='logo' />
				<div>{productName}</div>
				<div className='PriceWithoutTaxAndQuantityLayout'>
					<div>{`税抜` + priceWithoutTax  +`円`}</div>
					<div>数量</div>
				</div>
				<div className='PriceIncludingTaxAndBuyButtonLayout'>
				<div>{`税込` + priceIncludingTax  +`円`}</div>
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
				}
				// 税抜き価格と数量のレイアウト（横並び）
				.PriceWithoutTaxAndQuantityLayout{
					display:flex;
					justify-content:space-between;
				}
				// 税込み価格と購入ボタンのレイアウト（横並び）
				.PriceIncludingTaxAndBuyButtonLayout{
					display:flex;
					justify-content:space-between;
				}
			`}</style>	
		</>
	)
}