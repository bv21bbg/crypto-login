import { useMemo } from "react";
import {
  isMetaMaskInstalled,
  isMetaMaskConnected,
  connectMetaMask,
} from "../../libs/metamask";

export const MetaMaskLogin = () => {
  const isInstalled = useMemo(() => {
    return isMetaMaskInstalled();
  }, []);
  const isConnected = useMemo(() => {
    return isMetaMaskConnected();
  }, []);
  const attrs = {
    disabled: !isInstalled,
    onClick: connectMetaMask,
  };
  return (
    <div>
      <strong>MetaMask</strong>
      <code style={{ display: "block" }}>
        isInstalled: {isInstalled.toString()}
        <br />
        isConnected: {isConnected.toString()}
      </code>
      {isConnected && <span>Connected with MetaMask</span>}
      {!isConnected && <button {...attrs}>Login</button>}
    </div>
  );
};
