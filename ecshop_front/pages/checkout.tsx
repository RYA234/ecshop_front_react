import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
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
const stripePk : string | undefined = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
// Stripeの公開キーを読み込む
const stripePromise = loadStripe(
    stripePk as string
);

// 決済画面検証用ページ
// 買い物カゴのの中を表示して、Stripeクレジットカード決済するページです。
// 決済完了後は自前のmySQLにデータを保存します。
export default function Checkout() {
  ///↓↓↓買い物カゴ情報を取得する機能↓↓↓///
  // cartItemの情報をjsx上に表示するときに使う変数
  const [cartItemsResponse, setCartItemsResponse] = useState<CartItemResponse>();

  // clientSecretを格納する変数
  // クレカ入力欄を構築するためにStateにしている。
  const [clientSecret, setClientSecret] = useState<string>("");

  // 支払い総額,createIntent関数を実行するときに使う時に利用。
  // cartItemsResponse?.totalで渡そうとすると　undefinedとなるためこの変数を作成しました。
  let tempTotal: any;

  // 支払い画面を作るために必要な情報を格納する変数
  let options :StripeElementsOptions = {
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

  }

  // ユーザーのカート情報を取得する loginAndGetCartitemで実行する。
  const getCartItem = async () => {
    const response: CartItemResponse = await CartItemService2.getCartItems2(
      localStorage.getItem("accessToken") as unknown as string
    );
    setCartItemsResponse(response);
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
  }
    return (
      <div>
        <div>決済画面</div>
        <div>買い物カゴ情報</div>
        <div>クレジットカード情報</div>
        <div>
          {cartItemsResponse?.cartItemDtos.map((cartItem) => {
            return (
              <div key={cartItem.id} className="CartItemContent">
                <div>商品名：{cartItem.productName}</div>
                <div>価格：{cartItem.priceWithTax}</div>
                <div>数量：{cartItem.quantity}</div>
                <div>
                  小計：{(cartItem.priceWithTax * cartItem.quantity).toFixed()}
                  円
                </div>
              </div>
            );
          })}
          <div>送料{cartItemsResponse?.shippingCost}円</div>
          <div>お客様が支払う額:{cartItemsResponse?.total.toFixed()}円</div>
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
        <style jsx>{`
          // クレジットカード情報の入力欄の幅を調整するために作成
          .CartItemContent {
            border: 1px solid black;
            width: 300px;
          }
          .CardWidth {
            width: 300px;
          }
        `}</style>
      </div>
    );
  };

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
      <form
        // 決済ボタンを押したときの処理
        onSubmit={(e) => {
          e.preventDefault();
          if (!stripe || !elements) return;
          // Stripe側のAPIを実行し、支払い情報を完了する。
          stripe
            .confirmPayment({
              elements,
              confirmParams: {
                return_url: process.env.NEXT_PUBLIC_FRONTEND_URL+"/checkoutDone",
              },
            })
            
            // SpringBoot側のAPIを実行し、自前のデータベースの情報を更新します。
            //  todo 成功失敗問わずに実行するので、例外処理を加える必要がある
            OrderService.completePayment(jwt as string);
        }}
      >
        {/* クレカ情報の入力フォーム　Stripeのpublic_keyとPaymentIntentのclientSecretが必要 */}
        <PaymentElement />
        <button type="submit">Submit</button>
      </form>
    );
  };

