

import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

// このページは

import stripe, { Stripe } from "stripe"

// http://127.0.0.1:3000/develop/stripe
export default function Index(){
	// fetchでGETを取得する。
	const elements = useElements();
	const stripe = useStripe();
	
	async function checkout() {
	if (!stripe || !elements || !elements.getElement(CardElement)) {
		console.log("error")
	
		return;
	}

	stripe?.confirmCardPayment(
		"pi_3MgGV2EJO02RSJ5F0gvC7XXT_secret_kDZJ5divxBGYa59WfoQWukRWW",{

		},{handleActions:false}
	).then(function(result){
		console.log(result);
	});
	}
	return(
		<div>
			<div>aaaa</div>
			{/* <PaymentElement /> */}
		</div>
	)
}