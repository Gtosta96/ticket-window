import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import PedidosEmissao from "./pages/pedidosEmissao";
import PedidosGerencia from "./pages/pedidosGerencia";
import PedidosVisualiza from "./pages/pedidosVisualiza";
import Display from "./pages/display";
import AppContextProvider from "../context/AppContext";
import Socket from "./pages/Socket";
import { CssBaseline } from "@material-ui/core";
import { PATHS } from "../config/paths";

function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <Layout />

        <AppContextProvider>
          <Switch>
            <Route path={PATHS.TICKETS} exact component={PedidosEmissao} />
            <Route path={PATHS.MANAGEMENT} exact component={PedidosGerencia} />
            <Route path={PATHS.DISPLAY} exact component={Display} />
            <Route path="/socket" component={Socket} />
          </Switch>
        </AppContextProvider>
      </Router>
    </>
  );
}

export default App;
