import React, { useContext } from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import { useForm } from "react-hook-form";
import { OptionsFormData } from "./types";
import { SettingsContext } from "../../../../context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function OptionsForm() {
  const classes = useStyles();
  const settingsContext = useContext(SettingsContext);

  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OptionsFormData>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: OptionsFormData) => {
    console.log({ data });
    settingsContext.setWaitingTime(data.waitingTime);
    handleClose();
  };

  return (
    <>
      <Fab color="primary" onClick={handleClickOpen} className={classes.root}>
        <SettingsIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Configurações</DialogTitle>
          <DialogContent className={classes.contentContainer}>
            <DialogContentText>
              Defina aqui as configurações do sistema
            </DialogContentText>

            <TextField
              {...register("waitingTime", { required: true })}
              type="number"
              error={!!errors.waitingTime}
              helperText={errors.waitingTime?.message}
              label="Tempo de espera"
              variant="outlined"
              margin="normal"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancelar
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Cadastrar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}