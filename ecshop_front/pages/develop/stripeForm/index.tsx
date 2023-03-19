import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

// 公開キーを読み込む
const stripePromise = loadStripe("pk_test_51MdNNUEJO02RSJ5FUgM60DZSqfZLgfVZTLB1JsCFKhFgPXGJUzp7vBhAOovUXxLQ2SoU7ykWvPN46SY2zJsOms1900UW3EV2qB");

// クレカ情報を入力してPaymentIntentの支払い完了にするページ
// http://127.0.0.1:3000/develop/stripeForm
 export default function Index()
{

  let moji :string ="pi_3MiqKuEJO02RSJ5F1JOlbc5Y_secret_rS3OeqgYArum1uyh8OlFCbior";
    const options = {
        appearance:{
          theme: 'stripe',
        },
        // PaymentIntentのclientSecretを入力する
        clientSecret:moji,
      }

      
      console.log(options)
    return (
        <div className="Layout"> 
        <Elements stripe={stripePromise} options={options}>
        {/* <PaymentElement  /> */}
        <Payment/>
        </Elements>
    			<style jsx>{`				
				// クレジットカード情報の入力欄の幅を調整するために作成
				.Layout{
					width: 300px;
				}
			`}</style>
        </div>
    )
}

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    return (
      <form
      onSubmit={async e => {
        e.preventDefault()
        if (!stripe || !elements) return;
        await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: 'http://localhost:3000'
          }
        })
    } 
    }
      >
      {/* クレカ情報の入力フォーム　Stripeのpublic_keyとPaymentIntentのclientSecretが必要 */}
          <PaymentElement  />
          <button type="submit">Submit</button>
      </form>
    )
  }