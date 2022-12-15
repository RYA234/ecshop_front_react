export default function Footer({ left, top, color, bgColor, height, width }: any) {
	return (
		< >
			<header>Footer</header>
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
