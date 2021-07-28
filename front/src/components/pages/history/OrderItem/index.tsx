import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Avatar, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import { CardProps } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      width: "10%",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
    card: {
      maxWidth: 800,
      maxHeight: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: "10px 10px",
      padding: "5px 5px",
      border: "1px solid",
      alignItems: "center",
    },
    avatar: {
      backgroundColor: blue[500],
    },
    button: {
      margin: theme.spacing(1),
    },
    data: {
      display: "flex",
      flexDirection: "column",
      fontSize: 14,
      padding: 8,
    },
  })
);

export default function OrderItem(props: CardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="pedido" className={classes.avatar}>
            <MotorcycleIcon />
          </Avatar>
        }
        title={
          <Typography variant="body1" color="textPrimary" component="div">
            <b>
              # <i>{props.order.id}</i>
            </b>
          </Typography>
        }
      />

      <Typography component="div" className={classes.data}>
        <b>Plataforma</b>
        {props.order.platform}
      </Typography>
      <Typography component="div" className={classes.data}>
        <b>Motoboy</b>
        {props.order.deliveryMan}
      </Typography>
      <Typography className={classes.data}>
        <b>Tempo</b>7 Minutos
      </Typography>
    </Card>
  );
}
