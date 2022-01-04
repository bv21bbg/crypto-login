import { Card, Icon, Level, Navbar } from "react-bulma-components";
import { Briefcase, CreditCard } from "react-feather";
import { useLocation } from "react-router-dom";

export const PageHead = (props) => {
  const args = {
    color: "success",
    fixed: "top",
  };

  const location = useLocation();

  console.log(location);

  return (
    <Navbar {...args}>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nexus_logo_2015.svg/1280px-Nexus_logo_2015.svg.png"
            alt="Nexus"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item
            href="/wallets"
            active={location.pathname === "/wallets"}
          >
            Connect wallet
          </Navbar.Item>
          <Navbar.Item
            href="/nft-avatars"
            active={location.pathname === "/nft-avatars"}
          >
            Choose NFT avatar
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container align="right">
          <Navbar.Item href="#">
            <Briefcase />
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
