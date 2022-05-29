import React from "react";
import { OpenCartProvider } from "./contexts/OpenCartContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <OpenCartProvider>
      <Header />
      <Navigation />
    </OpenCartProvider>
  );
}

export default App;
