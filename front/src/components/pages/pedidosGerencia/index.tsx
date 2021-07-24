import React from "react";
import "./gerencia.css";
import FormAddPedidos from "../../shared/formAddPedidos";
import FormTempoEspera from "../../shared/formTempoEspera";
import PedidoCard from "../../shared/PedidoCard";

import { ordersMock } from "../../../services/orders";

function PedidosGerencia() {
  return (
    <>
      <div className="botoes">
        <h1>GERENCIAMENTO DE PEDIDOS</h1>
        <div>
          <FormAddPedidos />
          <FormTempoEspera />
        </div>
      </div>

      <div className="gerencia">
        {ordersMock.orders.map((order) => (
          <PedidoCard key={order.id} order={order} />
        ))}
      </div>
    </>
  );
}

export default PedidosGerencia;
