import { Section, Container, Heading, Card } from "react-bulma-components";
import { WalletCard } from "../cards/Wallet.card";

export const WalletPage = () => {
  return (
    <div>
      <Section>
        <Container textAlign={"center"}>
          <Heading>Connect your wallet</Heading>
          <Heading subtitle>
            Here you can connect to your preferred wallet
          </Heading>
        </Container>
      </Section>
      <Container>
        <WalletCard />
      </Container>
    </div>
  );
};
