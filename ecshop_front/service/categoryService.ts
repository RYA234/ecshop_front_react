import axios, { AxiosResponse } from 'axios';
import { Category } from '../types/category/category';
import { CategoryResponse } from '../types/category/categoryResponse';

 export  const getCategories = async () =>{
	return await axios.get(`http://127.0.0.1:5000/api/category/all`)
	.then((response)=>{
		return response.data as AxiosResponse<Category[]>;
	})
	.catch((error)=>{
		return error;
	});
};
