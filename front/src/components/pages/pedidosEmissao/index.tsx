import React, { useContext } from "react";

import { AppContext } from "../../../context/AppContext";
import FloatingActionButtonSize from "../../shared/FAB";

function PedidosEmissao() {
  const appContext = useContext(AppContext);

  return (
    <>
      <h1>CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS</h1>
      <ul>
        {appContext.messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>

      <ul>
        <li>Lista de pedidos</li>
        <li>Nome do Motoboy</li>
        <li>Numero do Pedido</li>
        <li>Plataforma</li>
        <FloatingActionButtonSize />
      </ul>
    </>
  );
}

export default PedidosEmissao;
