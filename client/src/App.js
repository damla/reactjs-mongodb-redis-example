import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error } from "./pages";
import { BasketProvider } from "./contexts/Basket/BasketContext";

function App() {
  return (
    <BasketProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </BasketProvider>
  );
}

export default App;
