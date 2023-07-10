import Footer from "../component/footer/footer";
import Header from "../component/header";
import LoginCard from "../component/welcome/loginCard";
import RegisterCard from "../component/welcome/registerCard";
import TrialCard from "../component/welcome/trialCard";

export default function Index() {
  return (
    <div className="HeadCenterFooter">
      <Header />
      {/* <header>ヘッダ
      </header> */}
      <div className="Main">
        <div className="TitleBack">
          <div className="TitleText">ネットスーパーへようこそ</div>
        </div>
        
        <div className="ThreeContents">
          <div className="RegisterPosition">
            <RegisterCard />
          </div>
          <div className="TrialPosition">
            <TrialCard />
          </div>
          <div className="LoginPosition">
            <LoginCard />
          </div>
        </div>
      </div>
      {/* <footer> */}
      <Footer />
      {/* </footer> */}

      <style jsx>{`
        .TitleBack {
          padding-left: 5%;
          position: absolute;
          width: 1208px;
          height: 44px;
          top: 185px;
          background: #1be1b2;
          border-radius: 3px;
          padding-left: 5%;
        }
        .TitleText {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 15px;
          position: absolute;
          width: 195px;
          height: 18px;
          left: 18px;
          top: 14px;
          color: #fffafa;
        }
        .CardBack {
          position: absolute;
          width: 1208px;
          height: 240px;
          left: 116px;
          top: 244px;
          background: #d9d9d9;
          border-radius: 8px;
        }
        .Main {
          display: flex;
          padding-left: 5%;
          padding-top: 150px;
        }
        .RegisterPosition {
          margin-left: 0px;
        }
        .TrialPosition {
          margin-left: 394px;
        }
        .LoginPosition {
          margin-left: 394px;
        }
        footer {
          padding-left: 6%;
        }
        .ThreeContents{
          display:flex;
          flex-direction:row;
        }
        @media (max-width: 640px) {
          .TitleBack {
            position: absolute;
            height: 44px;
            right: -7px;
            top: 155px;
            width: 100%;
          }
          .TitleText {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #fffafa;
          }
          .RegisterPosition {
            margin-left:0%;      
          }
          .Main {
            margin-left:0%;
          }
          .TrialPosition {
            margin-top: 130px;
            margin-left: 0px;
            padding-left: 5%;
          }
          .LoginPosition {
            margin-top: 130px;
            margin-left:0%;
          }
          .ThreeContents{
            display:flex;
            flex-direction:column;
            padding-left: 5%;
          }
        }
      `}</style>
    </div>
  );
}
