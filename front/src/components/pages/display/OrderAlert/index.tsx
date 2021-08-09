import {
  Box,
  CardMedia,
  Container,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
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
    fontWeight: "bold",
  },
  logocontainer: {
    justifyContent: "center",
  },
  logoimg: {
    width: "800px",
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
        justifyContent="space-between"
        alignItems="center"
        padding="2rem 0"
        flexGrow={1}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" className={classes.text} color="error">
            Pedido #{order.orderNumber}
          </Typography>
        </Box>

        {order.platform === "iFood" ? (
          <Box className={classes.logocontainer}>
            <img
              className={classes.logoimg}
              src="/assets/img/ifood.png"
              alt="ifood"
            />
          </Box>
        ) : order.platform === "Uber Eats" ? (
          <Box className={classes.logocontainer}>
            <img
              className={classes.logoimg}
              src="/assets/img/ubereats.png"
              alt="Uber Eats"
            />
          </Box>
        ) : order.platform === "99Food" ? (
          <Box className={classes.logocontainer}>
            <img
              className={classes.logoimg}
              src="/assets/img/99.png"
              alt="99Food"
            />
          </Box>
        ) : order.platform === "Interno" ? (
          <Box className={classes.logocontainer}>
            <img
              className={classes.logoimg}
              src="/assets/img/interno.png"
              alt="Interno"
            />
          </Box>
        ) : (
          console.log("Outro")
        )}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" className={classes.text}>
            RETIRAR PEDIDO NO BALCÃO
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
