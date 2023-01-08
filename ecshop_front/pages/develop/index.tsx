import Link from 'next/link'

/**
 * @remarks
 * このページはプロダクト部分ではありません。
 * 開発者がNext.js css の各種文法を確認するためのページです。
 * 
 * 
 * 
 */

export default function Home() {

	return(
		<div>
			<h1>開発者用ページ</h1>
			<Link href="/develop/axiosapi">1.axiosを使ってRestApiからデータを取得する</Link>
			<br/><br/>

			<Link href="/develop/productBrief">3.商品の一覧部分実装(引数無し　固定)</Link>
			<br/><br/>
			<Link href="/develop/productBriefSecond">4.商品の一覧部分実装(引数有り)</Link>
			<br/><br/>
			<Link href="/develop/productBriefManySet">5.flexboxを使ってコンポーネントを等間隔でおけるか検証</Link>
			<br/><br/>
			<Link href="/develop/productBriefManySet">6.商品一覧を並べる(4.で使ったコンポーネントを並べる)</Link>
			<br/><br/>
			<Link href="/develop/productServiceCheck">7.商品apiを検証する</Link>
			<br/><br/>
			<Link href="/develop/cartItemServiceCheck">8.買い物カゴapiを検証する</Link>
			<br/><br/>		
		</div>
	)
}
