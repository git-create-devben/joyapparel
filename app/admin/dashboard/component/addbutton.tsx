import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AddButton() {
  return (
    <div
      className="h-dvh mt-5 max-h-96 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
    >
      <div className="flex flex-col items-center gap-1 text-center p-10">
        {/* <h3 className="text-2xl font-bold tracking-tight">
          You have no products
        </h3>
        <p className="text-sm text-muted-foreground">
          You can start selling as soon as you add a product.
        </p> */}
        <Button className="mt-6 hover:bg-muted bg-muted text-primary text-1xl font-bold p-6">
            <Link href="/admin/dashboard/addproduct">Add Product</Link>
          </Button>
      </div>
    </div>
  )
}
