import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterIcon from "../component/footer/footerIcon";

export default{
    title:'example/LoginCard'
} as ComponentMeta<typeof FooterIcon>;


const Template: ComponentStory<typeof FooterIcon> = (args) => <FooterIcon />;
export const footerContent = Template.bind({});
footerContent.args = {}


