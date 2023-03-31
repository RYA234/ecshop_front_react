import axios, { AxiosResponse } from 'axios';
import { response } from 'msw';
import { CartItemResponse } from '../types/cartItem/cartItemResponse';


/**
 * 
 * @remarks SpringBootで作ったAPIを呼ぶ関数
 * 
 * 
 * @param jwtAccessKey 
 * @returns 
 */

export const addProductCart = ({productId,quantity}: CartItem, jwtAccessKey:string) =>{
	return axios.post(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/add`
	+ `?productId=` +productId
	+ `&quantity=` +quantity
	,{},
	{ headers : {
		'Authorization': `Bearer ${jwtAccessKey}`,
		'Request-Method' : 'POST',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL+'/*',
		'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
		'Access-Control-Allow-Credentials': 'true'
	}}
	).then((response)=>{

	});
}

export   function  addProductCart2(productId:number,quantity:number, jwtAccessKey:string){
	return  axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/cart/add`
	+ `?productId=` +productId
	+ `&quantity=` +quantity
	,{},
	{ headers : {
		'Authorization': `Bearer ${jwtAccessKey}`,
		'Request-Method' : 'POST',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL+'/*',
		'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
		'Access-Control-Allow-Credentials': 'true'
	}}
	).then((response)=>{
		console.log("cartItems is added");
	})
	.catch((error) => {
        console.log("cartItems are not set");
      });
}

//
export const getCartItems =(jwtAccessKey : string)=>{
	return axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/cart/all`,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
		}}
	);
		return response;
}

 export  const  getCartItems2  = async (jwtAccessKey : string) => {
     return  await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/all`,
		{
			headers: {
				'Authorization': `Bearer ${jwtAccessKey}`
			}
		}
	)
		.then((response) => {
			{
				return response.data as AxiosResponse<CartItemResponse>;
			}
		})
		.catch((error) => {
			console.log("cartItems are not set");
			 return error;
		});
	
}

// 
export const updateQuantity = ({productId,quantity}:CartItem,jwtAccessKey:string) =>{
	return axios.put(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/update`
	+ `?productId=` +productId
	+ `&quantity=` +quantity,
	{},
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`,
			'Request-Method' : 'PUT',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL + '/*',
			'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
			'Access-Control-Allow-Credentials': 'true'
	}}
	)
}

export const updateQuantity2 = async (productId:number,quantity:number,jwtAccessKey:string) =>{
	return await axios.put(process.env.NEXT_PUBLIC_BACKEND_URL+ `/api/cart/update`
	+ `?productId=` +productId
	+ `&quantity=` +quantity,
	{},
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`,
			'Request-Method' : 'PUT',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BACKEND_URL+'/*',
			'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
			'Access-Control-Allow-Credentials': 'true'
	}}
	)
	.then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("update is failed");
      });
}

export const removeProduct = (productId:number, jwtAccessKey:string) =>{
return axios.delete(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/remove`
	+`?productId=`+ productId,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
	}}
);
}

export const removeProduct2 = async (productId:number, jwtAccessKey:string) =>{
	return await axios.delete(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/remove`
		+`?productId=`+ productId,
		{ headers : {
				'Authorization': `Bearer ${jwtAccessKey}`
		}}
	)
	.then((response) => {
        console.log(response.data);
      })
	.catch((error) => {
        console.log(error);
      });
	;
	}

export const deleteByCustomer = (jwtAccessKey:string) =>{
	return axios.delete(process.env.NEXT_PUBLIC_BACKEND_URL+`/api/cart/delete`,
	{ headers : {
			'Authorization': `Bearer ${jwtAccessKey}`
	}}
);
}

