import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { useContext, useEffect, useRef } from "react";
import { OrdersContext } from "../../../../context/OrdersContext";
import { OrderAlertProps } from "./types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.paper,
    zIndex: 9999,
  },
  header: {
    fontSize: "7.25rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  alert: {
    fontSize: "4.25rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  ticket: {
    fontSize: "7.25rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  number: {
    fontSize: "12rem",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  withdraw: {
    fontSize: "5.25rem",
    fontWeight: "bold",
    textDecoration: "underline",
    textAlign: "center",
  },
}));

export default function OrderAlert({ order }: OrderAlertProps) {
  const classes = useStyles();
  const { updateOrder } = useContext(OrdersContext);
  let timeout = useRef(null); // outside react lifecycle

  useEffect(() => {
    if (timeout.current) {
      return;
    }

    const id: any = setTimeout(() => {
      updateOrder(order, {
        alerts: order.alerts + 1,
        updatedAt: new Date().getTime(),
      });
    }, 3000);
    timeout.current = id;

    return () => {
      clearTimeout(timeout.current);
      timeout.current = null;
    };
  }, [updateOrder, order, timeout]);

  return (
    <Box className={classes.root}>
      <Box bgcolor="primary.main" color="primary.contrastText">
        <Typography className={classes.header}>ATENÇÃO</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        flexGrow={1}
      >
        <Typography className={classes.ticket}>PEDIDO NÚMERO</Typography>
        <Typography className={classes.number} color="error">
          {order.orderNumber}
        </Typography>
        <Typography className={classes.withdraw}>
          RETIRAR PEDIDO NO BALCÃO
        </Typography>
      </Box>
    </Box>
  );
}
