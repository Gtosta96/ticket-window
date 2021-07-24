import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar/SideBar";
import PedidosEmissao from "./pages/pedidosEmissao";
import PedidosGerencia from "./pages/pedidosGerencia";
import PedidosVisualiza from "./pages/pedidosVisualiza";
import AppContextProvider from "../context/AppContext";
import Socket from "./pages/Socket";

function App() {
  return (
    <Router>
      <Sidebar />

      <div
        style={{
          maxWidth: "1980px",
          margin: "auto",
          backgroundColor: "#d1d1d1",
        }}
      >
        <AppContextProvider>
          <Switch>
            <Route path="/emissao" exact component={PedidosEmissao} />
            <Route path="/gerencia" exact component={PedidosGerencia} />
            <Route path="/visualiza" exact component={PedidosVisualiza} />
            <Route path="/socket" component={Socket} />
          </Switch>
        </AppContextProvider>
      </div>
    </Router>
  );
}

export default App;
