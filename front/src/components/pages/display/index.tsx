import { useContext } from "react";
import OrderAlert from "./OrderAlert";
import { Box, Typography } from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";
import OrderCard from "../management/OrderCard";

function Display() {
  const appContext = useContext(AppContext);

  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column">
        <Typography variant="h2">Pedidos prontos para retirada</Typography>
        <Box>
          {appContext.orders.length > 0 ? (
            appContext.orders.map((order) => (
              <OrderCard key={order.id} order={order} list />
            ))
          ) : (
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" color="textSecondary">
                Nenhum pedido
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h2">Motoboy fique atento ao seu pedido</Typography>
        <Typography variant="h2">Tempo de espera: 10 Minutos</Typography>
      </Box>

      {/* <OrderAlert /> */}
    </Box>
  );
}

export default Display;
