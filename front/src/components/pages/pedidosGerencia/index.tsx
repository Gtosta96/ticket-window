import React from "react";
import "../../../assets/css/paginas.css";
import PedidoCard from "../../shared/PedidoCard";

function PedidosGerencia() {
  return (
    <>
      <div>
        <h1>CONTEUDO DA PAGINA GERENCIAMENTO DE PEDIDOS</h1>
        <dl>
          <dd>Exibição de todos os pedidos</dd>
          <dd>Controle (conclusão de entrega) de pedidos</dd>
        </dl>
      </div>
      <div className="gerencia">
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
      </div>
    </>
  );
}

export default PedidosGerencia;
