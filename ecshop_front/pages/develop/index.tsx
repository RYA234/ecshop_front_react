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
		<>
			<h1>開発者用ページ</h1>
			<Link href="/develop/axiosapi">1.axiosを使ってRestApiからデータを取得する</Link>

			
		
		</>
	)
}
