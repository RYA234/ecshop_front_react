import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContent  from '../cartItem/cartMainItem';
import { jsxDecorator } from "@styled/storybook-addon-jsx";
import CartMainItem from '../cartItem/cartMainItem';
import Register from '../../pages/register';

export default{
	title:'Page/register',
	component:Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => <Register{...args} />;

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