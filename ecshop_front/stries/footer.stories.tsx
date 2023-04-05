import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "../component/footer/footer";



export default{
    title:'example/Footer'
} as ComponentMeta<typeof Footer>;

const Template:ComponentStory<typeof Footer> = (arg) => <Footer/>;

export const footer= Template.bind({});
footer.args = {}