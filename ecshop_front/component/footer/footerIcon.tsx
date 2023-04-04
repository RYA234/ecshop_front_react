import Image from 'next/image';


export default function FooterIcon(){
    let storybookURL = process.env.NEXT_PUBLIC_FRONTEND_URL + ":6006"

    return(
        <div>
            <div className="TitleBack"></div>
            <div className="TitleText">リンク類</div>

            <div className='FrontEndTextStyle'>フロントエンド</div>
            <div className='FrontEndGithubIcon'>
                <a href="https://github.com/RYA234/ecshop_front_react">
                    <Image src='/icons/GithubIcon.JPG'
                        width={16} 
                        height={16}
                        alt='logo' />
                </a>
            </div>

            <div className='StoryBookIcon'>
                <a href={storybookURL}>
                    <Image src='/icons/StoryBookIcon.JPG'
                        width={16} 
                        height={16}
                        alt='logo' />
                </a>
            </div>
            <div className='BackEndTextStyle'>バックエンド</div>
            <div className='BackEndGithubIcon'>
                <a href="https://github.com/RYA234/springboot-ecshop-rest-api">
                    <Image src='/icons/GithubIcon.JPG'
                        width={16} 
                        height={16}
                        alt='logo' />
                </a>
            </div>

            <div className='SwaggerUIIcon'>
                <a href="https://ecshoprest-backend.com/swagger-ui/">
                    <Image src='/icons/SwaggerUIIcon.JPG'
                        width={16} 
                        height={16}
                        alt='logo' />
                </a>
            </div>

            <div className='OtherTextStyle'>その他</div>
            <div className='QiitaIcon'>
                <a href="https://qiita.com/RYA234/items/8dcb1ce01852ebb03afd">
                    <Image src='/icons/QiitaIcon.JPG'
                        width={16} 
                        height={16}
                        alt='logo' />
                </a>
            </div>


			<style jsx>{`
            .FrontEndTextStyle{
                /* FrontText */
                position: absolute;
                height: 10px;
                left: -2px;
                top: 30px;
                
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 8px;
                line-height: 10px;
                /* ボックスの高さと同一 */                
                color: #000000;                                
            }				
            .FrontEndGithubIcon{
                position: absolute;
                width: 15.06px;
                height: 16px;
                left: -2px;
                top: 40px;                
            }
            .StoryBookIcon{
                position: absolute;
                width: 15.06px;
                height: 16px;
                left: 15px;
                top: 40px;                
            }

            .BackEndTextStyle{
                /* BackText */
                position: absolute;
                width: 65px;
                height: 10px;
                left: 0px;
                top: 61px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 8px;
                line-height: 10px;
                /* ボックスの高さと同一 */
                color: #000000;                
            }
            .BackEndGithubIcon{
                position: absolute;
                width: 16px;
                height: 17px;
                left: -2px;
                top: 70px;                
            }
            .SwaggerUIIcon{
                position: absolute;
                width: 16px;
                height: 16px;
                left: 15px;
                top: 70px;
            }

            .OtherTextStyle{
                /* QitaText */


                position: absolute;
                width: 65px;
                height: 10px;
                left: -2px;
                top: 91px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 8px;
                line-height: 10px;
                /* ボックスの高さと同一 */
                
                
                color: #000000;
            }

            .QiitaIcon{
                /* QiitaIcon */
                position: absolute;
                width: 16px;
                height: 16px;
                left: -2px;
                top: 103px;                
            }
            .TitleBack{
                /* タイトルの背景 */


                position: absolute;
                width: 131px;
                height: 24px;
                left: 0px;
                top: 0px;
                
                background: #1BE1B2;
            }
            .TitleText{
                /* タイトル */
                position: absolute;
                width: 119px;
                height: 15px;
                left: 12px;
                top: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                color: #FFF4F4;          
            }


			`}</style>
        </div>
    )
}