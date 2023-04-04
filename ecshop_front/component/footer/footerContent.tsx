interface Props{
    title:string;
    content:string
}

export default function FooterContent(props : Props) {

    return(
        <div className='LayoutSize'>
            <div className='TitleBack'></div>
            <div className='TitleText'>{props.title}</div>
            <div className='MainContent'>{props.content}</div>
            <style jsx>{`
                .LayoutSize{
                    position: absolute;
                    width: 500px;
                    height: 98px;
                }
				.TitleBack{
                    position: absolute;
                    width: 131px;
                    height: 24px;
                    left: 0px;
                    top: 0px;
                    background: #1BE1B2;				
				}
                .TitleText{
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
                .MainContent{
                    /* MainContent */


                    position: absolute;
                    height: 50px;
                    left: -2px;
                    top: 29px;
                    
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 8px;
                    line-height: 10px;
                    white-space: pre-wrap;
                    color: #000000;                    
                }
                
			`}</style>
        </div>
        
    )
}