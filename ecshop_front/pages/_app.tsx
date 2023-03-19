import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise =  loadStripe('pk_test_51MdNNUEJO02RSJ5FUgM60DZSqfZLgfVZTLB1JsCFKhFgPXGJUzp7vBhAOovUXxLQ2SoU7ykWvPN46SY2zJsOms1900UW3EV2qB');

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <> <Elements stripe={stripePromise} >
  		    <Component {...pageProps} />
      </Elements>
  </>
  )
}
