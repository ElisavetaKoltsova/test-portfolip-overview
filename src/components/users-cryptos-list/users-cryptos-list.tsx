import { JSX } from "react";
import { useAppSelector } from "../../hooks";
import { getUsersCryptos } from "../../store/crypto-process/selectors";
import UsersCryptoItem from "../users-crypto-item/users-crypto-item";

export default function UsersCryptosList(): JSX.Element {
  const usersCryptos = useAppSelector(getUsersCryptos);

  const totalPortfolioValue = Object.values(usersCryptos).reduce((acc, { prices, count }) => {
    return acc + Number(prices.price) * count;
  }, 0);

  return (
    <tbody>
      {
        Object.entries(usersCryptos).length ?
        Object.entries(usersCryptos).map(([symbol, { prices, count }]) => (
          <UsersCryptoItem key={symbol} symbol={symbol} prices={prices} count={count} totalPortfolioValue={totalPortfolioValue} />
        )) : (<tr><td>Добавьте крипту</td></tr>)
      }
    </tbody>
  );
}