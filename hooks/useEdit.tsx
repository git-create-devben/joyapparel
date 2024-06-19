import { db } from "@/lib/firebase";
import { ProductType } from "@/types/ProductTypes";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const EditProduct = async (productId: string, updatedData: Partial<ProductType>) => {
  const productDoc = doc(db, "products", productId);
  try {
    await updateDoc(productDoc, updatedData);
    console.log("Product updated successfully!");
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};



export const fetchProductById = async (productId: string): Promise<ProductType> => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as ProductType;
  } else {
    throw new Error("No such document!");
  }
};

export const updateProduct = async (productId: string, updatedData: Partial<ProductType>): Promise<void> => {
  const docRef = doc(db, "products", productId);
  await updateDoc(docRef, updatedData);
};
