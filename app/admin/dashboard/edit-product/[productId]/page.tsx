"use client";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FetchProductById, UpdateProduct } from "@/hooks/useEdit"; // your fetch and update functions
import { useParams, useRouter } from "next/navigation";
import { ProductType } from "@/types/ProductTypes";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import toast from "react-hot-toast";

const EditProduct = () => {
  const { productId } = useParams() as { productId: string };
  const queryClient = useQueryClient();
  const router = useRouter()
  const {
    data: product,
    isLoading,
    error,
    isPending
  } = useQuery<ProductType>({
    queryKey: ["product", productId],
    queryFn: () => FetchProductById(productId),
    enabled: !!productId, // Ensure the query only runs if productId is available
  });
  const [formData, setFormData] = useState<Partial<ProductType>>({});

  // Define the mutation function
  const updateProductMutation = async (updatedData: Partial<ProductType>) => {
    await UpdateProduct(productId, updatedData);
  };

  const mutation = useMutation({
    mutationFn: updateProductMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      // router.push("/admin/dashboard/product")

    },
    
    onError: (error) => {
      console.error('Error updating product:', error);
    },
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
    // toast.success("Editing successful")
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 ">
        <form onSubmit={handleSubmit}>
          <div className=" ">
            <div className="flex items-center gap-4 ">
              <Link href="/admin/dashboard/product">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>

              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 text-white">
                Edit product
              </h1>
              {/* <Badge variant="outline" className="ml-auto sm:ml-0">
              In stock
            </Badge> */}
              <div className="hidden  gap-2 md:ml-auto md:flex ">
                <Link href="/admin/dashboard/product">
                  <Button variant="destructive" size="sm">
                    Discard
                  </Button>
                </Link>
                <Button size="sm" variant="outline" type="submit" className="">
                  {isPending? "Saving...": "Save product"}

                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 md:mt-5">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Edit the product details to match your need
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Gamer Gear Pro Controller"
                          name="name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          className="min-h-32"
                          name="description"
                          value={formData.description || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                      You cant edit stock for now, you can only add more for now
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">SKU</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-001
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-1" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-1"
                              type="number"
                              defaultValue="100"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-1" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-1"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Variant
                    </Button>
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={(value) => handleSelectChange("category", value)}>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue
                              placeholder={
                                formData.category || "select category"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Blouse">Blouse</SelectItem>
                            <SelectItem value="Gown">Gown</SelectItem>
                            <SelectItem value="Two piece">Two piece</SelectItem>
                            <SelectItem value="Shirt">Shirt</SelectItem>
                            <SelectItem value="Skirt">Skirt</SelectItem>
                            <SelectItem value="Wedding-Gown">
                              Wedding-Gown
                            </SelectItem>
                            <SelectItem value="Custom Dresses">
                              Custom Dresses
                            </SelectItem>
                            <SelectItem value="Trouser">Trouser</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Who is for?</Label>
                        <Select onValueChange={(value) => handleSelectChange("subCate", value)}>
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select subcategory"
                          >
                            <SelectValue
                              placeholder={formData.subCate || "select"}
                              
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Women">Women</SelectItem>
                            <SelectItem value="Kids">Kids</SelectItem>
                            <SelectItem value="sweatshirts">
                              Collection
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Product Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select onValueChange={(value) => handleSelectChange("status", value)}>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue
                              placeholder={formData.status}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Active</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Product Images</CardTitle>
                    <CardDescription>
                      NOTE: updating the image is not yet available.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={
                          formData.imageUrls?.[0] ||
                          "https://placehold.co/600x400@2x.png"
                        }
                        width="300"
                        priority
                      />
                      <div className="grid grid-cols-3 gap-2">
                        {formData.imageUrls?.map((image) => {
                          return (
                            <div key={image}>
                              <button>
                                <Image
                                  alt="Product image"
                                  className="aspect-square w-full rounded-md object-cover"
                                  height="84"
                                  src={
                                    image ||
                                    "https://placehold.co/600x400@2x.png"
                                  }
                                  width="84"
                                  priority
                                />
                              </button>
                              {/* <button>
                              <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src={
                                  image || "https://placehold.co/600x400@2x.png"
                                }
                                width="84"
                              />
                            </button> */}
                            </div>
                          );
                        })}
                        <button
                          className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                          disabled
                        >
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5" className="hidden">
                  <CardHeader>
                    <CardTitle>Archive Product</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Archive Product
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden mt-6">
              <Link href="/admin/dashboard/product">
                <Button variant="destructive" size="sm">
                  Discard
                </Button>
              </Link>
              <Button size="sm" variant="outline" type="submit" className="">
                Save Product
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditProduct;
