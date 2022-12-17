import React, {useState, useEffect} from 'react'

const url = "http://localhost:5000/api/products";
const ApiFetch = () => {
	const [stars, setStars] = React.useState(0);
	React.useEffect(() => {
	  fetch(url)
		.then((r) => r.json())
		.then((j) => setStars(j.stargazers_count));
	}, []);
	return <div>{stars}</div>;
};

export default ApiFetch

