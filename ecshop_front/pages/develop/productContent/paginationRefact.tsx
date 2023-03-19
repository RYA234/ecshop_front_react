import { useState } from 'react';
import PaginationV2 from '../../../component/product/paginationV2';

// http://127.0.0.1:3000/develop/productContent/paginationRefact
export default function PaginationRefact(){
    
    const [pageNo,setPageNo] =  useState<number>(1)
    const totalPage : number = 10;
    return(
       <div>
        <PaginationV2 totalPage={10} pageNo={pageNo} setPageNo={setPageNo}/>
       </div> 
    )
}