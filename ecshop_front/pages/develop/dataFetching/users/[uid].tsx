import { useAccordionButton } from "react-bootstrap";

function UserIdPage(props:any){
	
	return <h1>{props.id}</h1>
}

export default UserIdPage;

export async function getServerSideProps(context: any) {
	console.log("SSR DynamicPage")
	const { params, req, res } = context;
	const userId :string = params.uid;
	return {
	  props: {
		id:'userid-' + userId, 
	  },
	};
}