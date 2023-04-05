import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContent  from '../component/product/productContent';
import { jsxDecorator } from "@styled/storybook-addon-jsx";

export default{
	title:'Example/pagination',
	component:ProductContent,
} as ComponentMeta<typeof ProductContent>;

const Template: ComponentStory<typeof ProductContent> = (args) => <ProductContent {...args} />;

export const AAb = Template.bind({});
AAb.args = {
	productName:'aaasaasasasas',
	priceWithoutTax:200,
	priceIncludingTax:'299',
	// 画像ファイルたちはpublicフォルダにあることが前提
	imageURL:"/sampleProduct1.JPG"
};