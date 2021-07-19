import PedidoCard from "../../shared/PedidoCard";
import "../../../assets/css/paginas.css";

function PedidosVisualiza() {
  return (
    <div className="visualizacao">
      <div className="alertaPedidos">
        <h1>
          <b>PEDIDOS PRONTOS PARA ENTREGA</b>
        </h1>
      </div>
      <div className="pedidosProntos">
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
        <PedidoCard />
      </div>
      <div className="tempoEspera">
        <h1>
          <b>
            TEMPO DE ESPERA: <p>15 MINUTOS</p>
          </b>
        </h1>
      </div>
      <div className="ultimosPedidos">
        <h3>ULTIMOS PEDIDOS CHAMADOS</h3>

        <ul>
          <dd>Pedido 5</dd>
          <dd>Pedido 7</dd>
          <dd>Pedido 10</dd>
          <dd>Pedido 2</dd>
        </ul>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default PedidosVisualiza;
