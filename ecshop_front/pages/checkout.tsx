import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { createContext, useEffect, useState } from "react";
import { CartItemResponse } from "../types/cartItem/cartItemResponse";
import { Customer } from "../types/customer";
import * as CustomerService from "../service/customerService";
import * as CartItemService2 from "../service/cartItemServiceV2";
import * as OrderService from "../service/orderService";
import { createPaymentIntent } from "../service/orderService";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CartItemTable from "../component/order/cartItemTable";
import CartItemSum from "../component/order/cartItemSum";
import Footer from "../component/footer/footer";
import Header from "../component/header";
const stripePk: string | undefined = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
// Stripeの公開キーを読み込む
const stripePromise = loadStripe(stripePk as string);

// 決済画面検証用ページ
// 買い物カゴのの中を表示して、Stripeクレジットカード決済するページです。
// 決済完了後は自前のmySQLにデータを保存します。
export const orderContext = createContext(0);
export default function Checkout() {
  ///↓↓↓買い物カゴ情報を取得する機能↓↓↓///
  // cartItemの情報をjsx上に表示するときに使う変数
  const [cartItemResponse, setCartItemResponse] = useState<CartItemResponse>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // clientSecretを格納する変数
  // クレカ入力欄を構築するためにStateにしている。
  const [clientSecret, setClientSecret] = useState<string>("");

  // 支払い総額,createIntent関数を実行するときに使う時に利用。
  // cartItemsResponse?.totalで渡そうとすると　undefinedとなるためこの変数を作成しました。
  let tempTotal: any;

  // 支払い画面を作るために必要な情報を格納する変数
  let options: StripeElementsOptions = {
    appearance: {
      theme: "stripe",
    },
    clientSecret: clientSecret,
  };

  useEffect(() => {
    getCartItemAndCreatePaymentIntent();
  }, []);

  const getCartItemAndCreatePaymentIntent = async () => {
    await getCartItem();
    await createPaymentIntent(tempTotal);
  };

  // ユーザーのカート情報を取得する loginAndGetCartitemで実行する。
  const getCartItem = async () => {
    const response: CartItemResponse = await CartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    setCartItemResponse(response);
    tempTotal = response.total.toFixed();
  };
  ///↑↑↑買い物カゴ情報を取得する機能↑↑↑///

  //PaymentIntentを作成する（PaymentIntentのキーが無いとクレカの入力フォームが作れないため）loginAndGetCartitemで実行する。
  const createPaymentIntent = async (total: number) => {
    //1.バックエンドのSpringBoot側のAPIを実行しPaymentIntentを作成する。バックエンド側でStripeの支払い情報を作成します。client_secretKeyをレスポンスから取得する
    let response: any = await OrderService.createPaymentIntent(
      total,
      "jpy",
      "test@gtest"
    );
    //2.PaymentIntentのclient_secretKeyを引数に渡す。
    setClientSecret(response?.client_secret);
    options.clientSecret = response?.client_secret;
  };
  return (
    <div className="HeadCenterFooter">
      <header>
        ヘッダ
        <orderContext.Provider value={{ isLogin, setIsLogin }}>
          <Header />
        </orderContext.Provider>
      </header>
      <div className="Main">
          <div className="TitleText">決済画面</div>

          <div className="CartItemContent">
            <orderContext.Provider value={cartItemResponse}>
              <CartItemTable />
            </orderContext.Provider>
          </div>

          <div className="Space">
            <div className="Summary">
              <orderContext.Provider value={cartItemResponse}>
                <CartItemSum />
              </orderContext.Provider>
            </div>
            {/*↓↓　クレカ入力画面 ↓↓*/}
            {options.clientSecret == "" ? (
              <div></div>
            ) : (
              <div className="CardWidth">
                <Elements stripe={stripePromise} options={options}>
                  <Payment />
                </Elements>
              </div>
            )}
          </div>
      </div>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        // .headCenterFooter {
        //   display: flex;
        //   flex-direction: column;
        //   margin: 0;
        //   min-height: 100vh;
        // }
        // header {
        //   width: 1440px;
        //   height: 120px;
        //   color: black;
        //   background: yellow;
        //   z-index: 100;
        // }
        // クレジットカード情報の入力欄の幅を調整するために作成
        .CartItemContent {
          width: 748px;
          height: 100%;
          left: 244px;
          top: 10px;
          position: relative;
        }
        .CardWidth {
          position: relative;
          width: 311px;
          height: 357px;
          left: 244px;
          top:20px;
          // top: calc(50% - 357px / 2 + 131.5px);
        }
        // .leftCenterRightInMain {
        //   flex: 1;
        // }
        .Summary {
          position: relative;
          width: 296px;
          height: 187px;
          left: 244px;
          top: 10px;
        }
        .TitleText {
          position: relative;
          width: 166px;
          height: 45px;
          left: 244px;
          top: 17px;

          font-family: "Impact";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 44px;

          color: #000000;
        }
        .Space {
          position: relative;
          top: 10px;
        }
      `}</style>
    </div>
  );
}

// クレジット入力欄のコンポーネント
const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  // completePayment実行時にlocalStorageの値が入っていないから
  // TypeScript上の変数にaccessTokenを渡しておく。
  // localStorageのaccessTokenの値が消滅する原因はまだ不明？
  // ページ遷移後にlocalStrorageの値が消滅する仕様？（あくまで憶測で検証もしてないので　あくまで憶測）
  const jwt: string | null = localStorage.getItem("accessToken");

  return (
    <div>
      <form
        // 決済ボタンを押したときの処理
        onSubmit={(e) => {
          e.preventDefault();
          if (!stripe || !elements) return;
          // Stripe側のAPIを実行し、支払い情報を完了する。
          stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url:
                process.env.NEXT_PUBLIC_FRONTEND_URL + "/checkoutDone",
            },
          });

          // SpringBoot側のAPIを実行し、自前のデータベースの情報を更新します。
          //  todo 成功失敗問わずに実行するので、例外処理を加える必要がある
          OrderService.completePayment(jwt as string);
        }}
      >
        {/* クレカ情報の入力フォーム　Stripeのpublic_keyとPaymentIntentのclientSecretが必要 */}
        <PaymentElement />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
