import Basic from "./basic";
import { FruitContext } from './basic';


export default function Child(){
	
	return(
		<>
			<FruitContext.Consumer>
					{(value ) => {

				const  fruits : string[]  = value 
				console.log(fruits); // ["Apple", "Orange", "Banana"]
				return (
				<h1>
					{
						fruits.map((fruit,index)=>{
							return <div key={index}>{fruit}</div>
						})
					}

				</h1>
				)
			}}
			</FruitContext.Consumer>
		</>
	)
}