import Footer from "../component/footer/footer";
import LoginCard from "../component/welcome/loginCard";
import RegisterCard from "../component/welcome/registerCard";
import TrialCard from "../component/welcome/trialCard";

 export default  function Index(){
    return(
       <div className = 'headCenterFooter'>
         <header>
            ヘッダ
         </header>
		 <div className='leftCenterRightInMain'>
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
				.headCenterFooter{
					display: flex;
					flex-direction: column;		
					margin: 0;
					min-height: 100vh;							
				}
				header{
					width: 1440px;
					height: 120px;
					color:black;
					background:yellow;
					z-index: 100;
				}
				Footer{
					width: 1440px;
					height: 178px;
					left: calc(50% - 1440px/2);
					border: 1px solid #1BE1B2;
				}
				main{
					flex: 1;
					background:white;
				}
				.leftCenterRightInMain{
					display: flex;
					flex:1
				}
				.left{
					color:rainbow;
					background:white;
					width:160px;
				}
				.center{
					flex:3;
					background:white;
				}
				.right{
					background:white;
				}

				.PaginationPosition{
					margin:auto;
					width:50%
				}
			`}</style>
       </div> 
    )
}