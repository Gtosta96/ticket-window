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
} from "@material-ui/core";
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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`PEDIDO NUMERO ${numero}`}
        subheader="September 14, 2016"
      />
      <CardContent>
        <FormLabel>
          <Typography variant="body1" color="textPrimary" component="p">
            Nome do Cliente: JOÃO DA SILVA
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            Numero do Pedido: 10
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            Plataforma Solicitada: IFOOD
          </Typography>
        </FormLabel>
      </CardContent>
      <CardActions disableSpacing>
        <Typography color="textSecondary">Mais Informações</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Motoboy da Entrega: Bigode da CGZINHA
          </Typography>
          <Typography paragraph>Tempo do Pedido: 7 Minutos</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
