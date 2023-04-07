import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContent  from '../component/cartItem/cartMainItem';
import { jsxDecorator } from "@styled/storybook-addon-jsx";
import CartSubItemV3 from '../component/cartItem/cartSubItemV3';
import { storiesOf } from "@storybook/react";
import { mainContext } from "../pages/mainPage";

storiesOf("CartSubItemV3", module).add("default", () => {
  const cartItemsResponse = {
    cartItemDtos: [
      {
        productName: "Example Product",
        priceWithoutTax: 100,
        priceWithTax: 108,
        quantity: 1,
        productId: "12345"
      }
    ]
  };

  const setCartItemsResponse = () => {};

  return (
    <mainContext.Provider value={{ cartItemsResponse, setCartItemsResponse }}>
      <CartSubItemV3 index={0} />
    </mainContext.Provider>
  );
});
