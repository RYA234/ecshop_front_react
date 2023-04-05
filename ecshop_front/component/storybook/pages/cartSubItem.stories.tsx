import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContent  from '../cartItem/cartMainItem';
import { jsxDecorator } from "@styled/storybook-addon-jsx";
import CartSubItem from '../cartItem/cartSubItem';

export default{
	title:'Example/cartItemSub',
	component:CartSubItem,
	argTypes: {onClick: { action: '数量変更ボタンが押されました。' } },
} as ComponentMeta<typeof CartSubItem>;

const Template: ComponentStory<typeof CartSubItem> = (args) => <CartSubItem {...args} />;

export const normal = Template.bind({});
normal.args = {
	productName:'aaasaasasasas',
	priceWithoutTax:200,
	priceIncludingTax:299,
	amount:2
	// imageURL:"/vercel.svg"
	// imageURL:"/sample.png"
};