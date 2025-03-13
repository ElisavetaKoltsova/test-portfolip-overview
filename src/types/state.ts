import { CryptoData } from "../hooks/useBinanceWebSocket";
import { store } from "../store";

export type Crypto = {
  name: string;
  prices: CryptoData;
}

export type CryptoProcess = {
  cryptos: Record<string, CryptoData>;
  usersCryptos: Record<string, {prices: CryptoData, count: number}>;
  isCryptosDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;