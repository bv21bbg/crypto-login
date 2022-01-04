import { useCallback, useEffect, useState } from "react";
import { Container, Heading, Section } from "react-bulma-components";
import { useAppDispatch, useAppSelector } from "../../domain/redux/hooks";
import { NftsCard } from "../cards/nfts.card";
import {
  nftsList,
  nftsBusy,
  nftsQuerySelector,
} from "../../domain/nfts/nfts.slice";
import { fetchNftsList } from "../../domain/nfts/nfts.controller";
import { useMemo } from "react";

export const NftAvatarsPage = () => {
  const [isDebugging, setDebugging] = useState(false);
  const nftsData = useAppSelector(nftsList);
  const isBusy = useAppSelector(nftsBusy);
  const querySelector = useAppSelector(nftsQuerySelector);
  const dispatch = useAppDispatch();

  const fetchNfts = useCallback(async () => {
    console.log("[nft-avatars] fetchNfts");
    try {
      await dispatch(fetchNftsList());
    } catch (e) {
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    fetchNfts();
  }, [fetchNfts]);

  return (
    <div>
      <Section>
        <Container textAlign={"center"}>
          <Heading>Pick your NFT avatar</Heading>
          <Heading subtitle>
            Here you can select the NFT that you want to use as an avatar
          </Heading>
        </Container>
      </Section>

      {isBusy && (
        <Container
          textAlign={"center"}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          <div
            className="loader-wrapper"
            style={{ width: "3rem", fontSize: "2rem" }}
          >
            <div className="loader is-loading"></div>
          </div>
        </Container>
      )}

      {!isBusy && (
        <Container>
          {nftsData.map((item) => (
            <NftsCard contract={item} key={item.key} />
          ))}
          {isDebugging && (
            <pre>
              <code lang="JavaScript">
                {JSON.stringify(nftsData, undefined, 2)}
              </code>
            </pre>
          )}
        </Container>
      )}
    </div>
  );
};
