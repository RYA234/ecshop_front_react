import { useState, useEffect, useCallback, EventHandler } from "react";

// ページネーション実装 その１
// 一つのファイルで実装している→要リファクタリング

import { MouseEventHandler } from "react";

export default function PaginationCheck() {
  let currentPageNo: number = 2;
  const totalPage: number = 10;
  let selectedPageNo: number;

  let paginationContent: JSX.Element[] = [];

  // useEffect(()=>{
  // 	createPaginationContent(),[];
  // })
  // const createPaginationContent = ()=>{

  // };

  const pagin = () => {
    console.log("実装しました。");
  };

  const backHandler = () => {
    console.log("back button is pressed");
  };

  const nextHandler = () => {
    console.log("next button is pressed");
  };

  const selectNumberHandler = (pg: Number) => {
    console.log(`new pageNo is`);
  };

  // for(let i = 0; i< totalPage; i++){
  // 	paginationContent.push(
  // 		<div className="Child">
  // 				<button className="NumberStyle" onClick={selectNumberHandler(1) as unknown as MouseEventHandler<HTMLButtonElement>} >{i+1}</button>

  // 				 <style jsx>{`
  // 					.NumberStyle{
  // 						background-color:white;
  // 						margin:3px;
  // 						border: none;
  // 					}
  // 					.NumberStyle:hover{
  // 						background-color:gray;
  // 					}
  // 					.SelectedNumber{
  // 						background-color:blue;
  // 					}
  // 			`}</style>
  // 		</div>
  // 	)
  // 	console.log(paginationContent.length)
  // }

  return (
    <>
      <div className="Layout">
        {/* ページ数が最初の時は表示されない */}
        {currentPageNo != 0 && (
          <div className="Child">
            <button className="Font">前へ</button>
          </div>
        )}
        {/* {
			paginationContent.map((content)=>{
				return(
					// eslint-disable-next-line react/jsx-key
					<div className="Child"> 
						{content}
					</div>
				)
			})
		} */}
        {(() => {
          for (let i = 0; i < totalPage; i++) {
            paginationContent.push(
              <>
                <button
                  className="Child"
                  onClick={
                    selectNumberHandler(
                      1
                    ) as unknown as MouseEventHandler<HTMLButtonElement>
                  }
                >
                  {i + 1}
                </button>
              </>
            );
          }
		  
          return <div>{paginationContent}</div>;
        })()}
        {currentPageNo != totalPage && (
          <div className="Child">
            <div className="Font" onClick={nextHandler}>
              次へ
            </div>
          </div>
        )}
        &emsp;
      </div>
      <style jsx>{`
        // 大枠　要素を横並びにする
        .Layout {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        // 子の幅　境界を指定
        .Child {
          flex-basis: auto;
          align-items: center;
          background-color: white;
          margin: 5px;
          border: none;
        }
        // 文字のフォントサイズ　背景色設定
        .Font {
          align-items: center;
          background-color: white;
          text-align: center;
        }

        // マウスオーバー時の背景色
        .Font:hover {
          background-color: gray;
        }
        button {
          background-color: white;
          border: none;
        }
		.Child:hover{
			background-color: gray;
		}
      `}</style>
    </>
  );
}
