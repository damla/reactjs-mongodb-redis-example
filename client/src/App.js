import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Error } from "./pages";
import { ProductsProvider } from "./contexts/Products/ProductsContext";
import { BasketProvider } from "./contexts/Basket/BasketContext";
import { FiltersProvider } from "./contexts/Filters/FiltersContext";
import { ModalProvider } from "./contexts/Modal/ModalContext";

function App() {
  return (
    <FiltersProvider>
      <ProductsProvider>
        <BasketProvider>
          <ModalProvider>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="*" component={Error} />
              </Switch>
            </Router>
          </ModalProvider>
        </BasketProvider>
      </ProductsProvider>
    </FiltersProvider>
  );
}

export default App;
