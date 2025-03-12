import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../consts";
import { cryptoProcess } from "./crypto-process/crypto-process";

export const rootReducer = combineReducers({
  [NameSpace.Crypto]: cryptoProcess.reducer
});
