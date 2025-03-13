import { JSX } from "react";
import { CryptoData } from "../../hooks/useBinanceWebSocket";
import styles from '../../portfolioOverview.module.scss';
import { useAppDispatch } from "../../hooks";
import { deleteUsersCrypto } from "../../store/crypto-process/crypto-process";

type UsersCryptoItemProps = {
  symbol: string;
  prices: CryptoData;
  count: number;
  totalPortfolioValue: number;
}

export default function UsersCryptoItem({symbol, prices, count, totalPortfolioValue}: UsersCryptoItemProps): JSX.Element {
  const totalPrice = Number(prices.price) * count;
  const percentage = totalPortfolioValue ? ((totalPrice / totalPortfolioValue) * 100).toFixed(2) : "0.00";
  const dispatch = useAppDispatch();

  const handleDeleteTrClick = () => {
    dispatch(deleteUsersCrypto(symbol));
  };
  
  return (
    <tr key={symbol} onClick={handleDeleteTrClick}>
      <td>{symbol}</td>
      <td>{count}</td>
      <td>{prices.price}</td>
      <td>{totalPrice}</td>
      <td className={styles[`${parseFloat(prices.change) >= 0 ? "positive" : "negative"}`]}>{parseFloat(prices.change) >= 0 ? "+" : ""} {prices.change}%</td>
      <td>{percentage}%</td>
    </tr>
  );
}