import test from "node:test";
import { useEffect, useState } from "react";






export default function Left({ left, top, color, bgColor, height, width }: any) {
	const [categories, setCategories] = useState([])

	useEffect(() =>{
		fetch("http://localhost:5000/api/category/all", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			.then(data =>{
				setCategories(data);
				console.log(data);
			})
		},[])
	return (
		<div>
			 {/* main description */}
			カテゴリー覧
			<ul>
				{
			categories.map(category => 
			<li key={category.id}>{category.name}</li>
			)}
			</ul>		
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
			`}</style>
		</div>
	)
}


