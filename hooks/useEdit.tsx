import { db } from "@/lib/firebase"; // Adjust the import according to your firebase setup
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ProductType } from "@/types/ProductTypes";
import { useRouter } from "next/navigation";

// Fetch a product by ID
export const FetchProductById = async (productId: string): Promise<ProductType> => {
  const productRef = doc(db, "products", productId);
  const productSnap = await getDoc(productRef);
  
  if (!productSnap.exists()) {
    throw new Error("Product not found");
  }
  
  return productSnap.data() as ProductType;
};

// Update a product
export const UpdateProduct = async (productId: string, updatedData: Partial<ProductType>): Promise<void> => {
  const router = useRouter()
  const productRef = doc(db, "products", productId);
  await updateDoc(productRef, updatedData);
  router.push("/admin/dashboard/product")
};
