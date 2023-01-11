import { SetStateAction, useEffect, useState } from 'react';
import Pagination from "../../component/pagination";
import * as productService from '../../service/productService';
import { Product } from '../../types/product/product';
import { ProductRequest } from '../../types/product/productRequest';

// ページネーション検証用ページ　その３
// コンポーネント化したページネーションを呼び出す
// SpringBootのRestApiを呼び出して使えるか確認する。

export default function PaginationCheckThird() {
	const [pageNo,setPageNo] =  useState<number>(1)
	const [pagingProduct, setPagingProduct] = useState<ProductRequest | undefined>()
	const totalPage :  number = 4;
	const pageSize : number = 10;
	let tempPageNo : number = 1;

	//  pageNo変更後にRestApiを呼ぶ関数が実行される
	useEffect(() =>{
		getProductByCategory()
	} ,[pageNo])
	
	// 
	const getProductByCategory =() =>{
		console.log(`pageNo  ${pageNo} .Rest api is executed.`)
		productService.getProductsByCategoryId(pageNo-1,pageSize,1)
		.then((response: { data: SetStateAction<ProductRequest | undefined>; })=>{
			setPagingProduct(response.data)
			console.log(pagingProduct)	
	  })}		
	return(
		<>
			コンポーネント化したページネーションの検証ページ　
			RESTAPIを使う		
				{
			pagingProduct?.content.map((product: Product) => {
				return (
					<div key={product.id}>
						{product.name} ,{Math.floor(product.price * (1 + product.taxRate))} 円
					</div>
				)
			})
			}
			
			
			<Pagination totalPage={pagingProduct?.totalPages} pageNo={pageNo} setPageNo={setPageNo}/>
		</>
	)
}