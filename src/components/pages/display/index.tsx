import { useContext, useEffect, useMemo, useState } from "react";
import OrderAlert from "./OrderAlert";
import { Box, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { OrdersContext } from "../../../context/OrdersContext";
import OrderCard from "../management/OrderCard";
import { Order } from "../../../services/orders/types";
import { SettingsContext } from "../../../context/SettingsContext";
import { getOrdersToAlert } from "./helpers";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  containerOrderCard: {
    padding: "1rem",
    borderTop: `10px solid ${theme.palette.primary.main}`,
    textAlign: "center",
    width: "670px",
    flexGrow: 1,
  },
  containerTimer: {
    padding: "1rem",
    borderTop: `10px solid ${theme.palette.primary.main}`,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  logo: {
    width: "100%",
    position: "absolute",
    objectFit: "contain",
    borderRadius: "100%",
  },
}));

function Display() {
  const classes = useStyles();
  const ordersContext = useContext(OrdersContext);
  const settingsContext = useContext(SettingsContext);

  const [ordersToAlertQueue, setOrdersToAlertQueue] = useState<Order[]>([]);

  const readyOrders = useMemo(
    () => ordersContext.orders.filter((order) => order.status === "Preparado"),
    [ordersContext.orders]
  );

  useEffect(() => {
    const ordersToAlert = getOrdersToAlert(readyOrders, 0);
    setOrdersToAlertQueue(ordersToAlert);
  }, [readyOrders]);

  useEffect(() => {
    const timeout = setInterval(() => {
      const ordersToAlert = getOrdersToAlert(
        readyOrders,
        settingsContext.alertInterval
      );
      console.table(ordersToAlert);
      setOrdersToAlertQueue(ordersToAlert);
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  }, [readyOrders, settingsContext.alertInterval]);

  return (
    <Box
      display="flex"
      gridGap="10rem"
      flexGrow={1}
      maxWidth="1280px"
      margin="0 auto"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h3" className={classes.header} gutterBottom>
          Pedidos prontos
        </Typography>
        <Paper className={classes.containerOrderCard} elevation={3}>
          {readyOrders.length > 0 ? (
            readyOrders.map((order) => (
              <OrderCard key={order.id} order={order} list />
            ))
          ) : (
            <Typography variant="h6" color="textSecondary">
              Nenhum pedido
            </Typography>
          )}
        </Paper>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="h3" className={classes.header} gutterBottom>
          Tempo estimado
        </Typography>

        <Box marginBottom="2rem">
          <Paper elevation={3}>
            <Typography variant="h2" className={classes.containerTimer}>
              {settingsContext.waitingTime} min
            </Typography>
          </Paper>
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
            alt="logo"
            src="./assets/img/logo1.jpg"
          />
        </Box>
      </Box>

      {ordersToAlertQueue.map((order) => {
        return <OrderAlert key={order.id} order={order} />;
      })}
    </Box>
  );
}

export default Display;
