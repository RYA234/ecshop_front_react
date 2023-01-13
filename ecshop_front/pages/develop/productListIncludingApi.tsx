import { SetStateAction, useEffect, useState } from "react";
import ProductContent from "../../component/productContent"
import { ProductRequest } from "../../types/product/productRequest";
import * as productService from '../../service/productService';
import { Product } from "../../types/product/product";


// 商品一覧機能検証ページその２（ページング機能なし）
// 商品コンポーネント使う
// restapiを使う
// ページネーション機能は使わない
export default function ProductListIncludingApi(){

	const [pagingProduct, setPagingProduct] = useState<ProductRequest | undefined>()
	const productsContents : JSX.Element[] = [];
	const pageNumber : number = 1;
	const pageSize : number = 10;
	const categoryId : number = 1;
	// 初回実行
	useEffect(() => {
		getProductByCategory()
		}, [])

	const getProductByCategory = async () => {
		productService
		.getProductsByCategoryId(pageNumber - 1,pageSize,categoryId)
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
			<div>カテゴリー：{pagingProduct?.categoryName}</div>
			<div>層ページ数{pagingProduct?.totalPages}</div>
			<div>現在のページ番号:{(pagingProduct?.pageNo as number) + 1}</div>
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
				// 子の幅を指定　これしないとレイアウトが崩れる
				.Child{
					flex-basis:200px;
				}
			`}</style>			
		</>
	)
}