"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AddButton from "./addbutton";
export default function Sidebar() {
  const { signOut } = useAuth();
  return (
    <aside>
      <div className="hidden lg:flex md:flex text-white w-full max-w-72 py-10 px-8   flex-col gap-2 ">
        <h1 className="font-semibold  text-xl truncate">
          JoyApparel Modesty Fashion
        </h1>
        <hr className="border-1 border-[#ffffff85] " />
        <div className="flex-1 ">
          <ul className="grid items-start px-2 text-sm font-medium lg:px-4 *:transition-all  gap-4 mt-6 *:text-1xl *:cursor-pointer *:rounded-md *:px-11 *:py-3 *:font-bold">
            <Link
              href="/admin/dashboard"
              className="bg-muted text-primary flex items-center gap-3 rounded-lg px-3 py-2  transition-all "
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-white hover:bg-muted hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2  transition-all "
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
              href="/admin/dashboard/product"
              className=" hover:bg-muted flex items-center gap-3 rounded-lg text-white px-3 py-2 transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="#"
              className=" hover:bg-muted text-white flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className=" hover:bg-muted text-white flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <Button className=" hover:bg-muted bg-muted text-primary text-1xl font-bold p-6">
              <Link href="/admin/dashboard/addproduct">Add Product</Link>
            </Button>
            <li
              className=" bg-primary-foreground text-center text-primary hover:text-primary"
              onClick={signOut}
            >
              SignOut
            </li>
          </ul>
        </div>
        {/* mobile */}
       
      </div>

      <MobileNav />
    </aside>
  );
}

export const MobileNav = () => {
  const { signOut } = useAuth();
  return (
    <div className="p-10 absolute -ml-8 mt-2 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-black w-full max-w-80 border-none text-white">
        <div className="flex text-white w-full   flex-col gap-2 ">
        <h1 className="font-semibold  text-xl truncate">
          JoyApparel Modesty Fashion
        </h1>
        <hr className="border-1 border-[#ffffff85] " />
        <div className="flex-1 ">
          <ul className="grid items-start px-2 text-sm font-medium lg:px-4 *:transition-all  gap-4 mt-6 *:text-1xl *:cursor-pointer *:rounded-md *:px-11 *:py-3 *:font-bold">
            <Link
              href="/admin/dashboard"
              className="bg-muted text-primary flex items-center gap-3 rounded-lg px-3 py-2  transition-all "
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-white hover:bg-muted hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2  transition-all "
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge>
            </Link>
            <Link
             href="/admin/dashboard/product"
              className=" hover:bg-muted flex items-center gap-3 rounded-lg text-white px-3 py-2 transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
             href="/admin/dashboard/product"
              className=" hover:bg-muted text-white flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="#"
              className=" hover:bg-muted text-white flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <Button className=" hover:bg-muted bg-muted text-primary text-1xl font-bold p-6">
              <Link href="/admin/dashboard/addproduct">Add Product</Link>
            </Button>
            <li
              className=" bg-primary-foreground text-center text-primary hover:text-primary"
              onClick={signOut}
            >
              SignOut
            </li>
          </ul>
        </div>
        {/* mobile */}
       
      </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
