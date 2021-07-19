import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import clsx from "clsx";
import { blue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "10px",
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

export default function PedidoCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const numero = 10;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <MotorcycleIcon />
          </Avatar>
        }
        title={
          <Typography variant="body1" color="textPrimary" component="p">
            <b>
              PEDIDO NUMERO <i>{numero}</i>
            </b>
          </Typography>
        }
      />

      <CardContent>
        <FormLabel>
          <Typography variant="body1" color="textPrimary" component="p">
            <b>Nome do Cliente:</b> JOÃO DA SILVA
          </Typography>

          <Typography variant="body1" color="textPrimary" component="p">
            <b>Numero do Pedido:</b> 10
          </Typography>

          <Typography variant="body1" color="textPrimary" component="p">
            <b>Plataforma Solicitada:</b> IFOOD
          </Typography>

          <Typography variant="body1" color="textPrimary" component="p">
            <b>Nome Motoboy:</b> Bruno Cardoso
          </Typography>

          <Typography variant="body1" color="textPrimary" component="p">
            <b>Tempo do Pedido:</b> 7 Minutos
          </Typography>
        </FormLabel>
      </CardContent>

      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Excluir pedido
      </Button>
    </Card>
  );
}
