import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { Button, Icon, Level, Tag } from "react-bulma-components";
import { Check, Download, LogIn } from "react-feather";
import * as mmHelper from "../../libs/metamask";

export const MetaMaskWallet = () => {
  const [refresh, setRefresh] = useState(0);
  const [isBusy, setBusy] = useState(false);
  const [isDebugging, setDebugging] = useState(false);
  const isInstalled = useMemo(() => {
    return mmHelper.isMetaMaskInstalled();
  }, []);
  // const isConnected = mmHelper.isMetaMaskConnected();
  const isConnected = useMemo(() => {
    return mmHelper.isMetaMaskConnected();
  }, [isBusy, refresh]);
  const btnLoginAttrs = {
    rounded: true,
    disabled: !isInstalled,
    color: isInstalled ? "success" : "dark",
    onClick: () => {
      setBusy(true);
      mmHelper.connectMetaMask();
    },
  };

  useEffect(() => {
    if (!mmHelper.isMetaMaskInstalled()) {
      return;
    }
    window.ethereum.on("accountsChanged", (params) => {
      setBusy(false);
      setRefresh((x) => x + 1);
    });
  }, []);

  return (
    <>
      <Level>
        <Level.Side align="left">
          {!isInstalled && (
            <Button
              rounded={true}
              renderAs="a"
              href="https://metamask.io/"
              target={"_blank"}
            >
              <Icon size="small" style={{ marginRight: ".5rem" }}>
                <Download />
              </Icon>
              Install
            </Button>
          )}
        </Level.Side>
        <Level.Side align="right">
          <Level.Item>
            {isBusy && (
              <div
                className="loader-wrapper"
                style={{ width: "3rem", fontSize: "2rem" }}
              >
                <div className="loader is-loading"></div>
              </div>
            )}
            {isInstalled && !isConnected && !isBusy && (
              <Button {...btnLoginAttrs}>
                <Icon style={{ marginRight: ".5rem" }}>
                  <LogIn />
                </Icon>
                Login
              </Button>
            )}
            {isConnected && (
              <Tag color={"success"}>
                <Icon size={"small"} style={{ margin: "0 .3rem 0 .1rem" }}>
                  <Check />
                </Icon>
                Connected
              </Tag>
            )}
          </Level.Item>
        </Level.Side>
      </Level>
      {isDebugging && (
        <code>
          <br />
          isConnected: {isConnected.toString()}
          <br />
          isBusy: {isBusy.toString()}
        </code>
      )}
    </>
  );
};
