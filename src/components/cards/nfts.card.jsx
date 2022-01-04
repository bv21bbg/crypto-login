import { useCallback } from "react";
import {
  Block,
  Box,
  Card,
  Columns,
  Content,
  Icon,
  Image,
  Level,
  Panel,
  Section,
  Tag,
} from "react-bulma-components";

const CONTRACTS = [
  {
    currency: "ETH",
    address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    name: "Cryptopunks",
  },
];

const ADDRESS = "0xb89c2f6bb674bd6aace2a1e274d40e6dc4775b15";

export const NftsCard = (props) => {
  const { contract } = props;

  const listNfts = useCallback(() => {
    if (!contract.nfts.length) {
      return <div>No NFTs for this contract</div>;
    }

    return contract.nfts.map((nftData) => {
      const imageArgs = {
        src: nftData.metadata.image,
      };
      return (
        <Columns.Column size="4" key={nftData.id}>
          <Box>
            <Block>
              <Image {...imageArgs} />
            </Block>
            <Block textAlign={"center"}>
              <b>{nftData.metadata.name}</b>
            </Block>
            <Block textAlign={"center"}>
              {nftData.metadata.attributes.map((attr) => (
                <Tag key={attr} mr={1}>
                  {attr}
                </Tag>
              ))}
            </Block>
          </Box>
        </Columns.Column>
      );
    });
  }, [contract]);

  return (
    <Panel px={4} py={4} backgroundColor="light" key={props.contract.name}>
      <Level style={{ borderBottom: "1px solid #ddd", paddingBottom: ".5rem" }}>
        <Level.Side align="left">
          <Level.Item>
            <Icon size={"medium"}>ETH</Icon>
          </Level.Item>
          <Level.Item>
            <b>{props.contract.name}</b>
          </Level.Item>
        </Level.Side>
      </Level>

      <Content>
        <Columns>{listNfts()}</Columns>
      </Content>
    </Panel>
  );
};
