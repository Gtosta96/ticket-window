import React, { useContext, useMemo } from "react";
import { Box, Typography } from "@material-ui/core";
import { OrdersContext } from "../../../context/OrdersContext";
import OrderCard from "../management/OrderCard";

function History() {
  const ordersContext = useContext(OrdersContext);

  const readyOrders = useMemo(
    () =>
      ordersContext.orders.filter(
        (order) =>
          order.status === `Em Preparação` || order.status === `Preparado`
      ),
    [ordersContext.orders]
  );

  return (
    <Box width="100%">
      <Box marginBottom={2} textAlign="center">
        <Typography variant="h4">Histórico de Pedidos</Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" width="100%">
        {readyOrders.length > 0 ? (
          readyOrders.map((order) => <OrderCard key={order.id} order={order} />)
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
      </Box>
    </Box>
  );
}

export default History;
