import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  Icon,
  Divider,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { blue } from "@material-ui/core/colors";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import { Send, SendRounded, TvRounded } from "@material-ui/icons";
import { CardProps } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    card: {
      maxWidth: 300,
      margin: "10px 10px",
      padding: "5px 5px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: blue[500],
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

export default function PedidoCard(props: CardProps) {
  const classes = useStyles();
  const numero = 10;

  console.log(props.card);

  const [statePedidoFinalizado, setStatePedidoFinalizado] =
    React.useState(false);
  const [statePedidoChamado, setStatePedidoChamado] = React.useState(false);

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
              # <i>{numero}</i>
            </b>
          </Typography>
        }
      />

      <CardContent>
        <FormLabel>
          <Typography display="inline" color="textPrimary" component="p">
            <b>Nome do Cliente:</b>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            JOÃO DA SILVA
          </Typography>

          <Typography
            justify-content="center"
            variant="body2"
            color="textPrimary"
            component="p"
          >
            <b>Numero do Pedido:</b>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            10
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Plataforma:</b>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            IFOOD
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Motoboy:</b>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Bruno Cardoso
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Tempo do Pedido:</b>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            7 Minutos
          </Typography>
        </FormLabel>
      </CardContent>

      <Grid container alignItems="center" className={classes.card}>
        <Button
          disabled={statePedidoChamado}
          onClick={() => {
            console.log("Solicitado ao motoboy a retirada no balcão!");
            setStatePedidoChamado(true);
          }}
          size="small"
          variant="contained"
          component="span"
          color="primary"
          className={classes.button}
          endIcon={
            <Icon>
              <TvRounded fontSize="small" />
            </Icon>
          }
        >
          CHAMAR
        </Button>
        <Divider orientation="horizontal" flexItem />
        <Button
          disabled={statePedidoFinalizado}
          onClick={() => {
            setStatePedidoFinalizado(true);
          }}
          size="small"
          variant="contained"
          component="span"
          color="secondary"
          className={classes.button}
          endIcon={
            <Icon>
              <SendRounded fontSize="small" />
            </Icon>
          }
        >
          Finalizar
        </Button>
      </Grid>
    </Card>
  );
}
