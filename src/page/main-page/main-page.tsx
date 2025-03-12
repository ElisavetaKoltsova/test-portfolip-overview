import { JSX, useEffect, useState } from "react";
import styles from '../../portfolioOverview.module.scss';
import classNames from "classnames";
import AddCryptoModal from "../../components/add-crypto-modal/add-crypto-modal";
import { useBinanceWebSocket } from "../../hooks/useBinanceWebSocket";
import { useAppDispatch } from "../../hooks";
import { setCryptos } from "../../store/crypto-process/crypto-process";

export default function MainPage(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { prices, isLoading } = useBinanceWebSocket();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCryptos({cryptos: prices, isLoading}))
    }, [dispatch, isLoading, prices]);
    
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
        </div>
    );
}