import { Category } from "../../types/category/category";
import * as categoryService from "../../service/categoryService";
import { useEffect, useRef, useState } from "react";

export default function AxiosApi() {
	const [categories, setCategories] = useState<Category[]>([])

	// 初回実行時のみApiを読み込む
	useEffect(() => {
		loadCategories();
	}, [])

	const loadCategories = async () => {
		categoryService
			.getCategories()
			.then((response) => {
				setCategories(response.data)
				console.log(response.data)
			});
	}
	
	return (
		<div>
			<h1>axiosを使ったデータ取得</h1>
			カテゴリー名 、サブカテゴリーのid
			{
				categories.map((category: Category) => {
					return (
						<div key={category.id}>
							{category.name}、 {category.children}
						</div>
					)
				})
			}
		</div>
	)
}