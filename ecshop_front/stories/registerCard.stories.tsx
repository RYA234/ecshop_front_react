import { ComponentMeta, ComponentStory } from "@storybook/react";
import RegisterCard from "../component/welcome/registerCard";

export default{
    title:'example',
    content:'aasasa'
} as ComponentMeta<typeof RegisterCard>;


const Template: ComponentStory<typeof RegisterCard> = (args) => <RegisterCard />;

export const registerCard = Template.bind({});

registerCard.args = {}

