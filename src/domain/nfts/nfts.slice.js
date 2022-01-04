import { createSlice } from '@reduxjs/toolkit';
import { fetchNftsList } from "./nfts.controller";


const initialState = {
  isBusy: false,
  list: [],
};

export const nftsSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {
    addNft: ( state, action ) => {
      state.list.push( action.payload );
    }
  },
  extraReducers: (builder) => {
    builder.addCase( fetchNftsList.pending, ( state ) => {
      state.isBusy = true;
    });
    builder.addCase( fetchNftsList.rejected, ( state, action ) => {
      console.warn('Fetch REJECTED', action);
      state.isBusy = false;
    });
    builder.addCase( fetchNftsList.fulfilled, (state, action) => {
      console.log('Fetch OK', action);
      state.list = action.payload;
      state.isBusy = false;
    });
  }
});

export const { addNft } = nftsSlice.actions;

export const nftsBusy = (state) => state.nfts.isBusy;
export const nftsList = (state) => state.nfts.list;
export const nftsQuerySelector = (state) => state.nfts.query;

export default nftsSlice.reducer;
