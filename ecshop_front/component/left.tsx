import test from "node:test";
import { useEffect, useState } from "react";

// todo リファクタリング必要

function DisplayMenu() {


	return (
		<div>

		</div>
	);

}

// apiでデータ読み込み
export default function Left(this: any, { left, top, color, bgColor, height, width }: any) {
	const [categories, setCategories] = useState([])
	const [visible, setVisible] = useState("hidden");
	useEffect(() => {
		fetch("http://localhost:5000/api/category/all", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			.then(data => {
				setCategories(data);
				console.log(data);
			})
	}, [])

	function onMouse(e){
		setVisible("visible");
	}

	function onMouseOut(e){
		setVisible("hidden");
	}

	return (
		<div>
			カテゴリー覧
			<ul>
				{
					categories.map(category => {
						if (category.parent == null)
							return (
								// eslint-disable-next-line react/jsx-key
								<li>
									<div className='mainMenu' onMouseEnter={onMouse} onMouseOut={onMouseOut} >{category.name}</div>
									<div id={category.name}  className='subMenu'>
										{
											 category.children.map(small => {
												const  title  = categories.at(parseInt(small)).name;
												console.log(title);
												return(
													// <div>{child}</div>
													// eslint-disable-next-line react/jsx-key
													<a href="uhii">{title}<br/></a>			
												)
											 })
										}
									</div>
									
								</li>
							);
					})
				}
			</ul>

			<>

			</>
			<style jsx>{`
				div{
					// position:fixed;
					// left:${left}px;
					// top:${top}px;
					// width:${width}px;
					//height:${height}px;
					// height:100%;
					// color:${color};
					// background:${bgColor};	
				}
				.mainMenu{
					left:100px;
					//position:relative;
					list-style: none;
					visibility: visible;
					margin: 8px 0 0 12px;
					
				}
				.subMenu{
					position:absolute;
					margin: -20px 0 0 90px;
					padding: 0 0 0 12px;
					z-index:4;
					visibility: ${visible};
				}
			
			`}</style>
		</div>
	)
}


