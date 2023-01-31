import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ProductContent  from '.././component/productContent';

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
	imageURL:"/sampleProduct1.jpg"
	// imageURL:"/vercel.svg"
	// imageURL:"/sample.png"
};