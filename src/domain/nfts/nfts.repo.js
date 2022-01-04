import axios from "axios";

export class NftsRepository {
  constructor() {
    this.apiUrl = 'https://deep-index.moralis.io/api/v2';
    this.apiKey = '30BA4gj88lKRNonQbpfMWkZmnsHsgIC54ecV7lzOp85V3LXHFkcWagncEQFzPF1v';
  }

  async fetchList() {
    const listResponse = await axios.get(
      `${this.apiUrl}/0xf7f7d74ce9fc6626d629c6e90d9aaa359417dcb5/nft?chain=eth&format=decimal`,
      this.commonHeaders(),
    );

    console.log('[NftsRepository] fetch response', listResponse);

    return listResponse.data;
  }

  commonHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': `${this.apiKey}`
      }
    };
  }
}
