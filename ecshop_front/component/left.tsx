export default function Left({ left, top, color, bgColor, height, width }: any) {
	return (
		<div>
			 {/* main description */}
			カテゴリー覧
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