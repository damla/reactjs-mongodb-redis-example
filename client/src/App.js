import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error } from "./pages";
import { ProductsProvider } from "./contexts/Products/ProductsContext";
import { PaginationProvider } from "./contexts/Pagination/PaginationContext";
import { BasketProvider } from "./contexts/Basket/BasketContext";

function App() {
  return (
    <ProductsProvider>
      <PaginationProvider>
        <BasketProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </BasketProvider>
      </PaginationProvider>
    </ProductsProvider>
  );
}

export default App;
