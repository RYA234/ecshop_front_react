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
		<div className = 'HeadCenterFooter'>
			<header>	
				<mainContext.Provider value={{isLogin,setIsLogin}}>
				<Header/>
				</mainContext.Provider>
			</header>
		
			<div className='Main'>
				<div className="Flex">
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
					{(cartItemsResponse == undefined) ? <div></div>
					:
					<mainContext.Provider value={{ cartItemsResponse, setCartItemsResponse }}>
						<CartItemView />
					</mainContext.Provider>
					}
				</div>
				
			</div>
			</div>

			<footer><Footer/></footer>
		
			<style jsx>{`
				.left{
					color:rainbow;
					background:white;
					width:160px;
				}
				.center{
					// flex:1;
					background:white;
					width:800px;
				}
				.right{
					background:white;
					flex:1
				}

				.PaginationPosition{
					margin:auto;
					width:50%
				}
				.Flex{
					display: flex;
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
