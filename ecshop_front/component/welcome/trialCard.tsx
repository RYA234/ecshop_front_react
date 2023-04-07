import Image from 'next/image';   
import * as customerService from "../../service/customerService";
import  Router  from 'next/router';

   export default function TrialCard(){
    const content : string =`
    ネットスーパーを見学します。\n
    アカウントを登録無しで体験
    できます。「店内見学」ボタ\n
    ンをクリックしてください\n
    `
    const title : string = `店内見学はこちら`
    const trialHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        // todo エラーハンドリングの実装
        const email = "aaaba@gmail.com"			
        const password = "test";	
        const response = await customerService.signIn2(email,password);
        console.log(response)
        localStorage.setItem('accessToken', response);
        Router.push('/mainPage')
    }    
    return(
        <div className="LayoutSize">
            <div >
                    <Image className='ImageSize' src='/welcome/trial.JPG'
                      height={224}
                      width={193}
                      alt='logo' />
            </div>
            <div className="TitleText">{title}</div>
            <div className="MainContent">{content}</div>
            <button className="OkButton" onClick={trialHandler}>店内見学</button>
            <style jsx>{`
                .LayoutSize{
                    position: absolute;
                    width: 392px;
                    height: 224px;
                    border: 1px solid #000000;
                    box-sizing: border-box;
                    background: #FFFFFF;
                }
                .ImageSize{
                    position: absolute;
                    width: 203px;
                    height: 224px;
                    left: calc(50% - 203px/2 - 94.5px);
                    top: calc(50% - 224px/2);
                    background: url(image.png);
                    border-radius: 5px;
                }
				.OkButton{
                    position: absolute;
                    width: 176px;
                    height: 37px;
                    left: 211px;
                    top: 167px;
                    background: rgba(234, 54, 54, 0.63);
                    border-radius: 6px;
                    display: block;
                    margin: auto;
                    text-align: center;
                    line-height: 40px;
                    color:White;
                    background: rgba(33, 181, 9, 0.63);
                    border-radius: 6px;                              
				}
                .OkButton:hover{
                    cursor: pointer;
                }
                .TitleText{
                    /* Content */
                    position: absolute;
                    width: 167px;
                    height: 35px;
                    left: 220px;
                    top: 12px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #000000;   
                }
                .MainContent{
                    position: absolute;
                    width: 181px;
                    height: 80px;
                    left: 205px;
                    top: 67px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 16px;                    
                    color: #000000;                 
                }
                
			`}</style>

        </div>
    )
}