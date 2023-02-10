
import { useContext } from "react";
import { UserCount } from ".";

// 子コンポーネント
// 親からContextを受け取っている
export default function ChildC() {
	const { counts, setCounts, index } : any= useContext(UserCount);
	
	// 子コンポーネントの存在を削除する
	const deleteHandler = () => {
		// counts.pop(index)でやるとエラーになる
		setCounts(counts.filter((count : number,i : number) => i !== index))
	}
	// count[index]を＋１するボタン
	const addHandler = () => {
		// index番目の時だけcountを追加している
		setCounts(counts.map((count : number,i : number) => i === index ? count + 1 : count))
	}

	return(
		<>
		<div>番号{counts[index]}</div>
		<button onClick={addHandler}>追加</button>
		<button onClick={deleteHandler}>削除</button>
		</>
	)
}