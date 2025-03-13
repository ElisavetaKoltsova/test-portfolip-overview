import { NameSpace } from "../../consts";
import { State } from "../../types/state";

export const getCryptos = (state: Pick<State, NameSpace.Crypto>) =>
  state[NameSpace.Crypto].cryptos;
export const getUsersCryptos = (state: Pick<State, NameSpace.Crypto>) =>
  state[NameSpace.Crypto].usersCryptos;

export const getCryptosDataLoadingStatus = (state: Pick<State, NameSpace.Crypto>) =>
  state[NameSpace.Crypto].isCryptosDataLoading;
