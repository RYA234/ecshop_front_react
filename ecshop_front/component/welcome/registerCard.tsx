import Image from 'next/image';   
import Router  from 'next/router';

   export default function RegisterCard(){
    const content : string =`
ネットスーパーのサービスを\n
ご利用いただくには会員登録\n
が必要です。「新規会員登録\n
ボタンをクリックして登録を\n
行ってください\n`

    const title : string = `会員登録はこちら`

    const registerHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        // todo エラーハンドリングの実装
        Router.push('/register')

    }

    return(
        <div className="LayoutSize">
            <div >
                    <Image className='ImageSize' src='/welcome/register.JPG'
                      height={224}
                      width={193}
                      alt='logo' />
            </div>
            <div className="TitleText">{title}</div>
            <div className="MainContent">{content}</div>
            <button className="OkButton" onClick={registerHandler}>新規会員登録</button>
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
                    left: 211px;
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