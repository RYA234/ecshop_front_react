
// ページネーション検証用ページ　その２
// コンポーネント化したページネーションを呼び出す
// SpringBootのRestApiは呼び出さない

import { useState } from "react";
import Pagination from "../../component/pagination";

export default function PaginationCheckSecond() {
	const [pageNo,setPageNo] =  useState<number>(1)
	const totalPage :  number = 4;
	let tempPageNo : number = 1;
	return(
		<>
			コンポーネント化したページネーションの検証ページ
			<Pagination totalPage={totalPage} pageNo={pageNo} setPageNo={setPageNo}/>
		</>
	)
}