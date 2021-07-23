import React from "react";
import "../../../assets/css/gerencia.css";
import FormAddPedidos from "../../shared/formAddPedidos";
import FormTempoEspera from "../../shared/formTempoEspera";
import PedidoCard from "../../shared/PedidoCard";

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
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
        <div>
          <PedidoCard />
        </div>
      </div>
    </>
  );
}

export default PedidosGerencia;
