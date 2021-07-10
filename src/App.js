import "./App.css";
import Home from "./Home";
import SecondComponent from "./SecondComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/SecondComponent">
          <SecondComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
