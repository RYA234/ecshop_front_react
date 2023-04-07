import { createContext, useEffect, useState } from 'react';
import Header from '../component/header';
import { CartItemResponse } from '../types/cartItem/cartItemResponse';
import { Category } from '../types/category/category';
import { ProductResponse } from '../types/product/productResponse';
import * as CategoryService from "../service/categoryService";
import CategoryMenu from '../component/categoryMenu';
import * as productServiceV2 from '../service/productServiceV2';
import ProductView from '../component/product/productView';
import * as CartItemService2 from "../service/cartItemServiceV2";
import CartItemView from '../component/cartItem/cartItemView';
import Footer from '../component/footer/footer';

// contextの作成
export const mainContext  = createContext(0);
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function MainPage() {

	  // 商品情報のhttpレスポンス
	  const [productResponse, setProductResponse] = useState<ProductResponse>();
	  // 買い物カゴ情報のhttpレスポンス
	  const [cartItemsResponse, setCartItemsResponse] = useState<CartItemResponse>();
	  // カテゴリー情報のhttpレスポンス
	  const [categoryResponse,setCategoryResponse] = useState<Category[]>([]);
	  const[categoryId,setCategoryId] = useState<number>(1);	 
	  const [pageNo,setPageNo] = useState<number>(1)
	  const [isLogin,setIsLogin] = useState<boolean>(false)
	
	  // １ページあたりの商品数
	  const pageSize : number = 10;
	
	  // 初回実行される関数
	  useEffect(() => {
		init();
			},[]);

	  useEffect(()=>{
		getCustomerInformationFromJwtAccessKey();
	  },[isLogin])
	const changeLogins = async () =>{	
	}
	// ローカルストレージのaccessTokenに値が存在する場合ログイン判定をする。
	const getCustomerInformationFromJwtAccessKey = async () => {
		if(localStorage.getItem('accessToken') != null && localStorage.getItem('accessToken') != 'AxiosError: Network Error'){
			let response = await CartItemService2.getCartItems2(
				localStorage.getItem('accessToken') as string
			).then((response) => {
				setCartItemsResponse(response)
				setIsLogin(true)
				console.log(response)})
			
		}else{
			setIsLogin(false);
			setCartItemsResponse(undefined);
		}
	}
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

	const getCartItem = async () => {
		let response: CartItemResponse = await CartItemService2.getCartItems2(
		  localStorage.getItem("accessToken") as unknown as string
		);
		setCartItemsResponse(response);
		console.log(response);
	  };
	console.log(process.env.TEST);
	return (
		<div className = 'headCenterFooter'>
			<header>	
				<mainContext.Provider value={{isLogin,setIsLogin}}>
				<Header/>
				</mainContext.Provider>
			</header>
		
			<div className='leftCenterRightInMain'>
				<div className="left">
				<mainContext.Provider value={{ categoryResponse,setCategoryId}}>
					<CategoryMenu/>
				</mainContext.Provider>
			</div>
			<div className='center'>
				<mainContext.Provider value={{ productResponse, setProductResponse,setCartItemsResponse,categoryId }}>
					<ProductView />
				</mainContext.Provider>
			</div>

				<div className="right">
					右側
					{(cartItemsResponse == undefined) ? <div></div>
					:
					<mainContext.Provider value={{ cartItemsResponse, setCartItemsResponse }}>
						<CartItemView />
					</mainContext.Provider>
					}
				</div>
			</div>

			<footer><Footer/></footer>
		
			<style jsx>{`
				.headCenterFooter{
					display: flex;
					flex-direction: column;		
					margin: 0;
					min-height: 100vh;							
				}

				header{
					width: 100%;
					height: 120px;
					color:black;
					background:yellow;
					z-index: 100;
				}
				Footer{
					width: 1440px;
					height: 178px;
					left: calc(50% - 1440px/2);
					border: 1px solid #1BE1B2;
				}
				main{
					flex: 1;
					background:white;
				}
				.leftCenterRightInMain{
					display: flex;
					flex:1
				}
				.left{
					color:rainbow;
					background:white;
					width:160px;
				}
				.center{
					flex:3;
					background:white;
				}
				.right{
					background:white;
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
