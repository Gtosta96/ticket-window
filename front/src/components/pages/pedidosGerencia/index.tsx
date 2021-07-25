import React, { useContext } from "react";
import "./gerencia.css";
import AddOrderForm from "./AddOrderForm";
import FormTempoEspera from "./formTempoEspera";
import PedidoCard from "./PedidoCard";
import { Box, Typography } from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";

function PedidosGerencia() {
  const appContext = useContext(AppContext);

  return (
    <Box padding="2rem" flexGrow={1}>
      <Box display="flex" justifyContent="space-around">
        <Typography variant="h4">Gerenciamento de Pedidos</Typography>
        <AddOrderForm />
        {/* <FormTempoEspera /> */}
      </Box>

      <Box display="flex" gridGap="1rem" flexWrap="wrap" padding="30px">
        {appContext.orders.map((order) => (
          <PedidoCard key={order.id} order={order} />
        ))}
      </Box>
    </Box>
  );
}

export default PedidosGerencia;
