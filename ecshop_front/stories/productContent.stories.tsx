import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ProductContentV2  from '../component/product/productContentV2';
import { jsxDecorator } from "@styled/storybook-addon-jsx";

export default{
	title:'Example/pagination',
	component:ProductContentV2,
} as ComponentMeta<typeof ProductContentV2>;

const Template: ComponentStory<typeof ProductContentV2> = (args) => <ProductContentV2 {...args} />;

export const AAb = Template.bind({});
AAb.args = {
	productName:'aaasaasasasas',
	priceWithoutTax:200,
	priceIncludingTax:'299',
	// 画像ファイルたちはpublicフォルダにあることが前提
	imageURL:"/sampleProduct1.JPG"
};