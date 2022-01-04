import { createAsyncThunk } from "@reduxjs/toolkit";
import { NftsService } from "./nfts.service";

let _nftService = null;

const getNftsService = () =>{
  if (!_nftService) {
    _nftsService = new NftsService();
  }

  return _nftService;
}

export const fetchNftsList = createAsyncThunk(
  'nfts/fetchList',
  async () => {
    const nftsService = new NftsService();
    const response = await nftsService.fetchAndFilterByContractList();
    return response;
  }
);
