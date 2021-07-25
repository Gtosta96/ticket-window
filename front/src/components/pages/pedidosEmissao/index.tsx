import { Typography } from "@material-ui/core";
import React from "react";
import { ordersMock } from "../../../services/orders";
import StatusPedido from "../../shared/StatusPedido";
import "./emissao.css";

function PedidosEmissao() {
  return (
    <>
      <div className="emissaotela">
        <Typography variant="h4">
          CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS
        </Typography>
      </div>

      <div className="emissao">
        <div className="container-chamada">
          <Typography variant="h4">TEMPO ESTIMADO: 16 MINUTOS</Typography>
        </div>
      </div>
      <div className="container-ultimos-chamados">
        <div className="titulo">ULTIMOS PEDIDOS CHAMADOS</div>
        <div className="PedidosChamados">
          {ordersMock.orders.map((order) => (
            <StatusPedido key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PedidosEmissao;
