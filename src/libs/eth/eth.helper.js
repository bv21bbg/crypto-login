import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export const getVersion = () => {
  return web3.version;
}