import { useContext } from "react";
import OrderAlert from "./OrderAlert";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";
import OrderCard from "../management/OrderCard";

const useStyles = makeStyles((theme) => ({
  infoText: {
    fontSize: "2.25rem",
    padding: "0.25rem",
  },
  containerOrderCard: {
    backgroundColor: "#FBFBFB",
    height: "80vh",
    minWidth: "800px",
    marginTop: "5px",
    padding: "1rem",
    border: "0.5px solid #2f39c2",
    borderRadius: "5px",
    boxShadow: "3px 3px 20px #888888",
    textAlign: "center",
    borderTop: "10px solid #2f39c2",
  },
  containerTimer: {
    backgroundColor: "#FBFBFB",
    height: "30vh",
    minWidth: "800px",
    marginTop: "5px",
    padding: "1rem",
    border: "0.5px solid #2f39c2",
    borderRadius: "5px",
    boxShadow: "3px 3px 20px #888888",
    textShadow: "#2f39c2 1rem 0rem 3rem",
    fontFamily: "Ubuntu",
    fontSize: "10rem",
    textAlign: "center",
    borderTop: "10px solid #2f39c2",
    fontWeight: "bold",
  },
  ImageLogo: {
    height: "30rem",
    width: "auto",
    borderRadius: "1000px",
    transform: "rotate( 30deg )",
    borderTop: "10px solid #2f39c2",
    boxShadow: "3px 3px 20px #888888",
    border: "2px solid #2f39c2",
  },
}));

function Display() {
  const appContext = useContext(AppContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-evenly" position="relative">
      <Box display="flex" flexDirection="column">
        {/* CARD DE CHAMADA DE PEDIDO QUANDO O BALCAO CHAMAR */}
        <OrderAlert />

        <Typography variant="h2" className={classes.infoText}>
          Pedidos prontos para retirada
        </Typography>
        <Typography component="div" className={classes.containerOrderCard}>
          {appContext.orders.length > 0 ? (
            appContext.orders.map((order) => (
              <OrderCard key={order.id} order={order} list />
            ))
          ) : (
            <Typography variant="h6" color="textSecondary">
              Nenhum pedido
            </Typography>
          )}
        </Typography>
      </Box>

      <Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" className={classes.infoText}>
            Tempo estimado de espera
          </Typography>
          <Typography component="div" className={classes.containerTimer}>
            10 MIN
          </Typography>
          <Box display="flex" justifyContent="center" padding="1.5rem">
            <img
              className={classes.ImageLogo}
              src="./assets/img/logo1.jpg"
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Display;
