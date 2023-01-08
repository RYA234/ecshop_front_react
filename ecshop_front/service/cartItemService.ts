import axios from 'axios';
import { CartItem } from '../types/cartItem';

/**
 * 
 * @remarks SpringBootで作ったAPIを呼ぶ関数
 * 
 * 
 * @param jwtAccessKey 
 * @returns 
 */

export const addProductCart = ({productId,quantity}: CartItem, jwtAccessKey:string) =>{
	return axios.post(`http://127.0.0.1:5000/api/cart/add`
	+ `?productId=` +productId
	+ `&quantity=` +quantity
	,{},
	{ headers : {
		'Authorization': `Bearer ${jwtAccessKey}`,
		'Request-Method' : 'POST',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
		'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
		'Access-Control-Allow-Credentials': 'true'
	}}
	);
}


//
export const getCartItems =(jwtAccessKey : string)=>{
	return axios.get(`http://127.0.0.1:5000/api/cart/all`,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
		}}
	);
}

// 
export const updateQuantity = ({productId,quantity}:CartItem,jwtAccessKey:string) =>{
	return axios.put(`http://127.0.0.1:5000/api/cart/update`
	+ `?productId=` +productId
	+ `&quantity=` +quantity,
	{},
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`,
			'Request-Method' : 'PUT',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
			'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
			'Access-Control-Allow-Credentials': 'true'
	}}
	)
}

export const removeProduct = ({productId}:CartItem, jwtAccessKey:string) =>{
return axios.delete(`http://127.0.0.1:5000/api/cart/remove`
	+`?productId=`+ productId,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
	}}
);
}

export const deleteByCustomer = (jwtAccessKey:string) =>{
	return axios.delete(`http://127.0.0.1:5000/api/cart/delete`,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
	}}
);
}
