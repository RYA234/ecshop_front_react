import Image from 'next/image';


export default function FooterIcon(){
    let storybookURL = process.env.NEXT_PUBLIC_FRONTEND_URL + ":6006"
    const iconSize :number = 48;

    return(
        <div>
            <div className="TitleBack"></div>
            <div className="TitleText">リンク類</div>

           
            <div className='FrontEndGithubIcon'>
                <a href="https://github.com/RYA234/ecshop_front_react" target="_blank" rel="noreferrer">
                    <Image src='/icons/GithubIcon.JPG'
                        width={iconSize} 
                        height={iconSize}
                        alt='logo' />
                </a>
            </div>
            <div className='FrontEndGithubText'>フロントエンドgithub</div>
            
            <div className='StoryBookIcon'>
                <a href={storybookURL} target="_blank" rel="noreferrer" >
                    <Image src='/icons/StoryBookIcon.JPG'
                        width={iconSize} 
                        height={iconSize}
                        alt='logo' />
                </a>
            </div>
            <div className='StoryBookText'>Storybook</div>
            

            <div className='BackEndGithubIcon'>
                <a href="https://github.com/RYA234/springboot-ecshop-rest-api" target="_blank" rel="noreferrer">
                    <Image src='/icons/GithubIcon.JPG'
                        width={iconSize} 
                        height={iconSize}
                        alt='logo' />
                </a>
            </div>
            <div className='BackEndGithubText'>バックエンドgithub</div>
            <div className='SwaggerUIIcon'>
                <a href="https://ecshoprest-backend.com/swagger-ui/" target="_blank" rel="noreferrer">
                    <Image src='/icons/SwaggerUIIcon.JPG'
                        width={iconSize} 
                        height={iconSize}
                        alt='logo' />
                </a>
            </div>
            <div className='SwaggerText'>SwaggerUI</div>
        
            <div className='QiitaIcon'>
                <a href="https://qiita.com/RYA234/items/8dcb1ce01852ebb03afd" target="_blank" rel="noreferrer">
                    <Image src='/icons/QiitaIcon.JPG'
                        width={iconSize} 
                        height={iconSize}
                        alt='logo' />
                </a>
            </div>
            <div className='QiitaText'>Qiitaでの記録</div>


			<style jsx>{`
            .FrontEndTextStyle{
                position: absolute;
                width: 121px;
                height: 15px;
                left: 6px;
                top: 72px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                
                
                color: #000000;                              
            }	
            .FrontEndGithubText{
                position: absolute;
                width: 121px;
                height: 15px;
                left: 6px;
                top: 72px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                
                
                color: #000000;    
            }			
            .FrontEndGithubIcon{
                position: absolute;
                width: 48px;
                height: 48px;
                left: 41px;
                top: 24px;
                             
            }
            .StoryBookText{
                position: absolute;
                width: 60px;
                height: 15px;
                left: 141px;
                top: 72px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                
                
                color: #000000;
                
            }
            .StoryBookIcon{
                position: absolute;
                width: 48px;
                height: 48px;
                left: 149px;
                top: 24px;              
            }

            .BackEndGithubText{
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
                width: 48px;
                height: 48px;
                left: 43px;
                top: 98px;               
            }
            .BackEndGithubText{
                position: absolute;
                width: 109px;
                height: 15px;
                left: 6px;
                top: 144px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                
                
                color: #000000;                
            }
            .SwaggerUIIcon{
                position: absolute;
                width: 48px;
                height: 48px;
                left: 149px;
                top: 98px;
            }
            .SwaggerText{
                position: absolute;
                width: 65px;
                height: 10px;
                left: 139px;
                top: 146px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                
                color: #000000;               
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
                position: absolute;
                width: 48px;
                height: 48px;
                left: 251px;
                top: 98px;               
            }
            .QiitaText{
                position: absolute;
                width: 82px;
                height: 10px;
                left: 234px;
                top: 145px;
                
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                
                color: #000000;                
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