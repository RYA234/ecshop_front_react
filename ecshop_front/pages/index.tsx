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
		<div>
			<header>ヘッダー </header>
			<main>
				<div>
					<div className="left">
						左側

					</div>


					<div className='center'>
						{/* <Left left={0} top={100} color='yellow' bgColor='gray' width={200} height={1000} /> */}
						{/* <Center left={212} top={95} color='black' bgColor='rgba(252, 154, 154, 0.39)' width={1150} height={862} /> */}
						{/* <Right left={1370} top={100} color='black' bgColor='yellow' width={300} height={1000} /> */}
						センター
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


						終わり
					</div>

					<div className="right">
						右側

					</div>
				</div>

			</main>
			<footer>フッター</footer>

			{/* Number型は{}で囲みString型は''で囲む下参照 */}
			{/* <Footer left={0} top={957} color='yellow' bgColor='gray' width={1440} height={59} /> */}

			<style jsx>{`
				header{
					position:sticky;
					top: 0;
					left: 0;
					//width: 100%;
					height: 120px;
					color:black;
					background:yellow;
				}
				footer{
					color:yellow;
					background:purple;
					height:80px;
					bottom:0;
					position:absolute;
					width:100%;
				}
				main{
					flex-grow: 1;
					background:pink;
				}
				.leftCenterRightInMain{
					display: flex;
					flex-direction: row;
				}
				.left{
					flex:1;
					color:rainbow;
					background:pink;
				}
				.center{
					flex:3;
					background:white;
				}
				.right{
					flex:1;
					background:red;
				}
			`}</style>
		</div>
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
