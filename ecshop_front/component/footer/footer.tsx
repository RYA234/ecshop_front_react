import { footerContent } from "../../storybook/footerIcon.stories";
import FooterContent from "./footerContent";
import FooterIcon from "./footerIcon";
export default function Footer() {
  const aboutThisSiteTitle: string = "このサイトについて";

  const aboutThisSiteContent: string = `
	\n・価格はネットスーパー専用の価格です。価格の店頭価格と異なる場合が
	\n  ございます。
	\n・ネットスーパーで使用している商品画像はイメージです。
	\n・配送の関係から、ご購入数量に制限を設けています。
	\n・生鮮食品は、生育状況や天候により産地、大きさなどが変わる場合がございます。`;

  const useTitle: string = "ご利用にあたって";
  const useContent: string = `
	\n・会員登録は新規会員様登録ページからお願いいたします。
	\n・メールアドレス(会員様ID)・パスワードがないとサービスがご利用いただけませんので、
	\n   大切に保管してください
	\n・登録機能
	\n・ご注文はインターネットにて承ります。
	`;

  return (
    <div className="Layout">
      <div>
        <FooterContent title={aboutThisSiteTitle} content={aboutThisSiteContent}/>
      </div>
      <div className="UsePosition">
        <FooterContent title={useTitle} content={useContent} />
      </div>
      <div className="IconPosition">
        <FooterIcon />
      </div>
      <style jsx>{`
        .Layout {
          display:flex;
          padding-left:5%;
        }
        .AboutThisSitePosition {       
        }
        .UsePosition {
          padding-left:10px;
        }
        .IconPosition {
          padding-left:10px;
        }
        @media (max-width: 640px) {
          .Layout {
            dispaly: flex;
            flex-direction: column;
            padding-top:250px;
          }
          .AboutThisSitePosition {
          }
          .UsePosition {
            margin-top:100px;
          }
          .IconPosition {
            margin-top:100px;
          }
        }
      `}</style>
    </div>
  );
}
