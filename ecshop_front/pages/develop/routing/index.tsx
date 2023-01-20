import Link from "next/link";

export default function Home() {
	return(
		<>
			<h1>Routing検証用ページ</h1>
			<h2>FileBased Routing</h2>
			<Link href="/develop/routing/staticRouting">
				<div className='FontColor'>
					static Routing　簡単な例
				</div>
			</Link>

			<Link href="/develop/routing/blog">
				<div className='FontColor'>
					dynamic Routing　簡単な例１
				</div>
			</Link>

			<style jsx>{`				
				// 大枠の空白部分を担当
				.FontColor{
					color: blue;
				}
			`}</style>	
		</>
	)
}