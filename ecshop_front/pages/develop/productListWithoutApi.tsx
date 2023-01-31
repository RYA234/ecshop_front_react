import { SetStateAction, useEffect, useState } from "react";
import ProductContent from "../../component/productContent"
import { ProductRequest } from "../../types/product/productRequest";
import * as productService from '../../service/productService';
import { Product } from "../../types/product/product";


export default function ProductListWithoutApi(){

	const [pagingProduct, setPagingProduct] = useState<ProductRequest | undefined>()
	const productsContents : JSX.Element[] = [];
	// 初回実行
	useEffect(() => {
		getProductByCategory()
		}, [])

	const getProductByCategory = async () => {
		productService
		.getProductsByCategoryId(2,4,1)
		.then((response: { data: SetStateAction<ProductRequest | undefined>; })=>{
				setPagingProduct(response.data)
				console.log(pagingProduct)	
		})
	}
	 
	pagingProduct?.content.map((product : Product) => {
		productsContents.push(<ProductContent  productName={product.name} priceWithoutTax={product.price} priceIncludingTax={((product.price*(1+product.taxRate)).toFixed()) as string} imageURL='/sampleProduct1.JPG'/>)	
	})
	return(
		<>
			<div>商品一覧</div>
			<div>{pagingProduct?.categoryName}</div>
			<div>{pagingProduct?.pageNo}</div>
			<div className='Layout'>
				{
					productsContents.map((content, index) => {
						return(
							<div className="Child" key={index}>
								{content}
							</div>
						)
					})
				}
			</div>
			<style jsx>{`				
				// 大枠
				.Layout{
					display:flex;
					flex-wrap:wrap;					
					background-color:gray;
					align-items:flex-end;
				}
				//　子の幅を指定
				.Child{
					flex-basis:200px;
				}
			`}</style>			
		</>
	)
}