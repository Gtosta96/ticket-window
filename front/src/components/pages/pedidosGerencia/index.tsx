import React from "react";
import "../../../assets/css/gerencia.css";
import PedidoCard from "../../shared/List";

function PedidosGerencia() {
  // const dispatch = useAppDispatch();

  // const loginState = useAppSelector((state) => state.login);
  // const [inputText, setInputText] = React.useState("");

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const value = event.target.value;
  //   setInputText(value);
  // }

  // function handleClick() {
  //   console.log("botão login clicado");
  //   dispatch(getGithubUserApi(inputText));
  // }

  // if (loginState.user) {
  //   return <Redirect to={PATHS.ROOT} />;
  // }

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
