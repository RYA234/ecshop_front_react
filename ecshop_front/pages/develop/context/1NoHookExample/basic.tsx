import { createContext, useState } from "react";
import Child from "./child";

// Contextの一番簡単な例
// stringの配列をcontextとする
// コンテキストの追加、削除を確認する。console.logで確認。（html上では確認しない）
// http://127.0.0.1:3000/develop/context/1NoHookExample/basic
export default function Basic(){

	const [fruits, setFruits] = useState(['Apple', 'Orange', 'Banana']);
	const addFruit = () => {
		fruits.push("Grape")
		console.log(fruits)

	}
	const deleteFruit = () => {
		fruits.pop()
		console.log(fruits)
	}
	return(
		<FruitContext.Provider value={ fruits }>
			<Child/>
			<button onClick={addFruit}>追加</button>
			<button onClick={deleteFruit}>削除</button>

		</FruitContext.Provider>
	)
}

const fruits = ['Apple', 'Orange', 'Banana'];
export const FruitContext = createContext(fruits);

