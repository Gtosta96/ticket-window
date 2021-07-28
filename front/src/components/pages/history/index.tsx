import { ordersMock } from "../../../services/orders";
import OrderCard from "../management/OrderCard";
import OrderItem from "./OrderItem";

function History() {
  return (
    <>
      <div className="emissao">
        <div className="PedidosChamados">
          <div className="titulo">PEDIDOS CHAMADOS</div>
          {ordersMock.orders.map((order) => (
            <OrderCard key={order.id} order={order} list />
          ))}
        </div>
        <div className="PedidosFinalizados">
          <div className="titulo">PEDIDOS FINALIZADOS</div>
          {ordersMock.orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
