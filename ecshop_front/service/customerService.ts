import axios from 'axios';
import { Customer } from '../types/customer';


export const signIn = ({email,password}:Customer) =>{
	return axios.post(`http://127.0.0.1:5000/api/auth/sigin`);
};

export const logout =()=>{
	return axios.post(`http://127.0.0.1:5000/api/auth/logout`);
}


//認可が必要なapi 本来だったら別カテゴリーに移す
export const getCartItems =()=>{
	return axios.get(`http://127.0.0.1:5000/api/cart/all`)
}