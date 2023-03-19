import Image from 'next/image';
import { useContext, useState,useEffect } from 'react';
import { mainContext } from '.';
import * as CartItemService2 from "../../../service/cartItemServiceV2";
import { CartItemResponse } from '../../../types/cartItem/cartItemResponse';
import { ProductResponse } from '../../../types/product/productResponse';
import * as productServiceV2 from '../../../service/productServiceV2';

interface Props{
	id:number;
	productName:string;
	priceWithoutTax:number;
	priceIncludingTax:string;
	imageURL:string;
}
/**
 * 
 * @param props 商品情報 
 * @returns 商品情報を表示するコンポーネント
 */

export default function ProductContentV2(props : Props){
	// 個数のプルダウンメニューの値
	const[tempNum,setTempNum] = useState<number>(1);
	// 買い物カゴ情報をAPIから取得した後、値をを更新するため利用
	const {setCartItemsResponse}: any = useContext(mainContext);
	//　商品情報の取得に利用
	const {productResponse}:any = useContext(mainContext)
	
	// 商品情報を再取得したときに個数の値を１にする
	useEffect(()=>{
		setTempNum(1)
	},[productResponse])

	// 購入ボタンを押したとき、買い物かごに商品を追加して、買い物かご情報を取得する。
	const addProductHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
		await addCartItem();
		await getCartItem();
	}

	// 個数のプルダウンリストを変更したときに実行される。”一時的”に値を収納する
	const onChangeHandler = async(e: React.ChangeEvent<HTMLSelectElement>) => {
		await setTempNum(Number(e.target.value))
	}
  // 新しい商品を買い物カゴに追加する
  const addCartItem = async () => {
    const response = await CartItemService2.addProductCart2(
		props.id,tempNum,
      localStorage.getItem("accessToken") as unknown as string
    );
  };

  // ユーザーの買い物カゴ情報を取得する
  const getCartItem = async () => {
    let response: CartItemResponse = await CartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
	 setCartItemsResponse(response);
  };

	return(
		<>
			<div className = 'ContentPadding ContentLayout'>
				<Image src={props.imageURL}
				width={160}
				height={150}
				alt='logo' />
				<div>{props.productName}</div>
				<div className='PriceWithoutTaxAndQuantityLayout'>
					<div>{`税抜` + props.priceWithoutTax  +`円`}</div>
					<div>数量</div>
					<div>
						<select value={tempNum} onChange={(e: React.FormEvent<HTMLSelectElement>)=>onChangeHandler(e)}>
							<option value={tempNum}>{tempNum}</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className='PriceIncludingTaxAndBuyButtonLayout'>
				<div>{`税込` + props.priceIncludingTax  +`円`}</div>
				<button onClick={addProductHandler} >購入</button>
				</div>
			</div>

			<style jsx>{`				
				// 大枠の空白部分を担当
				.ContentPadding{
					padding: 20px;
					border:1px solid black;
				}
				// 大枠のレイアウト（縦並び）		
				.ContentLayout{
					position:relative;
					flex:1;
					width:200px;
					height:350px;
				}
				// 税抜き価格と数量のレイアウト（横並び-等間隔）
				.PriceWithoutTaxAndQuantityLayout{
					display:flex;
					justify-content:space-between;
				}
				// 税込み価格と購入ボタンのレイアウト（横並び-等間隔）
				.PriceIncludingTaxAndBuyButtonLayout{
					display:flex;
					justify-content:space-between;
				}
			`}</style>	
		</>
	)
}

