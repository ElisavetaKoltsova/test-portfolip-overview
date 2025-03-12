import classNames from "classnames";
import { useAppSelector } from "../../hooks";
import { CryptoData } from "../../hooks/useBinanceWebSocket";
import { getCryptos, getCryptosDataLoadingStatus } from "../../store/crypto-process/selectors";
import styles from '../add-crypto-modal/addCryptoModal.module.scss';
import ClipLoader from "react-spinners/ClipLoader";

// type CryptoPricesProps = {
//   prices: Record<string, CryptoData>;
//   isLoading: boolean;
// }

const CryptoPrices = () => {
  const prices = useAppSelector(getCryptos);
  const isLoading = useAppSelector(getCryptosDataLoadingStatus);

  return (
    <div className={styles.modal__crypto}>
      {
        isLoading || prices === null ?
        <ClipLoader color="rgb(255, 85, 85)" size={50} /> : (
          <ul className={styles.modal__list}>
        {Object.entries(prices).map(([symbol, { price, change }]) => (
            <li key={symbol} className={styles.modal__item}>
              <span>{symbol}</span>
              <span className={styles.modal__price}>{price}</span>
              <span className={styles[`modal__change${parseFloat(change) >= 0 ? "--positive" : "--negative"}`]}>
                {parseFloat(change) >= 0 ? "+" : ""} {change}%
              </span>
            </li>
          ))}
      </ul>
        )
      }
      
    </div>
  );
};

export default CryptoPrices;
