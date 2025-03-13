import { JSX, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./addCryptoModal.module.scss";
import CryptoPrices from "../crypto-prices/crypto-prices";
import { useAppDispatch } from "../../hooks";
import { addUsersCrypto } from "../../store/crypto-process/crypto-process";
import { CryptoData } from "../../hooks/useBinanceWebSocket";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCryptoModal({ isOpen, onClose }: ModalProps): JSX.Element | null {
  const [selectedCrypto, setSelectredCrypto] = useState<{name: string, prices: CryptoData, count: number} | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const countInputRef = useRef(null);
  const searchInputRef = useRef(null);
  
  if (!isOpen) {
    return null;
  }

  const handleSelectCryptoButonClick = (name: string, prices: CryptoData) => {
    const count = Number((countInputRef.current as unknown as HTMLInputElement).value);
    setSelectredCrypto({name, prices, count: count === 0 ? 1 : count});
    setMessage(null);
  };

  const handleAddCryptoButtonClick = () => {
    if (selectedCrypto) {
      dispatch(addUsersCrypto(selectedCrypto));
    } else {
      setMessage('Выберите крипту');
    }
  };

  const handleCountInputChange = () => {
    if (selectedCrypto) {
      setSelectredCrypto({
        name: selectedCrypto.name,
        prices: selectedCrypto.prices,
        count: Number((countInputRef.current as unknown as HTMLInputElement).value)
      });
    }
  };

  const handleSearchInputInput = () => {
    setSearchValue((searchInputRef.current as unknown as HTMLInputElement)?.value);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>Поиск валюты</h2>
        <input type="text" ref={searchInputRef} onChange={handleSearchInputInput} />
        <hr className={styles.modal__divider} />

        <CryptoPrices onClick={handleSelectCryptoButonClick} search={searchValue} />

        {
          selectedCrypto ? (
            <div className={styles.modal__selected}>
              <span>{selectedCrypto.name}</span>
              <span className={styles.modal__price}>${selectedCrypto.prices.price}</span>
            </div>
          ) : ''
        }

        {
          message ? (
            <div className={styles.modal__selected}>
              <span>{message}</span>
            </div>
          ) : ''
        }
        
        <h3 className={styles.modal__subtitle}>Количество</h3>
        <input type="number" ref={countInputRef} min={1} onChange={handleCountInputChange} />
        <hr className={styles.modal__divider} />

        <div className={styles.modal__buttons}>
          <button className={classNames(styles.modal__button, styles["modal__button--add"])} onClick={handleAddCryptoButtonClick}>добавить</button>
          <button className={classNames(styles.modal__button, styles["modal__button--cancel"])} onClick={onClose}>
            отмена
          </button>
        </div>
      </div>
    </div>
  );
};
