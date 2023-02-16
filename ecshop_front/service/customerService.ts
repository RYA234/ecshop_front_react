import axios from 'axios';
import { URLSearchParams } from 'url';
import { Customer } from '../types/customer';
import { response } from 'msw';



export  const  signIn = ({email,password}: Customer) =>{
	return axios.post(`http://127.0.0.1:5000/api/auth/signin`,
	{ email: email, password: password },
	{ headers: { 
		'Request-Method' : 'POST',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Credentials': 'true'
	} } //COR回避
		
	);
};

export   function signIn2({email,password}: Customer):Promise<string>{
	 return  axios.post(`http://127.0.0.1:5000/api/auth/signin`,
		 { email: email, password: password },
		 {	
			 headers: {
				 'Request-Method': 'POST',
				 'Content-Type': 'application/json',
				 'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
				 'Access-Control-Allow-Headers': '*',
				 'Access-Control-Allow-Credentials': 'true'
			 }
		 } //COR回避	
	 ).then((response : any)=>{
		console.log(response)
		return response.data.accessToken;
	 })
	 .catch((error)=>{
		return error;
	});	 
};

export const logout =()=>{
	return axios.post(`http://127.0.0.1:5000/api/auth/logout`);
}


export function getCartItems(arg0: string) {
	throw new Error("Function not implemented.");
}
