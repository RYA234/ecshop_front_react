import axios, { AxiosResponse } from 'axios';
import { Product } from '../types/product/product';
import { ProductResponse } from '../types/product/productResponse';


export const getProductById2 = async ( productId : number) =>{
	return await axios.get(`http://127.0.0.1:5000/api/products/?id=`+ productId,
	{ headers: { 
		'Access-Control-Allow-Origin': '*',
	} } 
	)
	.then((response)=>{
		return response as AxiosResponse<any>;
	})
	.catch((error)=>{
		return error;
	});
};

export const getProductsByCategoryId2 = async ( pageNo : number,pageSize:number, categoryId:number) =>{
	return await axios.get(`http://127.0.0.1:5000/api/products?`
					+`pageNo=`+ pageNo
					+`&pageSize=`+ pageSize
					+`&category=`+ categoryId,
					)
					.then((response)=>{
						return response.data as AxiosResponse<ProductResponse>;
					})
					.catch((error)=>{
						return error;
					});
					
};