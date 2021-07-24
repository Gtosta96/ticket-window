import React from "react";
import { ordersMock } from "../../../services/orders";
import StatusPedido from "../../shared/StatusPedido";
import "./emissao.css";

function PedidosEmissao() {
  return (
    <>
      <div className="emissaotela">
        <h1>
          <b>CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS</b>
        </h1>
      </div>
      <div className="emissao">
        <div className="PedidosChamados">
          <div className="titulo">PEDIDOS CHAMADOS</div>
          {ordersMock.orders.map((order) => (
            <StatusPedido key={order.id} order={order} />
          ))}
        </div>
        <div className="PedidosFinalizados">
          <div className="titulo">PEDIDOS FINALIZADOS</div>
          {ordersMock.orders.map((order) => (
            <StatusPedido key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PedidosEmissao;
