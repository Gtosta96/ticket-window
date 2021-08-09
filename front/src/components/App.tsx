import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import Layout from "./layout";
import Management from "./pages/management";
import History from "./pages/history";
import Display from "./pages/display";
import Socket from "./pages/socket";
// import Root from "./pages/root/index";

import { PATHS } from "../config/paths";
import RootContextProvider from "../context";

function App() {
  return (
    <>
      <CssBaseline />

      <Router>
        <RootContextProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Management} />

              <Route path={PATHS.MANAGEMENT} exact component={Management} />
              <Route path={PATHS.DISPLAY} exact component={Display} />
              <Route path={PATHS.HISTORY} exact component={History} />
              <Route path="/socket" component={Socket} />
            </Switch>
          </Layout>
        </RootContextProvider>
      </Router>
    </>
  );
}

export default App;
