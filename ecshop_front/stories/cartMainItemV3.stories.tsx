import React from "react";
import { storiesOf } from "@storybook/react";
import { mainContext } from "../pages/mainPage";

// import CartMainItemV3 from "../component/cartItem/CartMainItemV3";
import CartMainItemV3 from '../component/cartItem/cartMainItemV3';

storiesOf("CartMainItemV3", module).add("default", () => {
  const cartItemResponse = {
    total: 1000,
    productCost: 800,
    shippingCost: 200,
    tax: 10,
  };

  return (
    <mainContext.Provider value={{ cartItemResponse }}>
      <CartMainItemV3 />
    </mainContext.Provider>
  );
});
