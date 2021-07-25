import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import { SendRounded, TvRounded } from "@material-ui/icons";
import { CardProps } from "./types";
import { AppContext } from "../../../../context/AppContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 300,
      margin: "10px 10px",
      padding: "5px 5px",
    },
    avatar: {
      backgroundColor: blue[500],
    },
    button: {
      width: `100%`,
    },
  })
);

export default function PedidoCard({ order }: CardProps) {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  function onRequestClick() {
    appContext.updateOrder(order, { status: "Preparado" });
  }

  function onSentClick() {
    appContext.updateOrder(order, { status: "Entregue ao Motoboy" });
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="pedido" className={classes.avatar}>
            <MotorcycleIcon />
          </Avatar>
        }
        title={
          <Typography variant="body1" color="textPrimary" component="p">
            <b>
              # <i>{order.id}</i>
            </b>
          </Typography>
        }
      />

      <CardContent>
        <FormLabel>
          <Box marginBottom="0.5rem">
            <Typography variant="body1" color="textPrimary" component="p">
              <b>Plataforma</b>
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {order.platform}
            </Typography>
          </Box>

          <Box marginBottom="0.5rem">
            <Typography variant="body1" color="textPrimary" component="p">
              <b>Motoboy</b>
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {order.deliveryMan}
            </Typography>
          </Box>

          <Box marginBottom="0.5rem">
            <Typography variant="body1" color="textPrimary" component="p">
              <b>Tempo do Pedido</b>
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              7 Minutos
            </Typography>
          </Box>
        </FormLabel>
      </CardContent>

      <Box>
        {order.status === "Em Preparação" && (
          <Button
            onClick={onRequestClick}
            size="small"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<TvRounded fontSize="small" />}
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
            className={classes.button}
            endIcon={<SendRounded fontSize="small" />}
          >
            Pedido Entregue
          </Button>
        )}
      </Box>
    </Card>
  );
}
