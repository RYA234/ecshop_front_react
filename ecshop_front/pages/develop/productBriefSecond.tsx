import ProductContent from "../../component/productContent"

/**
 * @remarks ProductContentのレイアウトを確認するためのページ
 * @returns 
 * 
 */
export default function ProductBriefSecond(){

	return(
		<>
			<ProductContent productName='サンプル商品' priceWithoutTax={100} priceIncludingTax={108} imageURL='/sampleProduct1.JPG'/>
		</>
	)

}