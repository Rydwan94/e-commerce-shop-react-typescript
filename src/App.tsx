import { HashRouter } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Pages from "./layouts/Pages";
import ProductsProvider from "./context/ProductsProvider";
import FilterProductsProvider from "./context/FilterProductsProvider";
import Footer from "./layouts/Footer";

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
            <footer className="w-full mt-24">
              <Footer/>
            </footer>
          </div>
        </ProductsProvider>
      </FilterProductsProvider>
    </HashRouter>
  );
}

export default App;
