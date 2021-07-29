import { useContext } from "react";
import OrderAlert from "./OrderAlert";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";
import OrderCard from "../management/OrderCard";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  infoText: {
    fontSize: "2.25rem",
    padding: "0.25rem",
  },
  containerOrderCard: {
    backgroundColor: "#cfe8fc",
    height: "80vh",
    minWidth: "800px",
    marginTop: "5px",
    padding: "1rem",
    border: "0.5px solid",
    borderRadius: "5px",
    boxShadow: "3px 3px 20px #888888",
    textAlign: "center",
  },
  containerTimer: {
    backgroundColor: "#cfe8fc",
    height: "30vh",
    minWidth: "800px",
    marginTop: "5px",
    padding: "3rem",
    border: "0.5px solid",
    borderRadius: "5px",
    boxShadow: "3px 3px 20px #888888",
    fontSize: "10rem",
    textAlign: "center",
  },
  containerDelivered: {
    backgroundColor: "#cfe8fc",
    height: "21.5vw",
    minWidth: "800px",
    marginTop: "5px",
    padding: "3rem",
    border: "0.5px solid",
    borderRadius: "5px",
    boxShadow: "3px 3px 20px #888888",
    textAlign: "center",
    fontSize: "2rem",
  },
  infoLastDelivered: {
    fontSize: "2rem",
    paddingTop: "2.25rem",
  },
}));

function Display() {
  const appContext = useContext(AppContext);
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" position="relative">
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" className={classes.infoText}>
          Pedidos prontos para retirada
        </Typography>
        <Container maxWidth="md">
          <Typography component="div" className={classes.containerOrderCard}>
            {appContext.orders.length > 0 ? (
              appContext.orders.map((order) => (
                <OrderCard key={order.id} order={order} list />
              ))
            ) : (
              <Typography variant="h6" color="textSecondary">
                Nenhum pedido
                {/* <OrderAlert /> */}
              </Typography>
            )}
          </Typography>
        </Container>
      </Box>

      <Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" className={classes.infoText}>
            Tempo estimado de espera
          </Typography>
          <Typography component="div" className={classes.containerTimer}>
            10 m
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" className={classes.infoLastDelivered}>
            Ultimos pedidos retirados
          </Typography>
          <Typography component="div" className={classes.containerDelivered}>
            lista de pedidos
          </Typography>
        </Box>
      </Box>

      <Box display="flex" position="absolute" bottom="-45px" left="35%">
        <Typography className={classes.infoText} variant="h2">
          Motoboy fique atento ao seu pedido
        </Typography>
      </Box>
    </Box>
  );
}

export default Display;
