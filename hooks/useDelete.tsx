

import { db } from "@/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const DeleteProduct = async (productId: string) => {
  const productDoc = doc(db, "products", productId);
  try {
    await deleteDoc(productDoc);
    console.log("Product deleted successfully!");
  } catch (error) {
    console.error("Error deleting product: ", error);
  }
};
