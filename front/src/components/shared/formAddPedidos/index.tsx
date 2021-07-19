import React from "react";
import {
  Fab,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PlataformaSelector from "./plataformaSelector";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FormAddPedidos() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [numeroPedido, setNumeroPedido] = React.useState();
  const [nomeCliente, setNomeCliente] = React.useState();
  const [horaPedido, setHoraPedido] = React.useState();
  const [plataforma, setPlataforma] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        size="large"
        color="primary"
        aria-label="Add"
        className={classes.margin}
      >
        <Button onClick={handleClickOpen}>
          <AddIcon />
        </Button>
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-cria-pedido"
      >
        <DialogTitle id="form-dialog-title">Adicionar novo pedido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos abaixo corretamente para adicionar um novo
            pedido.
          </DialogContentText>
          <TextField
            value={numeroPedido}
            onChange={(event: any) => {
              setNumeroPedido(event.target.value);
            }}
            id="numero-pedido"
            label="Numero do Pedido"
            type="number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            value={nomeCliente}
            onChange={(event: any) => {
              setNomeCliente(event.target.value);
            }}
            id="nome-cliente"
            label="Nome do Cliente"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            value={horaPedido}
            onChange={(event: any) => {
              setHoraPedido(event.target.value);
            }}
            id="hora-pedido"
            label="Horario do Pedido"
            type="data"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <div className="alinhado">
            <PlataformaSelector />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
