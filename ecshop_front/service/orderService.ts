import axios, { AxiosResponse } from 'axios';


export const createPaymentIntent = async (amount:number,currency:string,receiptEmail:string) =>{
    return await axios.post(`http://127.0.0.1:5000/api/pay/payment-intent`,
    {amount:amount,currency:currency,receiptEmail:receiptEmail},
    {
        headers: {
            'Request-Method': 'POST',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true'

        }
    })
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
		return error;
	});	
}

export const  completePayment = async (jwtAccessKey : string )=>{
    return await axios.put(`http://127.0.0.1:5000/api/pay/finish`,{},
    { headers : {
		'Authorization': `Bearer ${jwtAccessKey}`,
		'Request-Method' : 'PUT',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/*',
		'Access-Control-Allow-Headers': 'accept, accept-language, content-language, content-type',
		'Access-Control-Allow-Credentials': 'true'
	}}
	).then((response)=>{
	})
	.catch((error) => {
      });
}