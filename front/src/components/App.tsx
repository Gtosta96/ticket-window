import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Management from "./pages/management";
import History from "./pages/history";
import Display from "./pages/display";
import AppContextProvider from "../context/AppContext";
import Socket from "./pages/Socket";
import { CssBaseline } from "@material-ui/core";
import { PATHS } from "../config/paths";
import Root from "./pages/Root/index";

function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <AppContextProvider>
          <Layout>
            <Switch>
              <Route path={PATHS.MANAGEMENT} exact component={Management} />
              <Route path={PATHS.DISPLAY} exact component={Display} />
              <Route path={PATHS.HISTORY} exact component={History} />
              <Route path="/socket" component={Socket} />
              <Route path="/" exact component={Root} />
            </Switch>
          </Layout>
        </AppContextProvider>
      </Router>
    </>
  );
}

export default App;
