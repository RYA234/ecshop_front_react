interface Props{
    title:string;
    content:string
}

export default function FooterContent(props : Props) {
    return(
        <div className=''>
            <div className='TitleText'>{props.title}</div>
            <div className='MainContent'>{props.content}</div>
            <style jsx>{`
                .TitleText{
                    top: 4px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: px;
                    /* ボックスの高さと同一 */
                    color: #FFF4F4;
                    background: #1BE1B2;
                    border-radius: 0.125rem; /* 2px */
                }
                .MainContent{
                    /* MainContent */
                    // position: absolute;
                    height: 50px;                    
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