import { useState, useEffect, useCallback, EventHandler } from "react";

// ページネーション実装 その１
// 一つのファイルで実装している→要リファクタリング
// コンポーネント化の必要あり　RESTAPIは空にしている
import { MouseEventHandler } from "react";

export default function PaginationCheck() {
  const [currentPageNo,setCurrentPageNo] =  useState<number>(1);
  const totalPage: number = 10;
  const categoryId = 2;
  let paginationContent: JSX.Element[] = [];

  // 前へボタンを押したときの処理
  const backHandler = () => {
	setCurrentPageNo(currentPageNo-1);
	getPaginationProduct(currentPageNo)
  };

  // 次へボタンを押したときの処理
  const nextHandler = () => {
	setCurrentPageNo(currentPageNo+1);
	getPaginationProduct(currentPageNo)
  };

  // ページ番号を押したときの処理
  const selectNumberHandler = (pg: number) => {
	setCurrentPageNo(pg);
	getPaginationProduct(currentPageNo)
  };

  // RestApiを呼ぶ関数
  const getPaginationProduct = (page: number) => {
	// 実装前
	console.log(`RestApiの呼び出し処理は入っていません。categoryId:${categoryId} 現在のページ:${currentPageNo}`)
  }
  return (
    <>
	<h1>ページネーション検証</h1>
	<div>cssとreactのみで実装</div>
      <div className="Layout">
		{/* 前のページに戻る-ページ数が最初の場合は表示されない */}
	    <div className="Child">
        {currentPageNo != 1 ? 
            <button className="Font" onClick={backHandler}>前へ</button>
			:<div className="Font"> &emsp; &emsp;</div>  // 「前へ」ボタンが非表示でもレイアウトを維持するための処置。（何もしないと崩れる）
		}
		</div>
		{/*  即時関数を使って1からtotalNumberの数字を作成する。クリックすると押した番号のデータを取得するrestapiを呼ぶ関数を実行する */}
        {(() => {
          for (let i = 0; i < totalPage; i++) {
            paginationContent.push(
              <>  
                <button
				className= { currentPageNo== i+1 ?  'SelectedChild' :'Child'} 	  
				  onClick={()=>selectNumberHandler(i+1)}
                >
                  {i + 1}
                </button>
              </>
            );
          }
		  
          return <div>{paginationContent}</div>;
        })()}

		{/* 次のページへ進む-ページ数が最後の場合は表示されない */}
		<div className="Child">
        {currentPageNo != totalPage ? 
            <button className="Font" onClick={nextHandler}>次へ</button>
        	:<div className="Font"> &emsp; &emsp;</div>  // レイアウトを維持するために空欄を入れる
		}
	</div>
        &emsp;
      </div>
      <style jsx>{`
        // 大枠　要素を横並びにする
        .Layout {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        // 子の幅 間隔を決定する
        .Child {
          flex-basis: auto;
          align-items: center;
          background-color: white;
          margin: 3px;
          border: none;
        }
		// 現在のページを明示するために背景色を変える　透明な青色とする
		.SelectedChild{
			flex-basis: auto;
			align-items: center;
			background-color: #1c5bcf85;
			margin: 5px;
			border: none;
		}
		
        // 文字のフォントサイズ　背景色設定
        .Font {
          align-items: center;
          background-color: white;
          text-align: center;
        }
        // マウスオーバー時の背景色は透明な灰色
        button.Font:hover {
          background-color: #1c5bcf85;
        }
		// 子要素のボタン感を無くすために　色と境界線を無くす
        button {
          background-color: white;
          border: none;
        }
      `}</style>
    </>
  );
}
