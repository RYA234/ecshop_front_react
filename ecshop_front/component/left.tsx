import test from "node:test";
import { useEffect, useState } from "react";

// todo リファクタリング必要


// 　　左サブメニューのコンポーネント
export default function Left(this: any, { left, top, color, bgColor, height, width }: any) {
	const [categories, setCategories] = useState([])


	useEffect(() => {
		// fetch("http://localhost:5000/api/category/all", { method: "GET" })
		fetch("http://my-json-server.typicode.com/RYA234/ecshop_front_react/categories", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			.then(data => {
				setCategories(data);
				//console.log(data);
			})
	}, [])


	return (
		<div>
			カテゴリー覧
			<nav>
			<ul>
				{
					categories.map(category => {
						if (category.parent == null)
							return (
								// eslint-disable-next-line react/jsx-key
								<li className='mainMenu'>
									<a href="#">{category.name}</a>					
									{/* <div id={category.name}  className='subMenu'> */}
									<ul>
										{
											 category.children.map(small => {
												const  title  = categories.at(parseInt(small)).name;
												//console.log(title);
												return(
													// <div>{child}</div>
													// eslint-disable-next-line react/jsx-key
													<li><a href="uhii">{title}<br/></a></li>			
												)
											 })
										}
									</ul>
									
								</li>
							);
					})
				}
			</ul>
			</nav>
			<>

			</>
			<style jsx>{`	
				nav ul{		
					visibility: visible;
					list-style: none;
				}
				nav ui li{
					position: relative;
				}
				nav ul li ul{
					position:absolute;
					z-index:6;
					visibility: hidden;
					 list-style: none;
					padding: 0px;
					top:130px;
					width:180px;
				}
				
				nav li.mainMenu ul
				{
					position: absolute;
					left:100%;
					top:10px;
					z-index: 6;
					width:180px;
					  /*はじめは非表示*/
					visibility: hidden;
				}

				nav  li.mainMenu:hover > ul,
				nav  li.mainMenu ul li:hover > ul,
				nav  li.mainMenu ul li:active > ul,
				nav  li.mainMenu:active > ul
				{
					position:absolute;
					 z-index:6;
					visibility: visible;
					list-style: none;
					padding: 20px;
				    margin: 20px 10px 100px 0px;
					top:100px;
					//　leftの自動調整方法　このやり方だと、サブメニューの幅が変わるとずれる　
				    left:10%;
					width:180px;					
				}
			`}</style>
		</div>
	)
}


