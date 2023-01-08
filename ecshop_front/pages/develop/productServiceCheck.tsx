import { SetStateAction, useEffect, useState } from 'react';
import * as productService from '../../service/productService';
import { Product } from '../../types/product/product';
import { ProductRequest } from '../../types/product/productRequest';
import { getProductsByCategoryId } from '../../service/productService';

/**
 * 
 * @remarks productService 検証用サービス
 *  @returns 
 * 
 */
export default function productServiceCheck(){
	
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [product,setProduct] = useState<Product>()
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [pagingProduct, setPagingProduct] = useState<ProductRequest | undefined>()
	
	// 初回実行時のみApiを読み込む
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
	getProdcut()
	}, [])

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		getProductByCategory()
		}, [])
	
	const getProdcut = async () => {
	productService
	.getProductById(1)
	.then((response: { data: SetStateAction<Product | undefined>; })=>{
		setProduct(response.data)		
	})
	}
	
	


	const getProductByCategory = async () => {
		productService
		.getProductsByCategoryId(2,4,1)
		.then((response: { data: SetStateAction<ProductRequest | undefined>; })=>{
			  setPagingProduct(response.data)
			  console.log(pagingProduct)	
		})}


return(
	<>
		<h1>getProductById</h1>
		{product?.name}

		<h1>getProductByCategory</h1>
		<div>pageNo: { pagingProduct?.pageNo } </div>		
		<div>pageSize: {pagingProduct?.pageSize } </div>
		<div>totalElement: {pagingProduct?.totalElements } </div>
		<div>category: {pagingProduct?.categoryName } </div>
		<br/>
		{
		pagingProduct?.content.map((product: Product) => {
			return (
				<div key={product.id}>
					{product.name}
				</div>
			)
		})
		}

	</>	
)


}