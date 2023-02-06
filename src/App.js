import Main from "./components/Main";

import Cart from "./components/Cart";
import CartProvider from "./components/context/store/CartProvider";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
