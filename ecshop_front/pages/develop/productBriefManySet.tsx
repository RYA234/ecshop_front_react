

// 検証用引数の数字が中央に表示される
 function Block( props : {count : number} ) {
	return(
		<div >
			<div className ="Block">
				<div className="Font">{props.count}</div>

			</div>			
		<style jsx>{`				
				// コンテンツのサイズ　色
				.Block{
					width:200px;
					height:200px;
					background-color: yellow;
					border:1px solid black;
				}
				// フォントのサイズと位置
				.Font{
					font-size: 50px;
					text-align: center;
					padding:60px 0;

				}
			`}</style>	
		</div>
	)
}


// flexboxで要素を整列できるか検証
// 並べる要素はブロック１０個
export default function ProductBriefManySet(){
	
	// ブロック配列を作成
	const totalNumber : number = 10;
	const blocks : JSX.Element[] = [];
	for(let i = 0; i < totalNumber; i++){
		blocks.push(<Block count={i+1}/>)
	}
	return(
		<>
		<div className="Layout">
		{blocks}			
		</div>

		<style jsx>{`				
				// 大枠左から右に並べる
				// 横幅が一杯になったら下に移動する。
				.Layout{
					display:flex;
					flex-wrap:wrap;
				}
			`}</style>	
		</>
	)
}