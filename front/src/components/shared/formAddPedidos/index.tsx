import React, { useEffect } from "react";
import "../../../assets/css/index.css";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlataformaSelector from "./plataformaSelector";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "grid",
    justifyContent: "center",
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  text: {
    color: "black",
    paddingTop: "15px",
  },
  alinhar: {},
}));

export default function FormAddPedidos() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [numeroPedido, setNumeroPedido] = React.useState();
  const [nomeCliente, setNomeCliente] = React.useState();
  const [nomeMotoboy, setNomeMotoboy] = React.useState();
  const [horaPedido, setHoraPedido] = React.useState();
  const [plataforma, setPlataforma] = React.useState();
  const [formDados, setformDados] = React.useState({});

  useEffect(() => {
    console.log(formDados);
  }, [formDados]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createFormNewClient = () => {
    const dados = {
      formNumeroPedido: numeroPedido,
      formNomeCliente: nomeCliente,
      formNomeMotoboy: nomeMotoboy,
      formHoraPedido: horaPedido,
      formPlataforma: plataforma,
    };
    console.log(dados);
    setformDados(dados);
    handleClose();
    return dados;
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.root}
        onClick={handleClickOpen}
        startIcon={<AddShoppingCartIcon />}
      >
        Novo Pedido
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-cria-pedido"
      >
        <DialogTitle id="form-dialog-title">Adicionar novo pedido</DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText>
            Preencha os campos abaixo corretamente para adicionar um novo
            pedido.
          </DialogContentText>
          <Typography className={classes.text}>Número do Pedido</Typography>
          <TextField
            value={numeroPedido}
            onChange={(event: any) => {
              setNumeroPedido(event.target.value);
            }}
            id="numero-pedido"
            type="number"
            variant="outlined"
            margin="normal"
          />
          <Typography className={classes.text}>Horario do Pedido</Typography>
          <TextField
            value={horaPedido}
            onChange={(event: any) => {
              setHoraPedido(event.target.value);
            }}
            id="hora-pedido"
            type="data"
            variant="outlined"
            margin="normal"
          />
          <Typography className={classes.text}>Nome do Cliente</Typography>
          <TextField
            value={nomeCliente}
            onChange={(event: any) => {
              setNomeCliente(event.target.value);
            }}
            id="nome-cliente"
            type="text"
            variant="outlined"
            margin="normal"
          />
          <Typography className={classes.text}>Nome do Motoboy</Typography>
          <TextField
            value={nomeMotoboy}
            onChange={(event: any) => {
              setNomeMotoboy(event.target.value);
            }}
            id="nome-cliente"
            type="text"
            variant="outlined"
            margin="normal"
          />

          <PlataformaSelector
            onSetSelect={(statePlataforma) => {
              setPlataforma(statePlataforma);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={createFormNewClient} color="secondary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
