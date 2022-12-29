import axios from "axios";
//
export default function PostMethodCompareFetchandAxios() {
	
	const enteredEmail : string = 'aaaba@gmail.com';
	const enteredPassword : string = 'test' ;

	const submitHandler = () => {
		const url = 'http://localhost:5000/api/auth/signin';
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				return res.json().then((data) => {
					let errorMessage = 'Authentication failed!';
					if (data && data.error && data.error.message) {
						errorMessage = data.error.message;
					}
					throw new Error(errorMessage);
				});
			}
		})
			.then((data) => {
				localStorage.setItem('accessToken', data.accessToken);
				
				setJwtAccessToken(localStorage.getItem('accessToken')) ;
			})
			.catch((err) => {
				localStorage.setItem('accessToken', ' error');
				setJwtAccessToken(localStorage.getItem('accessToken'));
			});

	};


	axios.post(`http://127.0.0.1:5000/api/auth/signin`,
	{ email: enteredEmail, password: enteredPassword },
	{ headers: { 
		'Request-Method' : 'POST',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Credentials': 'true'
	} } //COR回避
		
	);




	return(
		<>
		fetch axios postmethod 確認		
		
		
		
		</>
	)
}

function setJwtAccessToken(arg0: string | null) {
	throw new Error("Function not implemented.");
}
