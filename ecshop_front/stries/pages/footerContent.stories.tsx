import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterContent from "../footer/footerContent";

export default{
    title:'example',
    content:'aasasa'
} as ComponentMeta<typeof FooterContent>;


const Template: ComponentStory<typeof FooterContent> = (args) => <FooterContent {...args} />;

export const footerContent = Template.bind({});

footerContent.args = {
    title:'このサイトについて',
    content:`
・価格はネットスーパー専用の価格です。価格の店頭価格と異なる場合がございます。\n
・ネットスーパーで使用している商品画像はイメージです。\n
・配送の関係から、ご購入数量に制限を設けています。\n
・生鮮食品は、生育状況や天候により産地、大きさなどが変わる場合がございます。
\n`
}

