import { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { PageHead } from "./layout/page-head";
import { WalletPage } from "./pages/Wallet.page";
import { HomePage } from "./pages/home.page";
import { NftAvatarsPage } from "./pages/nft-avatars.page";

function App() {
  return (
    <>
      <PageHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="nft-avatars" element={<NftAvatarsPage />} />
        <Route path="wallets" element={<WalletPage />} />
      </Routes>
    </>
  );
}

export default App;
