export default function Header({ left, top, color, bgColor, height, width }: any) {
	return (
		<div>
		<header>
				ヘッダー
		</header>
			<style jsx>{`
				div{			
					// position:fixed;
					// left:${left}px;
					// top:${top}px;
					// width: 100%;
				    //  height:${height}px;
					// color:${color};
					// background:${bgColor};	
					z-index:2;
					
				}
			`}</style>
		</div>

	)
}