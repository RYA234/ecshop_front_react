import axios from 'axios';



export const getProductById = ( productId : number) =>{
	return axios.get(`http://127.0.0.1:5000/api/products/?id=`+ productId,
	{ headers: { 
		'Access-Control-Allow-Origin': '*',
	} } 
	);
};

export const getProductsByCategoryId = ( pageNo : number,pageSize:number, categoryId:number) =>{
	return axios.get(`http://127.0.0.1:5000/api/products?`
					+`pageNo=`+ pageNo
					+`&pageSize=`+ pageSize
					+`&category=`+ categoryId,
					);
};