import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CartItemSum from "../component/order/cartItemSum";
import { CartItemResponse } from '../types/cartItem/cartItemResponse';
import { orderContext } from "../pages/checkout";
import { storiesOf } from "@storybook/react";

storiesOf("CartItemSum", module).add("default", () => {
  const cartItemResponse = {
    CartItemDtos: [
      {
        name: "メガネ",
        price: "111円",
        quantity: 2,
        total: "200円",
        taxRate: "8%",
      },
    ],
    amount: "100",
    tax: "2",
    total: "108",
    shippingCost:"100",
    productCost:"10000"
  };

  return (
    <orderContext.Provider value={{ cartItemResponse }}>
      <CartItemSum />
    </orderContext.Provider>
  );
});