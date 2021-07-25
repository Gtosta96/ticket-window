import ChamadaCard from "../display/ChamadaCard";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  visualizacao: {
    padding: "8px",
    height: "5%",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#d1d1d1",
    borderRadius: "15px",
  },

  pedidosProntos: {
    position: "relative",
    width: "80vw",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: "15px",
  },

  footer: {
    textAlign: "center",
    position: "fixed",
    fontSize: "1rem",
    width: "100%",
    bottom: "0",
  },
}));

function PedidosVisualiza() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.visualizacao}>
        <h1>
          <b>BEM - VINDOS - AGUARDE SEU PEDIDO SER CHAMADO</b>
        </h1>
      </div>
      <div className={classes.pedidosProntos}>
        <ChamadaCard />
      </div>
      <div className={classes.footer}>
        <h1>
          <b>DIRIJA COM RESPONSABILIDADE</b>
        </h1>
      </div>
    </>
  );
}

export default PedidosVisualiza;
