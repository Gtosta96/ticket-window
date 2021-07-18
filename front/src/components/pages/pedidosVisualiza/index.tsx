import PedidoCard from "../../shared/List";

function PedidosVisualiza() {
  return (
    <>
      <h1>CONTEUDO DA PAGINA VIZUALIZAÇÃO DE PEDIDOS</h1>
      <ul>
        <li>Exibição de todos os pedidos prontos para retirada</li>
        <li>Chamada do pedido pronto para retirada</li>
        <li>RE-chamada a cada 2 minutos do pedido pronto para retirada</li>
        <br />
        <br />
        <PedidoCard />
      </ul>
    </>
  );
}

export default PedidosVisualiza;
