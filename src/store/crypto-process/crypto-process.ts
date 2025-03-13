import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CryptoProcess } from "../../types/state";
import { NameSpace } from "../../consts";
import { CryptoData } from "../../hooks/useBinanceWebSocket";

const loadUsersCryptos = (): Record<string, { prices: CryptoData; count: number }> => {
  const data = localStorage.getItem("usersCryptos");
  return data ? JSON.parse(data) : {};
};

const initialState: CryptoProcess = {
  cryptos: {},
  usersCryptos: loadUsersCryptos(),
  isCryptosDataLoading: false
};

export const cryptoProcess = createSlice({
  name: NameSpace.Crypto,
  initialState,
  reducers: {
    setCryptos: (state, action: PayloadAction<{cryptos: Record<string, CryptoData>; isLoading: boolean}>) => {
      state.cryptos = action.payload.cryptos;
      state.isCryptosDataLoading = action.payload.isLoading;
    },
    addUsersCrypto: (state, action: PayloadAction<{name: string, prices: CryptoData, count: number}>) => {
      if (state.usersCryptos[action.payload.name] === undefined) {
        state.usersCryptos[action.payload.name] = {
          prices: action.payload.prices,
          count: action.payload.count
        };
      } else {
        state.usersCryptos[action.payload.name].count += action.payload.count;
      }
      localStorage.setItem("usersCryptos", JSON.stringify(state.usersCryptos));
    },
    deleteUsersCrypto: (state, action: PayloadAction<string>) => {
      delete state.usersCryptos[action.payload];
      localStorage.setItem("usersCryptos", JSON.stringify(state.usersCryptos));
    }
  }
});

export const { setCryptos, addUsersCrypto, deleteUsersCrypto } = cryptoProcess.actions;
