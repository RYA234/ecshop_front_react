import { createContext, useState } from 'react';
import ChildB from './childB';

export const UserCount = createContext(null);
// http://127.0.0.1:3000/develop/context/2HookExample
// HookとContextを組み合わせた例
// 子コンポーネントのボタンを押すと、親コンポーネントのStateが変化し、子コンポーネントの表示も変更する。
export default function index(){
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [count,setCount] = useState<number>(100)
	const value ={
		count,
		setCount
	}

	return(
		<>
		<UserCount.Provider value ={value as any}>
			<ChildB/>
			
		</UserCount.Provider>
		
		</>
	)
}