import { ProductResponse } from '../../types/product/productResponse';
import { createContext, SetStateAction, useContext, useEffect, useState } from 'react';
import { mainContext } from '../../pages/index';
import * as productServiceV2 from '../../service/productServiceV2';
import { Product } from '../../types/product/product';
import ProductContentV2 from './productContentV2';
import PaginationV2 from './paginationV2';


export default function ProductView(){
	// 商品情報のhttpレスポンス
	const {productResponse,setProductResponse,categoryId}:any = useContext(mainContext)
	// ページ番号
	const [pageNo,setPageNo] = useState<number>(1)
	
	// １ページあたりの商品数
	const pageSize : number = 10;
	
-	// 検証のためにカテゴリーIDを1に固定
-	// const categoryId : number = 1;
	
	// pageNoが変わるとgetProductByCategoryが実行される
	useEffect(() => {
		getProductByCategory()
	},[pageNo])
	
	// categoryIdが変わるとgetProductByCategoryが実行されてpageNoを1に戻す。
	useEffect(() => {
		getProductOnChangeCategory()
	},[categoryId])
	

	// ページネーション化されたカテゴリー毎の商品情報たちを取得する。
	const getProductByCategory = async () => {
		const response : ProductResponse= await productServiceV2.getProductsByCategoryId2(pageNo - 1,pageSize,categoryId)
		await setProductResponse(response)
	}

	const getProductOnChangeCategory = async () => {
		const response : ProductResponse= await productServiceV2.getProductsByCategoryId2(0,pageSize,categoryId)
		await setPageNo(1);
		await setProductResponse(response)
	}
	return(
		<>
			<div className="Layout">
			{
				productResponse?.content.map((product: Product,index:number)=>{
					return(
						<div className="Child" key={index}>
								<ProductContentV2 productName={productResponse.content[index].name} priceWithoutTax={productResponse.content[index].price} priceIncludingTax={(productResponse.content[index].price * (1 + productResponse.content[index].taxRate)).toFixed() as string} imageURL={'/sampleProduct1.JPG'} id={productResponse.content[index].id}/>
						</div>
					)			
				})
			}
			</div>
			<div className="PaginationPosition">
			      	<PaginationV2 totalPage={productResponse?.totalPages as number} pageNo={pageNo} setPageNo={setPageNo}/>
			</div>
		<style jsx>{`				
				// 大枠
				.Layout{
					display:flex;
					flex-wrap:wrap;					
					background-color:white;
				}
				// 子の幅を指定 これしないとレイアウトが崩れる
				.Child{
					flex-basis:200px;
					//align-self:stretch;
				}
				.PaginationPosition{
					margin:auto;
					width:50%
				}
			`}</style>		
		</>
	)
}