import React from "react";
import { OpenCartProvider } from "./contexts/OpenCartContext";
import { CartProvider } from "./components/Shop/TempHelper";
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
