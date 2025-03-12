import { JSX } from "react";
import classNames from "classnames";
import styles from "./addCryptoModal.module.scss";
import CryptoPrices from "../crypto-prices/crypto-prices";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
