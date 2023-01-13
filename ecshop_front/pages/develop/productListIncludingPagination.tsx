import { SetStateAction, useEffect, useState } from "react";
import ProductContent from "../../component/productContent"
import { ProductRequest } from "../../types/product/productRequest";
import * as productService from '../../service/productService';
import { Product } from "../../types/product/product";
import Pagination from "../../component/pagination";


// 商品一覧機能検証ページその3（ページング機能あり）
// 商品コンポーネント使う
// restapiを使う
// ページネーション機能を新規追加する
export default function ProductListIncludingPagination(){

	const [pagingProduct, setPagingProduct] = useState<ProductRequest | undefined>()
	const [pageNo, setPageNo] = useState<number>(1);
	const productsContents : JSX.Element[] = [];
	const pageSize : number = 10;
	const categoryId : number = 1;

	// pageNoが変更後にデータベースから対応するページの情報を再取得する
	useEffect(() => {
		getProductByCategory()
	},[pageNo])

	// api
	const getProductByCategory = async () => {
		productService
		.getProductsByCategoryId(pageNo - 1,pageSize,categoryId)
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
			<div>総ページ数{pagingProduct?.totalPages}</div>
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
			<Pagination totalPage={pagingProduct?.totalPages as number} pageNo={pageNo} setPageNo={setPageNo}/>
			<style jsx>{`				
				// 大枠
				.Layout{
					display:flex;
					flex-wrap:wrap;					
					background-color:white;
				}
				// 子の幅を指定　これしないとレイアウトが崩れる
				.Child{
					flex-basis:200px;
					//align-self:stretch;
				}
			`}</style>			
		</>
	)
}