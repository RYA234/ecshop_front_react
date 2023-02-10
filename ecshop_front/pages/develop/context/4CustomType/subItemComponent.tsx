import { useContext } from "react"
import { SubItemContext } from "."
import { SubItem } from "./subItem"

export default function SubItemComponent() {
	const {subItems,setSubItems,index} = useContext(SubItemContext)	

	// amountを+1する
	const addHandler = () => {
		setSubItems(subItems.map((subItem:SubItem,i:number) => i === index ?
		// amountだけ更新したら、他の要素が消えるので全部（id,name,price）更新する必要あり
		 {id:subItem.id,amount:subItem.amount + 1,name:subItem.name,price:subItem.price} : subItem)
	)}


	// 子コンポーネントの存在を削除する
	const deleteHandler = ()=>{
		setSubItems(subItems.filter((subItem:SubItem,i:number) => i !== index))
	}
	return(
		<div className="Layout">
			<div className="SubLayout">
				<div>ID：{subItems[index].id}</div>
				<div>名前：{subItems[index].name}</div>
			</div>
			<div className="SubLayout">
				<div>値段：{subItems[index].price}</div>
				<div>個数：{subItems[index].amount}</div>
			</div>
			<div className="SubLayout">
				<button onClick={addHandler}>追加</button>
				<button onClick={deleteHandler}>削除</button>
			</div>
			<style jsx>{`				
				// 枠線-要素を縦方向に配置
				.Layout{
					display:flex;
					flex-direction:column;
					border:1px solid black;
					width:200px;
				}
				//要素を横方向に配置
				.SubLayout{
					display:flex;
					flex-direction:row;
				}
			`}</style>	

		</div>
	)

}