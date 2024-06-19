import { db } from "@/lib/firebase";
import { ProductType } from "@/types/ProductTypes";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


// export const EditProduct = async (productId: string, updatedData: Partial<ProductType>) => {
//   const productDoc = doc(db, "products", productId);
//   try {
//     await updateDoc(productDoc, updatedData);
//     console.log("Product updated successfully!");
//   } catch (error) {
//     console.error("Error updating product: ", error);
//   }
// };



export const FetchProductById = async (productId: string): Promise<ProductType> => {
  const docRef = doc(db, "products", productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as ProductType;
  } else {
    throw new Error("No such document!");
  }
};

export const UpdateProduct = async (productId: string, updatedData: Partial<ProductType>): Promise<void> => {
  const router = useRouter()
  const productDoc = doc(db, "products", productId);
  try {
    await updateDoc(productDoc, updatedData);
    toast.success("Editing successful")
    router.push("/admin/dashboard/product")
    console.log("Product updated successfully!");
  } catch (error) {
    toast.error("failed to edit")
    console.error("Error updating product: ", error);
  }
};
