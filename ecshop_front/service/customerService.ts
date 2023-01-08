import axios from 'axios';
import { URLSearchParams } from 'url';
import { Customer } from '../types/customer';



export const signIn = ({email,password}: Customer) =>{
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

export const logout =()=>{
	return axios.post(`http://127.0.0.1:5000/api/auth/logout`);
}

