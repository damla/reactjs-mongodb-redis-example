import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error } from "./pages";
import { BasketProvider } from "./contexts/Basket/BasketContext";
import { ProductsProvider } from "./contexts/Products/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <BasketProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </BasketProvider>
    </ProductsProvider>
  );
}

export default App;
