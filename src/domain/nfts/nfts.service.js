import { NftsRepository } from "./nfts.repo";

const CONTRACTS = [
  {
    key: 'cryptopunks',
    currency: "ETH",
    address: "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    name: "Cryptopunks",
  },
];


export class NftsService {

  constructor() {
    this.repo = new NftsRepository();
  }

  fetchList() {
    const list = this.repo.fetchList();
    return list;
  }

  async fetchAndFilterByContractList() {
    const fetchResponse = await this.repo.fetchList();
    const response = [];

    if (fetchResponse.total === 0) {
      return response;
    }

    console.log('[fetchAndFilterByContractList]', fetchResponse);

    CONTRACTS.forEach(contract => {
      const nfts = fetchResponse.result.filter(item => item.token_address === contract.address);
      console.warn(`[fetchAndFilterByContractList] found for ${contract.key}`, nfts);
      
      if (nfts && nfts.length) {
        response.push({
          key: contract.key,
          name: contract.name,
          nfts: nfts.map(nft => {
            return {
              id: nft.token_id,
              metadata: JSON.parse(nft.metadata)
            }
          })
        });
      }
    });

    return response;
  }
}
