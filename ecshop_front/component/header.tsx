export default function Header({ left, top, color, bgColor, height, width }: any) {
	return (
		< >
			<header>Header</header>
			<style jsx>{`
				header{			
					position:absolute;
					left:${left}px;
					top:${top}px;
					width:${width}px;
					height:${height}px;
					color:${color};
					background:${bgColor};	
				}
			`}</style>
		</>

	)
}