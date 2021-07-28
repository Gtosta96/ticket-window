import React, { useContext } from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { deliveryPlatforms } from "../../../../services/orders/types";
import { useForm } from "react-hook-form";
import { AddOrderFormData } from "./types";
import { saveOrder } from "../../../../services/orders";
import { AppContext } from "../../../../context/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function AddOrderForm() {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddOrderFormData>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data: AddOrderFormData) => {
    console.log("okwekowe");
    const savedOrder = await saveOrder(data);
    appContext.setOrders([...appContext.orders, savedOrder]);
    handleClose();
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.root}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-cria-pedido"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">
            Adicionar novo pedido
          </DialogTitle>
          <DialogContent className={classes.contentContainer}>
            <DialogContentText>
              Preencha os campos abaixo corretamente para adicionar um novo
              pedido.
            </DialogContentText>

            <TextField
              {...register("id", { required: true })}
              error={!!errors.id}
              helperText={errors.id?.message}
              label="Número do Pedido"
              id="numero-pedido"
              type="number"
              variant="outlined"
              margin="normal"
            />

            <TextField
              {...register("deliveryMan", { required: true })}
              error={!!errors.deliveryMan}
              helperText={errors.deliveryMan?.message}
              label="Nome do Motoboy"
              id="deliveryMan"
              type="text"
              variant="outlined"
              margin="normal"
            />

            <FormControl
              component="fieldset"
              margin="normal"
              {...register("platform", { required: true })}
              error={!!errors.platform}
            >
              <FormLabel component="legend">Plataforma</FormLabel>
              <RadioGroup
                name="platform"
                row
                defaultValue={deliveryPlatforms[0].value}
              >
                {deliveryPlatforms.map((deliveryPlatform) => (
                  <FormControlLabel
                    key={deliveryPlatform.value}
                    value={deliveryPlatform.value}
                    label={deliveryPlatform.label}
                    control={<Radio />}
                  />
                ))}
              </RadioGroup>
              <FormHelperText>{errors.platform?.message}</FormHelperText>
            </FormControl>
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
