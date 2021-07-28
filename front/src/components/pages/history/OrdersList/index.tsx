import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { ordersMock } from "../../../../services/orders";
import OrderItem from "../OrderItem";

const useStyles = makeStyles((theme) => ({
  emissaoTela: {
    padding: "8px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  emissao: {
    justifyContent: "center",
    textAlign: "center",
  },
  containerChamada: {
    width: "100vw",
    backgroundColor: "#d1d1d1",
  },
  containerUltimosChamados: {
    width: "100vw",
    maxHeight: "30vh",
    justifyContent: "center",
    fontSize: "2rem",
  },
  PedidosChamados: {
    backgroundColor: "#043f77",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    justifyContent: "center",
    border: "5px solid",
    padding: "3px",
  },
  titulo: {
    fontSize: "25px",
    fontStyle: "italic",
    fontFamily: "Varela Round",
    color: "#000000",
    backgroundColor: "#d1d1d1",
  },
}));

function OrdersList() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.emissaoTela}>
        <Typography variant="h4">
          CONTEUDO DA PAGINA EMISSÃO DE PEDIDOS
        </Typography>
      </div>

      <div className={classes.emissao}>
        <div className={classes.containerChamada}>
          <Typography variant="h4">
            <b>TEMPO ESTIMADO: 16 MINUTOS</b>
          </Typography>
        </div>
      </div>
      <div>
        <div className={classes.titulo}>ULTIMOS PEDIDOS CHAMADOS</div>
        <div className={classes.PedidosChamados}>
          {ordersMock.orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrdersList;
