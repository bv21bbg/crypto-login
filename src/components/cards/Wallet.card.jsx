import { useCallback, useMemo, useState } from "react";
import {
  Button,
  Card,
  Icon,
  Level,
  Panel,
  Section,
  Tabs,
} from "react-bulma-components";

import blockchainEthereumIcon from "../../assets/blockchain-ethereum.webp";
import blockchainPhantasmaIcon from "../../assets/blockchain-phantasma.png";
import walletMetaMaskIcon from "../../assets/wallet-metamask.png";
import walletEctoIcon from "../../assets/wallet-ecto.png";
import walletPoltergeistIcon from "../../assets/wallet-poltergeist.png";

const DATA = {
  blockchains: [
    {
      key: "ETH",
      name: "Ethereum",
      icon: blockchainEthereumIcon,
      wallets: [
        {
          name: "MetaMask",
          icon: walletMetaMaskIcon,
        },
      ],
    },
    {
      key: "SOUL",
      name: "Phantasma",
      icon: blockchainPhantasmaIcon,
      wallets: [
        {
          name: "Ecto",
          icon: walletEctoIcon,
        },
        {
          name: "Poltergeist",
          icon: walletPoltergeistIcon,
        },
      ],
    },
  ],
};

export const WalletCard = () => {
  const [selectedTabKey, selectTabKey] = useState(DATA.blockchains[0].key);
  const [debugMode, setDebug] = useState(false);

  const onTabClick = useCallback((key) => {
    return () => {
      console.log(key);
      selectTabKey(key);
    };
  }, []);

  const tabsList = useMemo(() => {
    return DATA.blockchains.map((bc) => (
      <Tabs.Tab active={bc.key === selectedTabKey} onClick={onTabClick(bc.key)}>
        <Icon>
          <img src={bc.icon} />
        </Icon>
        {bc.name}
      </Tabs.Tab>
    ));
  }, [selectedTabKey]);

  const activeBlockchain = useMemo(() => {
    return DATA.blockchains.find((bc) => bc.key === selectedTabKey);
  }, [selectedTabKey]);

  const walletsList = useMemo(() => {
    return;
  }, [activeBlockchain]);

  const renderTabsContent = useCallback(() => {
    return activeBlockchain?.wallets.map((wallet) => (
      <Panel px={4} py={4} backgroundColor="light">
        <Level>
          <Level.Side align="left">
            <Level.Item>
              <Icon>
                <img src={wallet.icon} />
              </Icon>
            </Level.Item>
            <Level.Item>{wallet.name}</Level.Item>
          </Level.Side>
          <Level.Side align="right">
            <Level.Item>
              <Button rounded={true} size={"small"} color="link">
                Login
              </Button>
            </Level.Item>
          </Level.Side>
        </Level>
      </Panel>
    ));
  }, [activeBlockchain]);

  return (
    <Card>
      <Section>
        <Tabs alignContent="center" alignItems="center" align="center">
          {tabsList}
        </Tabs>
        {renderTabsContent()}
      </Section>
      {debugMode && <code>selectedTabKey: {selectedTabKey}</code>}
    </Card>
  );
};
