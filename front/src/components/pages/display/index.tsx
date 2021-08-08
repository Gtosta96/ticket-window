import { useContext, useEffect, useMemo, useState } from "react";
import OrderAlert from "./OrderAlert";
import { Box, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { OrdersContext } from "../../../context/OrdersContext";
import OrderCard from "../management/OrderCard";
import { differenceInSeconds } from "date-fns";
import { Order } from "../../../services/orders/types";
import { SettingsContext } from "../../../context/SettingsContext";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontWeight: "normal",
    textAlign: "center",
    textTransform: "uppercase",
  },
  containerOrderCard: {
    padding: "1rem",
    borderTop: `10px solid ${theme.palette.primary.main}`,
    textAlign: "center",
    flexGrow: 1,
  },
  containerTimer: {
    padding: "1rem",
    borderTop: `10px solid ${theme.palette.primary.main}`,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  imageLogo: {
    position: "absolute",
    height: "100%",
    borderRadius: "100%",
  },
}));

function getOrdersToAlert(orders: Order[]) {
  const ordersToAlert = orders.filter((order) => {
    const diffInSeconds = differenceInSeconds(
      new Date(),
      new Date(order.updatedAt)
    );

    return order.alerts === 0 || diffInSeconds >= 30;
  });

  return ordersToAlert;
}

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
    const ordersToAlert = getOrdersToAlert(readyOrders);
    setOrdersToAlertQueue(ordersToAlert);
  }, [readyOrders]);

  useEffect(() => {
    const timeout = setInterval(() => {
      const ordersToAlert = getOrdersToAlert(readyOrders);
      setOrdersToAlertQueue(ordersToAlert);
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  }, [readyOrders]);

  return (
    <Box
      display="flex"
      gridGap="2rem"
      flexGrow={1}
      maxWidth="1280px"
      margin="0 auto"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h3" className={classes.header} gutterBottom>
          Prontos para retirada
        </Typography>
        <Paper className={classes.containerOrderCard}>
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
          Tempo de espera
        </Typography>

        <Box marginBottom="2rem">
          <Paper>
            <Typography variant="h2" className={classes.containerTimer}>
              {settingsContext.waitingTime} min
            </Typography>
          </Paper>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexGrow={1}
          position="relative"
        >
          <img
            className={classes.imageLogo}
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
