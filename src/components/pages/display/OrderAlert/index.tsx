import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { useContext, useEffect, useRef } from "react";
import { OrdersContext } from "../../../../context/OrdersContext";
import { OrderAlertProps } from "./types";

import audioAlert from "./alert.mp3";
import { deliveryPlatforms } from "../../../../services/orders/types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.background.paper,
    zIndex: 999,
  },
  header: {
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  logo: {
    width: "80%",
    height: "80%",
    position: "absolute",
    objectFit: "contain",
  },
}));

export default function OrderAlert({ order }: OrderAlertProps) {
  const classes = useStyles();
  const { updateOrder } = useContext(OrdersContext);
  let timeout = useRef(null);

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

  const platformImg = deliveryPlatforms.find(
    (platform) => platform.value === order.platform
  ).img;

  return (
    <Box className={classes.root}>
      <audio autoPlay>
        <source src={audioAlert} type="audio/mp3" />
      </audio>

      <Box bgcolor="primary.main" color="primary.contrastText" padding="2rem">
        <Typography variant="h1" className={classes.header}>
          ATENÇÃO {order.deliveryMan}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        padding="2rem 0"
        flexGrow={1}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" className={classes.text} color="secondary">
            Pedido #{order.orderNumber}
          </Typography>
        </Box>

        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexGrow={1}
        >
          <img
            className={classes.logo}
            src={platformImg}
            alt={order.platform}
          />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" className={classes.text}>
            RETIRE SEU PEDIDO
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
