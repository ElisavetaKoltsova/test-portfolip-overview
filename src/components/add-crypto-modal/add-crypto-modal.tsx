import { JSX } from "react";
import classNames from "classnames";
import styles from "./addCryptoModal.module.scss";
import CryptoPrices from "../crypto-prices/crypto-prices";

interface Currency {
  name: string;
  price: string;
  change: string;
  type: "positive" | "negative" | "neutral";
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const currencies: Currency[] = [
  { name: "BTC", price: "$82829.64000", change: "+1.19%", type: "positive" },
  { name: "ETH", price: "$1907.85000", change: "-0.67%", type: "negative" },
  { name: "BNB", price: "$558.31000", change: "+1.87%", type: "positive" },
  { name: "BCC", price: "$0.00000", change: "+0.00%", type: "neutral" },
  { name: "NEO", price: "$7.83000", change: "+2.89%", type: "positive" },
];

export default function AddCryptoModal({ isOpen, onClose }: ModalProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>Поиск валюты</h2>
        <input type="text" />
        <hr className={styles.modal__divider} />

        <CryptoPrices />

        <div className={styles.modal__selected}>
          <span>ETH</span>
          <span className={styles.modal__price}>$1907.85000</span>
        </div>

        <h3 className={styles.modal__subtitle}>Количество</h3>
        <input type="text" />
        <hr className={styles.modal__divider} />

        <div className={styles.modal__buttons}>
          <button className={classNames(styles.modal__button, styles["modal__button--add"])}>добавить</button>
          <button className={classNames(styles.modal__button, styles["modal__button--cancel"])} onClick={onClose}>
            отмена
          </button>
        </div>
      </div>
    </div>
  );
};
