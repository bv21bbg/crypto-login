import { useCallback, useMemo, useState } from "react";
import {
  Button,
  Card,
  Columns,
  Content,
  Icon,
  Level,
  Panel,
  Section,
  Tabs,
  Tag,
} from "react-bulma-components";
import { MetaMaskWallet, EctoWallet, PoltergeistWallet } from "../wallets";

import blockchainEthereumIcon from "../../assets/blockchain-ethereum.webp";
import blockchainPhantasmaIcon from "../../assets/blockchain-phantasma.png";
import walletMetaMaskIcon from "../../assets/wallet-metamask.png";
import walletEctoIcon from "../../assets/wallet-ecto.png";
import walletPoltergeistIcon from "../../assets/wallet-poltergeist.png";
import { Download } from "react-feather";

const DATA = {
  blockchains: [
    {
      key: "ALL",
      name: "All",
      icon: blockchainEthereumIcon,
      wallets: [
        {
          key: "mtmk",
          name: "MetaMask",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          icon: walletMetaMaskIcon,
          component: MetaMaskWallet,
        },
        {
          key: "ecto",
          name: "Ecto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          icon: walletEctoIcon,
          component: EctoWallet,
        },
        {
          key: "pgst",
          name: "Poltergeist",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          icon: walletPoltergeistIcon,
          component: PoltergeistWallet,
        },
      ],
    },
    {
      key: "ETH",
      name: "Ethereum",
      icon: blockchainEthereumIcon,
      wallets: [
        {
          key: "mtmk",
          name: "MetaMask",
          icon: walletMetaMaskIcon,
          component: MetaMaskWallet,
        },
      ],
    },
    {
      key: "SOUL",
      name: "Phantasma",
      icon: blockchainPhantasmaIcon,
      wallets: [
        {
          key: "ecto",
          name: "Ecto",
          icon: walletEctoIcon,
          component: EctoWallet,
        },
        {
          key: "pgst",
          name: "Poltergeist",
          icon: walletPoltergeistIcon,
          component: PoltergeistWallet,
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
      <Tabs.Tab
        active={bc.key === selectedTabKey}
        onClick={onTabClick(bc.key)}
        key={bc.key}
      >
        <Icon size={"medium"}>
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
      <Columns.Column size="4" key={wallet.key}>
        <Panel px={4} py={4} backgroundColor="light">
          <Level
            style={{ borderBottom: "1px solid #ddd", paddingBottom: ".5rem" }}
          >
            <Level.Side align="left">
              <Level.Item>
                <Icon size={"medium"}>
                  <img src={wallet.icon} />
                </Icon>
              </Level.Item>
              <Level.Item>
                <b>{wallet.name}</b>
              </Level.Item>
            </Level.Side>
          </Level>
          <Content>{wallet.description}</Content>
          <wallet.component />
        </Panel>
      </Columns.Column>
    ));
  }, [activeBlockchain]);

  return (
    <Card mb={5}>
      <Section>
        {/* <Tabs alignContent="center" alignItems="center" align="center">
          {tabsList}
        </Tabs> */}
        <Columns>{renderTabsContent()}</Columns>
      </Section>
      {debugMode && <code>selectedTabKey: {selectedTabKey}</code>}
    </Card>
  );
};
