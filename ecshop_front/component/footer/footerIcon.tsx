import Image from 'next/image';


export default function FooterIcon(){
    let storybookURL = process.env.NEXT_PUBLIC_FRONTEND_URL + ":6006"
    const iconSize :number = 48;

    return(
        <div>
            {/* <div className="TitleBack"></div> */}
           <div className="TitleText">リンク類</div>
           <div className="Grid">
                <div className='ContentsAlign'>
                    <a href="https://github.com/RYA234/ecshop_front_react" target="_blank" rel="noreferrer">
                        <Image src='/icons/GithubIcon.JPG'
                            width={iconSize} 
                            height={iconSize}
                            alt='logo' />
                    </a>
                    <div>フロントエンドgithub</div>
                </div>
                
                <div className='ContentsAlign'>
                    <a href={storybookURL} target="_blank" rel="noreferrer" >
                        <Image src='/icons/StoryBookIcon.JPG'
                            width={iconSize} 
                            height={iconSize}
                            alt='logo' />
                    </a>
                    <div>Storybook</div>
                </div>

                <div className='ContentsAlign'>
                    <a href="https://github.com/RYA234/springboot-ecshop-rest-api" target="_blank" rel="noreferrer">
                        <Image src='/icons/GithubIcon.JPG'
                            width={iconSize} 
                            height={iconSize}
                            alt='logo' />
                    </a>
                    <div>バックエンドgithub</div>
                </div>               
                
                <div className='ContentsAlign'>
                    <a href="https://ecshoprest-backend.com/swagger-ui/" target="_blank" rel="noreferrer">
                        <Image src='/icons/SwaggerUIIcon.JPG'
                            width={iconSize} 
                            height={iconSize}
                            alt='logo' />
                    </a>
                    <div>SwaggerUI</div>
                </div>           
                <div className='ContentsAlign'>
                    <a href="https://qiita.com/RYA234/items/8dcb1ce01852ebb03afd" target="_blank" rel="noreferrer">
                        <Image src='/icons/QiitaIcon.JPG'
                            width={iconSize} 
                            height={iconSize}
                            alt='logo' />
                    </a>
                    <div>Qiitaでの記録</div>
                </div>
            </div>
			<style jsx>{`
            .Grid{
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                column-gap: 0px;
            }
            .ContentsAlign{
                text-align: center;
            }
            .TitleText{
                width: 100%;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                /* ボックスの高さと同一 */
                color: #FFF4F4;         
                background: #1BE1B2; 
            }
			`}</style>
        </div>
    )
}