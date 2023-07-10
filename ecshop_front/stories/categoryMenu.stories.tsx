import React from "react";
import { storiesOf } from "@storybook/react";
import { mainContext } from "../pages/mainPage";

// import CartMainItemV3 from "../component/cartItem/CartMainItemV3";
import CategoryMenu from "../component/categoryMenu";
import { CategoryResponse } from '../types/category/categoryResponse';


storiesOf("CategoryMenu", module).add("default", () => {
    const categoryResponseA ={
    category:[
        {
          id: 1,
          name: "badva",
          alias: "categorya",
          parent: null,
          children: [2, 3],
        },
        {
          id: 2,
          name: "dfasfdsa",
          alias: "categorya",
          parent: 1,
          children: [],
        },
        {
          id: 3,
          name: "dfasa",
          alias: "category-a",
    
          parent: 1,
          children: [],
        },
    ],}
      
    const setCategoryRespose = () => {};      
      

  return (
    <mainContext.Provider value={{ categoryResponseA }}>
      <CategoryMenu />
    </mainContext.Provider>
  );
});
