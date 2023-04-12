import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {orderContext } from "../../pages/checkout";
import { useContext } from "react";
import { CartItemDto } from '../../types/cartItem/cartItemDto';



const useStyles = makeStyles({
  table: {
    minWidth: 10
  },
  productName: {
     width: 200
  },
  price:{
    width: 40
  },
  total:{
    width: 35
  },
  taxRate:{
    width:20
  },
  quantity:{
    width:20
  },
  delete:{
    width:20
  }
});



export default function CartItemTable() {
  const classes = useStyles();
  const { cartItemsResponse, setCartItemsResponse}: any = useContext(orderContext);
  return (
    <TableContainer component={Paper} style={{width: '700px'}}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell className={classes.productName}>商品名</TableCell>
            <TableCell align="right" className={classes.price}>商品価格</TableCell>
            <TableCell align="right" className={classes.quantity}>数量</TableCell>
            <TableCell align="right" className={classes.total}>合計</TableCell>
            <TableCell align="right" className={classes.taxRate}>税率</TableCell>
            <TableCell align="right" className={classes.delete}>削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
        

        {cartItemsResponse ? (
  cartItemsResponse.CartItemDtos.map((item: CartItemDto) => (
    <TableRow key={item.name}>
      <TableCell
        component="th"
        scope="row"
        className={classes.productName}
      >
        {item.name}
      </TableCell>
      <TableCell align="right">{item.price}</TableCell>
      <TableCell align="right">{item.quantity}</TableCell>
      <TableCell align="right">{item.total}</TableCell>
      <TableCell align="right">{item.taxRate}</TableCell>
      <TableCell align="center">
        <button>☓</button>
      </TableCell>
    </TableRow>
  ))
) : (
  <TableRow>
    <TableCell colSpan={6}>カートに商品がありません。</TableCell>
  </TableRow>
)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
