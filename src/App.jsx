import React from "react";

import {MainRouter} from "./routes/MainRouter";
import {CartProvider} from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {

  return (
    <>
    <CartProvider>
      <MainRouter />
    </CartProvider>
    </>
  );
}

export default App;
