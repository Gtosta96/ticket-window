import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { useContext, useEffect, useRef } from "react";
import { OrdersContext } from "../../../../context/OrdersContext";
import { OrderAlertProps } from "./types";

import audioAlert from "./alert.mp3";

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
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
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
    }, 8000);
    timeout.current = id;

    return () => {
      clearTimeout(timeout.current);
      timeout.current = null;
    };
  }, [updateOrder, order, timeout]);

  return (
    <Box className={classes.root}>
      <audio autoPlay>
        <source src={audioAlert} type="audio/wav" />
      </audio>

      <Box bgcolor="primary.main" color="primary.contrastText" padding="2rem">
        <Typography variant="h1" className={classes.header}>
          ATENÇÃO {order.deliveryMan}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        padding="2rem 0"
        flexGrow={1}
      >
        <Box marginBottom="2rem">
          <Typography variant="h1" className={classes.text} color="error">
            Pedido # {order.orderNumber} - {order.platform}
          </Typography>
        </Box>

        <Typography variant="h1" className={classes.text}>
          RETIRAR PEDIDO NO BALCÃO
        </Typography>
      </Box>
    </Box>
  );
}
