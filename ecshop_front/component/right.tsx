



export default function Right({ left, top, color, bgColor, height, width }: any) {
	return (
		<div>
			買い物かご
			 {/* main description */}
			<style jsx>{`
				div{
					position:fixed;
					left:${left}px;
					top:${top}px;
					width:${width}px;
					//height:${height}px;
					height:100%;
					color:${color};
					background:${bgColor};	
				}
			`}</style>
		</div>
	)
}