import { time } from 'console';
import { NOTFOUND } from 'dns';
import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

function HomePage(props : any){
	const {products} = props;
	return(
		<div>
			<Link href="/develop/dataFetching/csr">CSR実装例</Link>
			<br/><br/>
			<Link href="/develop/dataFetching/ssg">SSG実装例(Static Site Generation)</Link>
			<br/><br/>
			<Link href="/develop/dataFetching/isr">ISR実装例</Link>
			<br/><br/>
			<Link href="/develop/dataFetching/ssr">SSR実装例</Link>
		</div>
	);
}

export default HomePage;