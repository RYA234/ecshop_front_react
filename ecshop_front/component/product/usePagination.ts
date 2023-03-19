import { Dispatch, SetStateAction } from "react";

export default function usePagination(props:{totalPage:number ,pageNo:number, setPageNo:Dispatch<SetStateAction<number>>}){
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
    return{paginationContent, backHandler, nextHandler, selectNumberHandler}
}