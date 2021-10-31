import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error } from "./pages";
import { ProductsProvider } from "./contexts/Products/ProductsContext";
import { BasketProvider } from "./contexts/Basket/BasketContext";
import { FiltersProvider } from "./contexts/Filters/FiltersContext";

function App() {
  return (
    <ProductsProvider>
      <FiltersProvider>
        <BasketProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </BasketProvider>
      </FiltersProvider>
    </ProductsProvider>
  );
}

export default App;
