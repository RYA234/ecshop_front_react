
function UserProfilePage(props : any) {
	console.log("Page")
	return <h1>{props.username}</h1>
  }
  
  export default UserProfilePage;
  
  export async function getServerSideProps(context: any) {
	console.log("シンプルなSSR実装例")
	const { params, req, res } = context;
	
	return {
	  props: {
		username: 'Max'
	  }
	};
  }