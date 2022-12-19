import test from "node:test";
import { useEffect, useState } from "react";

// todo リファクタリング必要

function DisplayMenu() {


	return (
		<div>

		</div>
	);

}


export default function Left({ left, top, color, bgColor, height, width }: any) {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch("http://localhost:5000/api/category/all", { method: "GET" })
			// レスポンスのデータ形式をjsonに設定
			.then((res) => res.json())
			.then(data => {
				setCategories(data);
				console.log(data);
			})
	}, [])

	const mains = [1,2,3,4]
	const subs =[6,7]
	const mainArray: String[] = [];
	const listSub = subs.map((sub)=>
		 // eslint-disable-next-line react/jsx-key
		 <div>{sub}</div>
		)
	const listItems = mains.map((main)=>
		// eslint-disable-next-line react/jsx-key
		<ul>{main}
			<li className='a'>{listSub}</li>
			<style jsx>{`
					.a{
						left:160px;
						position:absolute;
						list-style: none;
						visibility: visible;
					}
				`}</style>
		</ul>
	);

	const list111 = categories.map((category) => {
		<div>{category.name}</div>
		if (category.parent == null) {
			 	
			<div>ddsasdafsafdadsadsas</div>
		}
	});		


	const list1112 =categories.map((category)=>{
		return(<><li key={category.id}>{category.name}</li><ul>
			{/* <SubList sub = {category} /> */}
			{/* {subList(category)} */}
		</ul></>
		)
	})

	function MainM(){
		categories.map((category)=>{
			if(category.parent == null){
			}
				return(
					<>
						aaaa
						{/* <li>{category.name}</li> */}
						{/* <ul> */}
						{/* <SubList  sub={category}/> */}
						{/* <Subaaa /> */}
						
						{/* </ul> */}
					</>
				)	
				})
	}
	function Subaaa(){
		return(
			<div>aaa</div>
		)
	}

	function SubList(sub: any){
		sub.children.map((child: any)=>{	
			return(
				// eslint-disable-next-line react/jsx-key
				<li>{child.name}</li>
			
			)}		
	)}


	return (
		<div>
			
			<ul>	
				<MainM />
				
			</ul>
			{/* <>{list111}</> */}
			
			{/* main description */}
			カテゴリー覧a
			{/* <ul>
				{
					categories.map(category =>
						<li key={category.id}>{category.name} {category.children}</li>
					)}
			</ul> */}
			<>
				{
					categories.map(category => {
						if (category.parent == null)
							return (
								// eslint-disable-next-line react/jsx-key
								<div>
									{category.name}
									<ul>
										{
											 category.children.map(small => {
												const  title  = categories.at(parseInt(small)).name;
												console.log(title);
												return(
													// <div>{child}</div>
													<li className='a'>{title}</li>
												)
											 })
											// category.children.map(child =>{
											// 	<li key = {child}>11</li>
											// })
										}
									</ul>
								</div>
							);
					})
				}
			</>

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
				.a{
					left:100px;
					position:relative;
					list-style: none;
					visibility: visible;
				}
			`}</style>
		</div>
	)
}


