"use client";
import Pdetails from "../component/pdetails";
import Pstatus from "../component/pstatus";
import Stock from "../component/stock";
import Pimage from "../component/pimage";
import Achieve from "../component/achieve";
import Category from "../component/category";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useStockStore } from "@/hooks/useStore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Page() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [subCate, setSubCate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { stockDetails, updateStockDetail } = useStockStore();
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [pending, setPending] = useState(false);

  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPending(true);
    const imageUrls: string[] = [];

    for (const image of images) {
      try {
        const storage = getStorage();
        const imageRef = ref(storage, `products/${image.name}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);
        imageUrls.push(imageUrl);
      } catch (error) {
        console.error("Error adding product: ", error);
        toast.error("Error adding product");
        setPending(false);
        return;
      }
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        description,
        status,
        subCate,
        category,
        stockDetails,
        imageUrls,
        createdAt: Timestamp.now(),
      });

      toast.success("Product added successfully!");
      router.push("/admin/dashboard/product");
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Error adding product");
    }

    setPending(false);
  };

  const handleInputChange = (
    sku: string,
    field: string,
    value: string | number
  ) => {
    const updatedStockDetails = { ...stockDetails };
    if (!updatedStockDetails[sku]) {
      updatedStockDetails[sku] = { stock: 0, price: 0, size: [] };
    }
    if (field === "stock") {
      updatedStockDetails[sku].stock = Number(value);
    } else if (field === "price") {
      updatedStockDetails[sku].price = Number(value);
    }
    updateStockDetail(
      sku,
      updatedStockDetails[sku].stock,
      updatedStockDetails[sku].price,
      updatedStockDetails[sku].size
    );
  };

  const handleSizeChange = (sku: string, size: string) => {
    const updatedStockDetails = { ...stockDetails };
    if (!updatedStockDetails[sku]) {
      updatedStockDetails[sku] = { stock: 0, price: 0, size: [] };
    }
    updatedStockDetails[sku].size = [size];
    updateStockDetail(
      sku,
      updatedStockDetails[sku].stock,
      updatedStockDetails[sku].price,
      updatedStockDetails[sku].size
    );
  };

  const addNewVariant = () => {
    const newSku = `new_sku_${Object.keys(stockDetails).length + 1}`;
    updateStockDetail(newSku, 0, 0, []);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex gap-2 text-white">
        <span>Home</span> /<span>Add Product</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"
      >
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="row-span-3 lg:col-span-2">
            <Pdetails
              name={name}
              setName={setName}
              description={description}
              setDescription={setDescription}
            />
          </div>
          <div className="row-span-1 lg:col-span-1">
            <Pstatus status={status} setStatus={setStatus} />
          </div>
          <div className="row-span-2 lg:col-span-2">
            <Stock
              stockDetails={stockDetails}
              handleInputChange={handleInputChange}
              handleSizeChange={handleSizeChange}
              addNewVariant={addNewVariant}
            />
          </div>
          <div className="row-span-2 lg:col-span-1  md:-mt-52">
            <Pimage
              setImages={setImages}
              previewUrls={previewUrls}
              setPreviewUrls={setPreviewUrls}
            />
          </div>
          <div className="row-span-1 lg:col-span-2 ">
            <Category category={category} setCategory={setCategory}  subCate={subCate} setSubCate={setSubCate}/>
          </div>
          <div className="row-span-1 lg:col-span-1 ">
            <Achieve />
          </div>
          <Button
            type="submit"
            disabled={pending}
            className="bg-white text-black text-2xl font-extrabold hover:bg-slate-50 absolute md:relative  md:top-0 md:right-0 right-1 top-10"
          >
            {pending ? "Submitting..." : "Submit"}
          </Button>
          
        </div>
      </form>
    </main>
  );
}
