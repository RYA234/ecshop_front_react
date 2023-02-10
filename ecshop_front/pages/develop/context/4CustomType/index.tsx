import { createContext, useState } from "react"
import SubItemComponent from "./subItemComponent";
import { SubItem } from "./subItem"

export const SubItemContext = createContext();

// 型定義したStateの扱い方確認
export default function Index() {
	const[subItems, setSubItems] = useState<SubItem[]>([{id: 1, name: "subItem1",price:100,amount:1}, {id: 2, name: "subItem2",price:300,amount:1}])

	const addSubItemHandler = () => {
		setSubItems([...subItems,{id: subItems.length + 1, name: "subItem" + (subItems.length + 1),price:100,amount:1}])
	}
	let message : string = ""
	subItems.map((item: SubItem, index: number) => {
		message += item.name + " ,"
	})
	console.log(message)
	
	return(
		<>

			{subItems.map((item: SubItem, index: number) => {
				const values={subItems,setSubItems,index}
				return(
					<SubItemContext.Provider value={values} key={index}>
						<SubItemComponent />
					</SubItemContext.Provider>
				)
			})}
			<div></div>
			<button onClick={addSubItemHandler}>子コンポーネントを追加</button>
		</>
	)
}