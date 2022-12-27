import axios from 'axios';

 export  const getCategories = () =>{
	return axios.get(`http://127.0.0.1:5000/api/category/all`);

};
