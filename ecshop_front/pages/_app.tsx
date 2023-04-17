import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MdNNUEJO02RSJ5FUgM60DZSqfZLgfVZTLB1JsCFKhFgPXGJUzp7vBhAOovUXxLQ2SoU7ykWvPN46SY2zJsOms1900UW3EV2qB"
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
      <style jsx global>{`
        // 共通レイアウト部分(Header Main Footer）
        header {
          width: 1440px;
          height: 120px;
          color: black;
          background: white;
          z-index: 100;
        }
        footer {
          width: 1440px;
          height: 178px;
          left: calc(50% - 1440px / 2);
          // border: 1px solid #1be1b2;
          flex: 1;
          position: relative;
          top: 120px;
        }
        .Main {
          flex: 1;
        }
        .HeadCenterFooter {
          display: flex;
          flex-direction: column;
          margin: 0;
          min-height: 100vh;
        }
        @media (max-width: 640px) {
          // 共通レイアウト部分(Header Main Footer）
          header {
            position: relative;
            height: 77px;
            top: 0px;
            left: 0px;
            
            background: red;
            z-index: 100;
            width:100%;

            
          }
          footer {
            position: relative;
            height: 447px;
            left: 80px;
            right: 0px;
            top: 200px;
            width:40%;

          }
          .Main {
            flex: 1;
          }
          .HeadCenterFooter {
            display: flex;
            flex-direction: column;
            margin: 0;
            min-height: 100vh;
            width:100%;
          }
        }
      `}</style>
    </>
  );
}
