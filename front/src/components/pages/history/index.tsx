import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { ordersMock } from "../../../services/orders";
import OrderCard from "../management/OrderCard";
import OrderItem from "./OrderItem";

function History() {
  const appContext = useContext(AppContext);
  return (
    <>
      <div className="emissao">
        <div className="PedidosChamados">
          <div className="titulo">PEDIDOS CHAMADOS</div>
          {appContext.orders.map((order) => (
            <OrderCard key={order.id} order={order} list />
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
