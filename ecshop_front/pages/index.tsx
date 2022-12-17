import { useEffect, useState } from 'react';
import Footer from '../component/footer'
import Header from '../component/header'



export default function Home() {
	ApiFetch();
	return (
		<>
			<Header left={0} top={0} color='yellow' bgColor='green' width={1440} height={95} />

			<Header left={0} top={95} color='yellow' bgColor='yellow' width={212} height={870} />
			
			{/* Number型は{}で囲みString型は''で囲む下参照 */}
			<Footer left={0} top={957} color='yellow' bgColor='blue' width={1440} height={59} />
		
		</>
	)
};


export const ApiFetch = () => {
	const [stones, setStone] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("http://localhost:5000/api/products", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
	}, []);
}
