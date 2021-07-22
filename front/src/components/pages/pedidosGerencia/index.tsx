import React from "react";
import "../../../assets/css/gerencia.css";
import FormAddPedidos from "../../shared/formAddPedidos";
import PedidoCard from "../../shared/PedidoCard";

function PedidosGerencia() {
  return (
    <div className="gerencia">
      <div>
        <h1>GERENCIAMENTO DE PEDIDOS</h1>
        <FormAddPedidos />
      </div>

      <PedidoCard />
      <PedidoCard />
      <PedidoCard />
      <PedidoCard />
      <PedidoCard />
    </div>
  );
}

export default PedidosGerencia;
