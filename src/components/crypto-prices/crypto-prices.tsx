import { useBinanceWebSocket } from "../../hooks/useBinanceWebSocket";
import styles from '../add-crypto-modal/addCryptoModal.module.scss';
import ClipLoader from "react-spinners/ClipLoader";

const CryptoPrices = () => {
  const { prices, isLoading } = useBinanceWebSocket();

  return (
    <div className={styles.modal__crypto}>
      {
        isLoading ?
        <ClipLoader color="rgb(255, 85, 85)" size={50} /> : ''
      }
      <ul className={styles.modal__list}>
        {Object.entries(prices).map(([symbol, { price, change }]) => (
            <li key={symbol} className={styles.modal__item}>
              <span>{symbol}</span>
              <span className={styles.modal__price}>{price}</span>
              <span className={styles.modal__change}>
                {parseFloat(change) >= 0 ? "+" : ""} {change}%
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
