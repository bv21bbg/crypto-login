import { useState } from "react";
import bulma from "./app.module.scss";
import { CryptoLogin } from "./crypto-login";

import blockchainEthereum from "../assets/blockchain-ethereum.webp";
import walletMetaMask from "../assets/wallet-metamask.png";
import { WalletPage } from "./pages/Wallet.page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      123
      <WalletPage />
      {/* <section className={bulma.section}>
        <div className={bulma.container}>
          <h1 className={bulma.title}>Connect your wallet</h1>
          <p className={bulma.subtitle}>
            Here you can connect to your prefered wallet
          </p>
        </div>
      </section>

      <div className={bulma.container}>
        <div className={bulma.card}>
          <section className={bulma.section}>
            <div
              className={
                bulma.tabs + " " + bulma["is-centered"]
                // " " +
                // bulma["is-boxed"]
              }
            >
              <ul>
                <li className={bulma["is-active"]}>
                  <a>
                    <span className={bulma.icon}>
                      <img src={blockchainEthereum} />
                    </span>
                    <span>Ethereum</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className={bulma.icon + " " + bulma["is-small"]}>
                      <i
                        className={bulma.fas + " " + bulma["fa-music"]}
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span>Phantasma</span>
                  </a>
                </li>
              </ul>
            </div>

            <div
              className={
                bulma.panel +
                " " +
                bulma["px-4"] +
                " " +
                bulma["py-4"] +
                " " +
                bulma["has-background-light"]
              }
            >
              <nav className={bulma.level}>
                <div className={bulma["level-left"]}>
                  <div className={bulma["level-item"]}>
                    <i className={bulma.icon}>
                      <img src={walletMetaMask} />
                    </i>
                  </div>
                  <div className={bulma["level-item"]}>MetaMask</div>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </div>
      <header className="App-header">
        <CryptoLogin />
      </header> */}
    </div>
  );
}

export default App;
