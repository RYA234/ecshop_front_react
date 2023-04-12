import RegisterMain from "../component/registerMain";

 export default function Register(){
    

    return(
       <div className = 'headCenterFooter'>
         <header>
            ヘッダ
         </header>
        <div className="Content">
            <RegisterMain/>
        </div>
         <footer></footer>
			<style jsx>{`
            .Content{
                display: flex;
                flex:1;
                position:relative;
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
				.leftCenterRightInMain{
					display: flex;
					flex:1
				}
			`}</style>
        </div>
    )
}