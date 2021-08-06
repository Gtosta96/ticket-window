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
import { AppContext } from "../../../../context/AppContext";

const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
    boxShadow: "1px 1px 5px #888888",
  },
  title: {
    fontSize: 14,
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
  const appContext = useContext(AppContext);

  function onRequestClick() {
    appContext.updateOrder(order, { status: "Preparado" });
  }

  function onSentClick() {
    // appContext.updateOrder(order, { status: "Entregue ao Motoboy" });
    appContext.deleteOrder(order);
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={list ? classes.list : classes.card}>
        <Typography className={classes.title} color="textSecondary">
          Pedido #{order.id}
        </Typography>

        <Box>
          <Typography variant="body1" color="textPrimary">
            Plataforma
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {order.platform}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="textPrimary">
            Motoboy
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {order.deliveryMan}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="textPrimary">
            Tempo do Pedido
          </Typography>
          <Typography variant="body2" color="textSecondary">
            7 Minutos
          </Typography>
        </Box>
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
