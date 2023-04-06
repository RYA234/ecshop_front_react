import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginCard from "../component/welcome/loginCard";


export default{
    title:'example'
} as ComponentMeta<typeof LoginCard>;


const Template: ComponentStory<typeof LoginCard> = (args) => <LoginCard/>;

export const footerContent = Template.bind({});

footerContent.args = {

}

