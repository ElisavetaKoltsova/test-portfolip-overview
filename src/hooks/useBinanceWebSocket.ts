import { useEffect, useState } from "react";

const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/!ticker@arr";
const UPDATE_INTERVAL = 5000; // Обновление раз в 5 секунд

type CryptoData = {
  price: string;
  change: string;
};

export const useBinanceWebSocket = () => {
  const [prices, setPrices] = useState<Record<string, CryptoData>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<number>(Date.now());

  useEffect(() => {
    const socket = new WebSocket(BINANCE_WS_URL);

    socket.onmessage = (event) => {
      const now = Date.now();
      if (now - lastUpdate < UPDATE_INTERVAL) return;
      setLastUpdate(now);

      const data = JSON.parse(event.data);
      const updatedPrices: Record<string, CryptoData> = {};

      data.forEach((asset: { s: string; c: string; P: string }) => {
        updatedPrices[asset.s] = {
          price: parseFloat(asset.c).toFixed(5),
          change: parseFloat(asset.P).toFixed(2),
        };
      });

      setPrices(updatedPrices);
      setIsLoading(false);
    };

    socket.onerror = (error) => console.error("WebSocket Error:", error);
    socket.onclose = () => console.log("WebSocket Closed");

    return () => socket.close();
  }, [lastUpdate]);

  return { prices, isLoading };
};
