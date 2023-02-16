import { setHttpClientAndAgentOptions } from "next/dist/server/config";
import { useState, useEffect, useCallback, EventHandler, SetStateAction, Dispatch, useContext } from "react";
import { MouseEventHandler } from "react";
import { mainContext } from './index';

/**
 * @remarks ページネーション　コンポーネント
 * 			親コンポーネントに現在のページ数を渡します。
 * 			RestApiを呼ぶ関数は親コンポーネント側で行います。
 *  		           
 * @param totalPage: 総ページ数：固定値として使われる想定
 * @param pageNo:現在のページ番号を取得する useState[pageNo, setPageNo]の１つ目の引数
 * @param setPageNo:現在のページ番号を更新する useState[page,setPage]の２つ目の引数
 */
export default function PaginationV2(props:{totalPage:number ,pageNo:number, setPageNo:Dispatch<SetStateAction<number>>}) {
  let currentPageNo = 1;
  const totalPage: number = 10;
  let paginationContent: JSX.Element[] = [];

  // 前へボタンを押したときの処理
  const backHandler = () => {
	props.setPageNo( props.pageNo - 1)
  };

  // 次へボタンを押したときの処理
  const nextHandler = () => {
	props.setPageNo(props.pageNo + 1)
	console.log(props.pageNo);
  };

  // ページ番号を押したときの処理
  const selectNumberHandler = (pg: number) => {
	props.setPageNo(pg)
  };

  return (
    <>
      <div className="Layout">
		{/* 前のページに戻る-ページ数が最初の場合は表示されない */}
	    <div className="Child">
        {props.pageNo != 1 ? 
            <button className="Font" onClick={backHandler}>前へ</button>
			:<div className="Font"> &emsp; &emsp;</div>  // 「前へ」ボタンが非表示でもレイアウトを維持するための処置。（何もしないと崩れる）
		}
		</div>
		{/*  即時関数を使って1からtotalNumberの数字を作成する。クリックすると押した番号のデータを取得するrestapiを呼ぶ関数を実行する */}
        {(() => {
          for (let i = 0; i < props.totalPage; i++) {
            paginationContent.push(
              <>  
                <button
				className= { props.pageNo== i+1 ?  'SelectedChild' :'Child'} 	  
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
        {props.pageNo != props.totalPage ? 
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
        button:hover {
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
