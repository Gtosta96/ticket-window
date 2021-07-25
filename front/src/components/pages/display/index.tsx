import { ordersMock } from "../../../services/orders";
import StatusPedido from "../../shared/StatusPedido";
// import "./display.css";

function Display() {
  return (
    <>
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

export default Display;
