import React, { useEffect } from "react";
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
import AccessTimeIcon from "@material-ui/icons/AccessTime";

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

export default function FormTempoEspera() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tempoEspera, setTempoEspera] = React.useState();

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
      formTempoEspera: tempoEspera,
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
        color="secondary"
        size="large"
        className={classes.root}
        onClick={handleClickOpen}
        startIcon={<AccessTimeIcon />}
      >
        Alterar Tempo de Espera
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-cria-pedido"
      >
        <DialogTitle id="form-dialog-title">
          Alterar Tempo de Espera
        </DialogTitle>
        <DialogContent className={classes.root}>
          <DialogContentText>
            Altera o tempo de espera estimado para liberação dos pedidos.
          </DialogContentText>
          <Typography className={classes.text}>Novo tempo de espera</Typography>
          <TextField
            value={tempoEspera}
            onChange={(event: any) => {
              setTempoEspera(event.target.value);
            }}
            id="numero-pedido"
            type="number"
            variant="outlined"
            margin="normal"
          />

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={createFormNewClient} color="secondary">
              Alterar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
