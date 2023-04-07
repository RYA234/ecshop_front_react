import Image from 'next/image';
import { useContext, useState,useEffect } from 'react';
import { mainContext } from '../../pages/mainPage';
import * as CartItemService2 from "../../service/cartItemServiceV2";
import { CartItemResponse } from '../../types/cartItem/cartItemResponse';
import { ProductResponse } from '../../types/product/productResponse';
import * as productServiceV2 from '../../service/productServiceV2';

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
			<div className = 'Layout'>
				
				<div className ="Image">
					<Image   src={props.imageURL}
					width={160}
					height={150}
					alt='logo' />
				</div>
				<div className="ProductName">{props.productName}</div>
				<div className='WithoutTax'>{`税抜` + props.priceWithoutTax  +`円`}</div>
				<div className="Amount">数量</div>
		
				<select className="Selector" value={tempNum} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>onChangeHandler(e)}>
					<option value={tempNum}>{tempNum}</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				
			
				<div className="WithTax">{`税込` + props.priceIncludingTax  +`円`}</div>
				<button onClick={addProductHandler}  className="Button">カートに入れる</button>
				
			</div>

			<style jsx>{`				
				// 大枠の空白部分を担当
				.Layout{
					position: relative;
					width: 200px;
					height: 258px;	
					border: 1px solid #000000;				
				}
				.Selector{
					box-sizing: border-box;

					position: absolute;
					// width: 23px;
					// height: 19px;
					left: 129px;
					top: 200px;
					border-radius: 5px;					
					background:white;
					border: 1px solid #000000;
				}
				.Amount{
					position: absolute;
					width: 24px;
					height: 15px;
					left: 96px;
					top: 202px;
					
					font-family: 'Inter';
					font-style: normal;
					font-weight: 100;
					font-size: 12px;
					line-height: 15px;
					/* ボックスの高さと同一 */
					
					
					color: #000000;					
				}
				.ButtonText{

				}

				.Button{
					box-sizing: border-box;

					position: absolute;
					width: 87px;
					height: 20px;
					left: 100px;
					top: 226px;
					
					background: #EC7777;
					border: 1px solid #000000;
					border-radius: 4px;
					color:white;
					font-size:8px;
				}
				.WithTax{
					position: absolute;
					// width: 67px;
					height: 15px;
					left: 21px;
					top: 222px;
					
					font-family: 'Inter';
					font-style: normal;
					font-weight: 100;
					font-size: 12px;
					line-height: 15px;
					/* ボックスの高さと同一 */
					
					
					color:red;
				}
				.WithoutTax{
					position: absolute;
					// width: 54px;
					height: 15px;
					left: 21px;
					top: 202px;
					
					font-family: 'Inter';
					font-style: normal;
					font-weight: 100;
					font-size: 12px;
					line-height: 15px;
					/* ボックスの高さと同一 */
					
					
					color: #000000;
				}
				.ProductName{
					/* Name */


					position: absolute;
					width: 158px;
					height: 30px;
					left: 21px;
					top: 163px;
					
					font-family: 'Inter';
					font-style: normal;
					font-weight: 100;
					font-size: 12px;
					line-height: 15px;
					
					color: #000000;
				}
				.Image{
					position: relative;;
					left: 25px;
					top: 13px;
				}
				
			`}</style>	
		</>
	)
}
