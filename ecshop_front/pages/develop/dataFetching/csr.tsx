import { useEffect, useState } from "react";

function Csr(){
	const[products, setProducts] = useState([]);
	useEffect(() => {
		fetch('/dummy-backend.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			setProducts(data.products);
		});
}, []);

return(
	<div>
		<h1>CSR例</h1>
		<ul>
			{products.map((product : any) =>(
				<li key={product.id}>{product.title}</li>	
			))}		
		</ul>
	</div>
)
}

export default Csr;