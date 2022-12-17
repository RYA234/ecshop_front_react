import { useEffect, useState } from 'react';
import Center from '../component/center';
import Footer from '../component/footer'
import Header from '../component/header'
import Left from '../component/left';
import Sidebar from '../component/left';
import Right from '../component/right';



export default function Home() {
	// ApiFetch();
	return (
		<>
			<Header left={0} top={0} color='yellow' bgColor='green' width={1440} height={95} />
			{/* <Sidebar  left={0} top={95} color='black' bgColor='springgreen' width={212} height={862}/> */}

			<main>
			<Left left={0} top={100} color='yellow' bgColor='gray' width={200} height={1000} />
			<Center left={212} top={95} color='black' bgColor='rgba(252, 154, 154, 0.39)' width={1150} height={862} />
			<Right left={1370} top={100} color='black' bgColor='yellow' width={300} height={1000} />
			</main>

			{/* Number型は{}で囲みString型は''で囲む下参照 */}
			{/* <Footer left={0} top={957} color='yellow' bgColor='gray' width={1440} height={59} /> */}
		
		</>
	)
};


// restapi 検証用の関数。
export const ApiFetch = () => {
	const [stones, setStone] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:5000/api/products", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
	}, []);
}
