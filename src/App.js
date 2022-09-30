import React from "react";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <CartProvider>
      <Header />
      <Navigation />
    </CartProvider>
  );
}

export default App;
