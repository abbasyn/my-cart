import Main from "./components/Main";

import Cart from "./components/cart/Cart";
import CartProvider from "./components/context/store/CartProvider";
import Header from "./components/header/Header";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
