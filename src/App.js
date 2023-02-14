import { useState } from "react";

import Main from "./components/Main";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/context/store/CartProvider";
import Header from "./components/header/Header";
import Modal from "./components/UI/Modal";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={shownCartHandler} />
      <Main />
    </CartProvider>
  );
}

export default App;
