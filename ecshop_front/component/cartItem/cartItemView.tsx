import { CartItemResponse } from '../../types/cartItem/cartItemResponse';
import { useContext } from 'react';
import { mainContext } from '../../pages/mainPage';
import CartMainItemV3 from "./cartMainItemV3";
import CartSubItemV3 from './cartSubItemV3';
import { CartItemDto } from "../../types/cartItem/cartItemDto";
// import { CartItemDto } from '../../../types/cartItem/cartItemDto';

// 買い物カゴの金額情報と買い物カゴに入れた商品情報たちを束ねてるコンポーネント
export default function CartItemView(){
// carItemのResponse　Contextで子コンポーネントに渡す
  const {cartItemsResponse} : any =useContext(mainContext);
  console.log(+ cartItemsResponse)
// 新しい商品を買い物カゴに追加する
  return (
    <div>
      {/* MainItemsの実装 金額関係 */}
      {(cartItemsResponse == null) ? 
    <div></div>:  <CartMainItemV3 />
    }
        {/* <CartMainItemV3 /> */}
      {/* SubItemsの実装 買い物カゴにいれた商品 */}
      {cartItemsResponse?.cartItemDtos.map((cartItemDtos:CartItemDto, index:number) => {
        return (
			<>
            	<CartSubItemV3 index={index} />  
			</>
		);
      })}
    </div>
  );
}    
