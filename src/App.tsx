import { HashRouter } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Pages from "./layouts/Pages";
import ProductsProvider from "./context/ProductsProvider";

function App() {
  return (
    <HashRouter>
      <ProductsProvider>
        <header className="w-full bg-slate-500">
          <Navigation />
        </header>
        <main>
          <Pages />
        </main>
        </ProductsProvider>
    </HashRouter>
  );
}

export default App;
