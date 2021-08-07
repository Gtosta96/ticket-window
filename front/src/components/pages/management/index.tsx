import React, { useContext, useMemo } from "react";
import AddOrderForm from "./AddOrderForm";
import OrderCard from "./OrderCard";
import { Box, Typography } from "@material-ui/core";
import { OrdersContext } from "../../../context/OrdersContext";
import OptionsForm from "./OptionsForm";

function Management() {
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
    <Box>
      <Box marginBottom={2} textAlign="center">
        <Typography variant="h4">Gerenciamento de Pedidos</Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
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

        <AddOrderForm />
        <OptionsForm />
      </Box>
    </Box>
  );
}

export default Management;
