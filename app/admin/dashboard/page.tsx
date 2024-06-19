"use client"
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddButton from "./component/addbutton";
import Revenue from "./component/revenue";
import Subscription from "./component/subscribe";
import Sales from "./component/sales";
import Users from "./component/user";
import RecentSales from "./component/recentSales";
import Transaction from "./component/transaction";
export default function Dashboard() {
    // const { user} = useAuth();
    // const router = useRouter();
  
    // useEffect(() => {
    //   if (user && user.email !== "benlad636@gmail.com") {
    //     router.push("/admin/dashboard");
    //   }
    // }, [user, router]);
  
    // if (!user) {
    //   return <AdminLogin/>;
    // }
  return (
    <div className="">
     <div className="flex lg:justify-between items-center justify-around">
      <span className="text-white">Dashboard</span>
      <Button className="bg-[#10216d] text-1xl font-bold p-6"><Link href="/admin/dashboard/addproduct">Add Product</Link></Button>
     </div>
     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
     <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Revenue/>
      <Subscription/>
      <Sales/>
      <Users/>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Transaction/>
        <RecentSales/>
      </div>
      <AddButton/>
       </main>
    </div>
  );
}
