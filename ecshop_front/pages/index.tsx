import Footer from "../component/footer/footer";
import LoginCard from "../component/welcome/loginCard";
import RegisterCard from "../component/welcome/registerCard";
import TrialCard from "../component/welcome/trialCard";

 export default  function Index(){
    return(
       <div className = 'HeadCenterFooter'>
         <header>
            ヘッダ
         </header>
		 <div className='Main'>
				<div className="TitleBack">
					<div className="TitleText">ネットスーパーへようこそ</div>
				</div>
				<div className="CardBack"></div>
				<div className="RegisterPosition">
					<RegisterCard/>
				</div>
				<div className="TrialPosition">
					<TrialCard/>
				</div>
				<div className="LoginPosition">
					<LoginCard/>
				</div>
		  </div>         
         <footer><Footer/></footer>

			<style jsx>{`
				.TitleBack{
					position: absolute;
					width: 1208px;
					height: 44px;
					left: 116px;
					top: 185px;
					background: #1BE1B2;
					border-radius: 3px;					
				}
				.TitleText{
					font-family: 'Inter';
					font-style: normal;
					font-weight: 700;
					font-size: 15px;
					position: absolute;
					width: 195px;
					height: 18px;
					left: 18px;
					top: 14px;
					color: #FFFAFA;
				}
				.CardBack{
					position: absolute;
					width: 1208px;
					height: 240px;
					left: 116px;
					top: 244px;
					background: #D9D9D9;
					border-radius: 8px;
				}
				.RegisterPosition{
					box-sizing: border-box;
					position: absolute;
					width: 392px;
					height: 224px;
					left: 125px;
					top: 252px;
					border: 1px solid #000000;
				}
				.TrialPosition{
					box-sizing: border-box;
					position: absolute;
					width: 392px;
					height: 224px;
					left: 524px;
					top: 252px;
					border: 1px solid #000000;
				}
				.LoginPosition{
					box-sizing: border-box;
					position: absolute;
					width: 392px;
					height: 224px;
					left: 923px;
					top: 252px;					
					border: 1px solid #000000;
					filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
				}

			`}</style>
       </div> 
    )
}