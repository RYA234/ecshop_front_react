import test from "node:test";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
import { Category } from "../../../types/category/category";
import { CategoryResponse } from '../../../types/category/categoryResponse';
import { mainContext } from './index';

// todo リファクタリング必要


// カテゴリーメニューのコンポーネント
export default function CategoryMenu() {
	const {categoryResponse,setCategoryId} : any = useContext(mainContext);

	const handlerClick = (onClickedCategoryId: number) => {
		console.log(onClickedCategoryId)
		setCategoryId(onClickedCategoryId);
	}	
	return (
		<div>
			カテゴリー覧
			<nav>
			<ul>
				{
					categoryResponse.map((category: Category) => {
						// 親カテゴリーだった場合表示する。
						if (category.parent == null)
							return (
								// eslint-disable-next-line react/jsx-key
								<li className='mainMenu'>
									<a href="#">{category.name}</a>					
									<ul>
										{
											// 子カテゴリーを表示する。
											 category.children.map(count => {
												const  title  = categoryResponse.at(count).name;
												return(
										
													<li key={count}>
														<button className="ButtonLayout"  onClick={() => handlerClick(categoryResponse.at(count).id)} >{title}</button>	
													</li>			
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
				// 親カテゴリの設定 リストの・を消す。
				nav ul{		
					list-style: none;
				}

				// 子カテゴリのデフォルトのcss設定
				// hiddenで非表示にしてleftで位置崩れを防いでいる
				nav ul li ul{
					position:absolute;
					visibility: hidden;
					left:0px;
				}

				// 親カテゴリをマウスオーバーしたときに、子カテゴリを表示する。				
				nav  li.mainMenu:active > ul,
				nav  li.mainMenu:hover > ul,
				{
					position:absolute;
					z-index:5;
					visibility: visible;
					list-style: none;
					// ↓↓使うコンポーネントによっては、修正の必要があるかも…
					padding: 20px;
				    margin: 20px 10px 100px 0px;
					top:0px;
				    left:100px;
					width:180px;
					background-color: white;					
					// ↑↑使うコンポーネントによっては、修正の必要があるかも…
				}
				.ButtonLayout{
					background-color: white;
					border: none;
				}
			`}</style>
		</div>
	)
}

