import axios, { AxiosResponse } from 'axios';
import { Category } from '../types/category/category';
import { CategoryResponse } from '../types/category/categoryResponse';

 export  const getCategories = async () =>{
	return await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/category/all`,
	{ headers : {
		'Request-Method' : 'GET',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL+'/*',
		'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
		'Access-Control-Allow-Credentials': 'true'
	}}
	)
	.then((response)=>{
		return response.data as AxiosResponse<Category[]>;
	})
	.catch((error)=>{
		return error;
	});
};
