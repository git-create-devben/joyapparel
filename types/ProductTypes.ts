import { Timestamp } from "firebase/firestore";

// Define StockDetail type
interface StockDetail {
    stock: number;
    price: number;
    size: string[];
  }
  
  // Define Product type
  export interface ProductType {
    id: string;
    name: string;
    description: string;
    status: string;
    category: string;
    subCate: string;
    stockDetails: Record<string, StockDetail>;
    imageUrls: string[];
    createdAt: Timestamp; // Use the Timestamp type for createdAt
  }
  
