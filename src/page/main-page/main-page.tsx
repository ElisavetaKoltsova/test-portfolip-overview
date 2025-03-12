import { JSX } from "react";
import styles from '../../portfolioOverview.module.scss';
import classNames from "classnames";

export default function MainPage(): JSX.Element {
  let socket = new WebSocket("wss://stream.binance.com:9443/stream?streams");
  console.log(socket)
  return (
    <div className={styles.portfolio}>
        <div className={styles.portfolio__header}>
            <h1 className={styles.portfolio__title}>PORTFOLIO OVERVIEW</h1>
            <button className={styles.portfolio__addBtn}>добавить</button>
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
    </div>
);
}