import { useEffect, useState } from "react"


export default function useStateCheck(){

	const [first,setFirst] = useState<string>()
	const [second,setSecond] = useState<string>()
	let countFirst :number = 0;
	let countSecond :number = 0;

	// useEffectで初回時実行する
	useEffect(()=>{
		thenDoFirstDoSecond(),[]
	})

	// First実行後Secondを実行する
	const thenDoFirstDoSecond = () => {
		doFirst();
		doSecond();
	}

	const doFirst = () => {
		setFirst("first is done"+countFirst)
		countFirst++
		console.log(first + "回数" + countFirst)

	}

	const doSecond = ()=>{
		setSecond("second is done"+ first as string)
		countSecond++
		console.log(second + "回数" + countSecond)
	}


	return(
		<>
		
		</>
	)

}