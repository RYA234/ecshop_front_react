import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContent  from '../cartItem/cartMainItem';
import { jsxDecorator } from "@styled/storybook-addon-jsx";
import CartMainItem from '../cartItem/cartMainItem';

export default{
	title:'Example/cartMainItem',
	component:CartMainItem,
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof CartMainItem>;

const Template: ComponentStory<typeof CartMainItem> = (args) => <CartMainItem {...args} />;

export const normal = Template.bind({});
normal.args = {
	productName:'aaasaasasasas',
	priceWithoutTax:200,
	priceIncludingTax:'299',
	// 画像ファイルたちはpublicフォルダにあることが前提
	imageURL:"/sampleProduct1.jpg"
	// imageURL:"/vercel.svg"
	// imageURL:"/sample.png"
};
