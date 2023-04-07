import { ComponentMeta, ComponentStory } from "@storybook/react";
import TrialCard from "../component/welcome/trialCard";

export default{
    title:'example',
    content:'aasasa'
} as ComponentMeta<typeof TrialCard>;


const Template: ComponentStory<typeof TrialCard> = (args) => <TrialCard  />;

export const trialCard = Template.bind({});

trialCard.args = {}

