import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
	// ApiFetch();
	return (

		<div className = 'headCenterFooter'>
			<header>ヘッダー </header>
			<main>
				<div className='leftCenterRightInMain'>
					<div className="left">
						左側
					</div>
					<div className='center'>
						センター
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
						終わり
					</div>

					<div className="right">
						右側
					</div>
				</div>
			</main>
			<footer>フッター</footer>
			<style jsx>{`
				.headCenterFooter{
					display: flex;
					flex-direction: column;				
				}

				header{
					position:sticky;
					top: 0;
					left: 0;
					width: 100%;
					height: 120px;
					color:black;
					background:yellow;
				}
				footer{
					color:yellow;
					background:purple;
					height:100px;
					bottom:0;
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
