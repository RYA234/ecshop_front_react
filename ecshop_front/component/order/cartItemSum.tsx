import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@material-ui/core";
import { CartItemResponse } from "../../types/cartItem/cartItemResponse";
import { orderContext } from "../../pages/checkout";
import { useContext } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 10,
  },
  title: {
    width: 20,
  },
  value: {
    width: 10,
  },
  sumTitle: {
    width: 20,
    color: "red",
  },
  sumValue: {
    color: "red",
    width: 10,
  },
});

export default function CartItemSum() {
  const classes = useStyles();
  const { cartItemResponse, setCartItemResponse }: any =
    useContext(orderContext);
  return (
    <TableContainer component={Paper} style={{ width: "250px" }}>
      <Table>
        <TableHead>
          <TableCell key={0} className={classes.title}>
            {"商品小計"}
          </TableCell>
          <TableCell key={1} className={classes.value}>
            {cartItemResponse?.productCost + " 円"}
          </TableCell>
        </TableHead>
        <TableBody>
          <TableRow key={0}>
            <TableCell className={classes.title}>{"発送料"}</TableCell>
            <TableCell className={classes.value}>
              {cartItemResponse?.shippingCost + " 円"}
            </TableCell>
          </TableRow>
          <TableRow key={0}>
            <TableCell key={1} className={classes.sumTitle}>
              {"合計"}
            </TableCell>
            <TableCell key={1} className={classes.sumValue}>
              {cartItemResponse?.total + " 円"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
