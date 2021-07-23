import "../../../assets/css/visualizacao.css";
import ChamadaCard from "../../shared/ChamadaCard";
function PedidosVisualiza() {
  return (
    <>
      <div className="visualizacao">
        <h1>
          <b>BEM - VINDOS - AGUARDE SEU PEDIDO SER CHAMADO</b>
        </h1>
      </div>
      <div className="pedidosProntos">
        <ChamadaCard />
      </div>
      <div className="tempoEspera"> </div>

      <div className="ultimosPedidos"></div>
      <div className="footer">
        <h1>
          <b>DIRIJA COM RESPONSABILIDADE</b>
        </h1>
      </div>
    </>
  );
}

export default PedidosVisualiza;
