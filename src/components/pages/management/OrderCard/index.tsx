import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { SendRounded, TvRounded } from "@material-ui/icons";
import { CardProps } from "./types";
import { OrdersContext } from "../../../../context/OrdersContext";
import { deliveryPlatforms } from "../../../../services/orders/types";

const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
    minWidth: "200px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gridGap: "1rem",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gridGap: "1rem",
  },
});

export default function OrderCard({ order, list }: CardProps) {
  const classes = useStyles();
  const ordersContext = useContext(OrdersContext);

  function onRequestClick() {
    const time = new Date().getTime();

    ordersContext.updateOrder(order, {
      status: "Preparado",
      readyAt: time,
      updatedAt: time,
    });
  }

  function onSentClick() {
    // const time = new Date().getTime();

    // ordersContext.updateOrder(order, {
    //   status: "Entregue ao Motoboy",
    //   deliveryAt: time,
    //   updatedAt: time,
    // });
    ordersContext.deleteOrder(order);
  }

  const platformImg = deliveryPlatforms.find(
    (platform) => platform.value === order.platform
  ).img;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={list ? classes.list : classes.card}>
        <Box flexGrow={0} flexShrink={0} flexBasis={0}>
          <Typography variant="h5" color="textPrimary">
            Pedido #{order.orderNumber}
          </Typography>
        </Box>

        <Box flexGrow={0} flexShrink={0} flexBasis={0}>
          <Typography variant="body2" color="textSecondary">
            Plataforma
          </Typography>
          {/* <Typography variant="h5" color="textPrimary">
            {order.platform}
          </Typography> */}
          <img
            width={100}
            height={50}
            style={{ objectFit: "contain" }}
            src={platformImg}
            alt={order.platform}
          />
        </Box>

        <Box flexGrow={0} flexShrink={0} flexBasis={0}>
          <Typography variant="body2" color="textSecondary">
            Motoboy
          </Typography>
          <Typography variant="h5" color="textPrimary">
            {order.deliveryMan}
          </Typography>
        </Box>

        {/* <Box flexGrow={1} flexShrink={0} flexBasis="20%">
          <Typography variant="body1" color="textPrimary">
            Última atualização
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {format(new Date(order.updatedAt), "hh:mm")}
          </Typography>
        </Box> */}
        {/* Retirado campo Ultima atualização */}
      </CardContent>

      {!list && (
        <CardActions>
          {order.status === "Em Preparação" && (
            <Button
              onClick={onRequestClick}
              size="small"
              variant="contained"
              color="primary"
              endIcon={<TvRounded fontSize="small" />}
              fullWidth
            >
              Chamar
            </Button>
          )}

          {order.status === "Preparado" && (
            <Button
              onClick={onSentClick}
              size="small"
              variant="contained"
              color="secondary"
              endIcon={<SendRounded fontSize="small" />}
              fullWidth
            >
              Pedido Entregue
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
