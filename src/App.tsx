import { HashRouter } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Pages from "./layouts/Pages";
import ProductsProvider from "./context/ProductsProvider";
import FilterProductsProvider from "./context/FilterProductsProvider";

function App() {
  return (
    <HashRouter>
        <FilterProductsProvider>
      <ProductsProvider>
          <div className="flex flex-col justify-center items-center font-montserrat bg-lightBackgroundColor">
            <header className="w-full">
              <Navigation />
            </header>
            <main className="w-full min-h-screen">
              <Pages />
            </main>
          </div>
      </ProductsProvider>
        </FilterProductsProvider>
    </HashRouter>
  );
}

export default App;
