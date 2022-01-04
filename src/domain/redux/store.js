import { configureStore } from '@reduxjs/toolkit'
import nftsReducer from '../nfts/nfts.slice';

export const store = configureStore({
  reducer: {
    nfts: nftsReducer
  },
});
