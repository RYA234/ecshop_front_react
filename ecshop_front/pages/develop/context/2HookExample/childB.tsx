import { useContext } from "react"
import { UserCount } from "."

export default function cartItemSubCheck(){
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const{count ,setCount} : any = useContext(UserCount)
	return(
		<div>
			<p>{count}</p>
			<button onClick={()=>setCount(count+1)}>カウントアップ</button>
		</div>
	)

}