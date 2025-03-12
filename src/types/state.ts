import { CryptoData } from "../hooks/useBinanceWebSocket";
import { store } from "../store";

export type CryptoProcess = {
  cryptos: Record<string, CryptoData> | null;
  isCryptosDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;