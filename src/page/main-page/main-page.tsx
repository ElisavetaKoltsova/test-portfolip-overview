import { JSX, useState } from "react";
import styles from '../../portfolioOverview.module.scss';
import classNames from "classnames";
import CryptoPrices from "../../components/crypto-prices/crypto-prices";
import AddCryptoModal from "../../components/add-crypto-modal/add-crypto-modal";

export default function MainPage(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolio__header}>
                <h1 className={styles.portfolio__title}>PORTFOLIO OVERVIEW</h1>
                <button className={styles.portfolio__addBtn} onClick={() => setIsModalOpen(true)}>Добавить</button>
            </div>
            <table className={styles.portfolio__table}>
                <thead>
                    <tr>
                        <th>Актив</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Общая стоимость</th>
                        <th>Изм. за 24 ч.</th>
                        <th>% портфеля</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BNB</td>
                        <td>1.00000</td>
                        <td>$557,63</td>
                        <td>$557,63</td>
                        <td className={classNames(styles.positive)}>+0.63%</td>
                        <td>100.00%</td>
                    </tr>
                </tbody>
            </table>
            {
                isModalOpen ? <AddCryptoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> : ''
            }
            {/* <CryptoPrices /> */}
        </div>
    );
}