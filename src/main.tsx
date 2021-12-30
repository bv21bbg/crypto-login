import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import "bulma/css/bulma.min.css";
import { WalletPage } from "./components/pages/Wallet.page";

ReactDOM.render(
  <React.StrictMode>
    <WalletPage />
  </React.StrictMode>,
  document.getElementById("root")
);
