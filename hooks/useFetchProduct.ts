import { collection, getDocs} from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust the import path accordingly
import { ProductType } from '@/types/ProductTypes';

const FetchProducts = async (): Promise<ProductType[]> => {
  const productsCollection = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as ProductType[];
  return productsList;
};

export { FetchProducts };




