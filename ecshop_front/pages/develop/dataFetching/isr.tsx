import path from "path";
import fs from 'fs/promises';
import Link from "next/link";

function Ssg(props : any){
	const {products} = props;
	return(
		<div>
			<Link href="/ssg">ISR実装例</Link>
			
			<ul>
				{products.map((product : any) =>( 
				<li key ={product.id}>{product.title}</li>))}
			</ul>
		</div>
	);
}

export async function getStaticProps(){
	console.log('Regenerating...')
	const filePath = path.join(process.cwd(),'data','dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data =JSON.parse(jsonData as any);	
	if(!data){
		return{
			redirect:{
				destination:'/no-data'
			}
		}
	}

	if(data.products.length === 0){ 
		return{notFound:true};
	}
	return{
		props:{
			products: data.products
		},
		revalidate:1,
	};
}
export default Ssg;