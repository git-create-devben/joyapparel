import { create } from "zustand";

interface StockDetail {
  stock: number;
  price: number;
  size: string[];
}

interface StockState {
  stockDetails: Record<string, StockDetail>;
  updateStockDetail: (
    sku: string,
    stock: number,
    price: number,
    size: string[]
  ) => void;
}

export const useStockStore = create<StockState>((set) => ({
  stockDetails: {
    'GGPC-001': { stock: 100, price: 99.99, size: ['s'] }   
  },
  updateStockDetail: (sku, stock, price, size) =>
    set((state) => ({
      stockDetails: {
        ...state.stockDetails,
        [sku]: { stock, price, size },
      },
    })),
}));
