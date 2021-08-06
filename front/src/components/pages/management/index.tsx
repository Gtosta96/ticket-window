import React, { useContext } from "react";
import AddOrderForm from "./AddOrderForm";
import FormTempoEspera from "./formTempoEspera";
import OrderCard from "./OrderCard";
import { Box, Typography } from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";

function Management() {
  const appContext = useContext(AppContext);

  return (
    <Box>
      <Box marginBottom={2} textAlign="center">
        <Typography variant="h4">Gerenciamento de Pedidos</Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {appContext.orders.length > 0 ? (
          appContext.orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" color="textSecondary">
              Clique no botão inferior direito para adicionar um pedido
            </Typography>
          </Box>
        )}
        <AddOrderForm />
        {/* <FormTempoEspera /> */}
      </Box>
    </Box>
  );
}

export default Management;
