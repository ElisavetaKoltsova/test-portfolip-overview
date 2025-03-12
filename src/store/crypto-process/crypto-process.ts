import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CryptoProcess } from "../../types/state";
import { NameSpace } from "../../consts";
import { CryptoData } from "../../hooks/useBinanceWebSocket";

const initialState: CryptoProcess = {
  cryptos: null,
  isCryptosDataLoading: false
};

export const cryptoProcess = createSlice({
  name: NameSpace.Crypto,
  initialState,
  reducers: {
    setCryptos: (state, action: PayloadAction<{cryptos: Record<string, CryptoData>; isLoading: boolean}>) => {
      state.cryptos = action.payload.cryptos;
      state.isCryptosDataLoading = action.payload.isLoading;
    }
  }
});

export const { setCryptos } = cryptoProcess.actions;
