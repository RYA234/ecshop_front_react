import { createContext, useEffect, useState } from 'react';
import Header from '../component/header';
import { CartItemResponse } from '../types/cartItem/cartItemResponse';
import { Category } from '../types/category/category';
import { ProductResponse } from '../types/product/productResponse';
import * as CategoryService from "../service/categoryService";
import CategoryMenu from '../component/categoryMenu';
import * as productServiceV2 from '../service/productServiceV2';
import ProductView from '../component/product/productView';
// contextの作成
export const mainContext  = createContext(0);
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {

	

	  // 商品情報のhttpレスポンス
	  const [productResponse, setProductResponse] = useState<ProductResponse>();
	  // 買い物カゴ情報のhttpレスポンス
	  const [cartItemsResponse, setCartItemsResponse] = useState<CartItemResponse>();
	  // カテゴリー情報のhttpレスポンス
	  const [categoryResponse,setCategoryResponse] = useState<Category[]>([]);
	  const[categoryId,setCategoryId] = useState<number>(1);
	  const [pageNo,setPageNo] = useState<number>(1)
	  
	  // １ページあたりの商品数
	  const pageSize : number = 10;

	  // 初回実行される関数
	  useEffect(() => {
		init();
			},[]);

	// pageNoが変わるとgetProductByCategoryが実行される
	
	const init = async ()=>{
		await getCategory();
		await getProductByCategory();
	}


	  
  // カテゴリーの情報を取得する
    const getCategory = async () => {
		const response = await CategoryService.getCategories();
		await setCategoryResponse(response);
		// console.log(response);
	  }

   // 商品情報を取得する。
	  const getProductByCategory = async () => {
		const response : ProductResponse= await productServiceV2.getProductsByCategoryId2(pageNo - 1,pageSize,categoryId)
		await setProductResponse(response)
		console.log(response)
	}

	return (

		<div className = 'headCenterFooter'>
			<header>
				<Header/>

			</header>
			<main>
				<div className='leftCenterRightInMain'>
					<div className="left">
						左側
						
					<mainContext.Provider value={{ categoryResponse,setCategoryId}}>
						<CategoryMenu/>
					</mainContext.Provider>
					</div>
					<div className='center'>
					<mainContext.Provider value={{ productResponse, setProductResponse,setCartItemsResponse,categoryId }}>
						<ProductView />
					</mainContext.Provider>

						センター
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						終わり
					</div>

					<div className="right">
						右側
					</div>
				</div>
			</main>
			<footer>フッター</footer>
			<style jsx>{`
				.headCenterFooter{
					display: flex;
					flex-direction: column;				
				}

				header{
					position:sticky;
					top: 0;
					left: 0;
					width: 100%;
					height: 120px;
					color:black;
					background:yellow;
				}
				footer{
					color:yellow;
					background:purple;
					height:100px;
					bottom:0;
					width:100%;
				}
				main{
					flex-grow: 1;
					background:pink;
				}
				.leftCenterRightInMain{
					display: flex;
					flex-direction: row;
				}
				.left{
					flex:1;
					color:rainbow;
					background:pink;
				}
				.center{
					flex:3;
					background:white;
				}
				.right{
					flex:1;
					background:red;
				}

				.PaginationPosition{
					margin:auto;
					width:50%
				}
			`}</style>
		</div>
	)
};
// restapi 検証用の関数。
export const ApiFetch = () => {
	const [stones, setStone] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:5000/api/products", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
	}, []);
}
