"use client"
import AdminLogin from "./login";
import { useAuth } from "@/hooks/useAuth";
export default function Admin() {
const {user} = useAuth()
  return (
    <div className="bg-black h-lvh w-full p-12">
      <h1 className="text-center text-4xl text-lime-200 animate-in mt-10 font-black">
        Admin Dashboard
      </h1>
      <AdminLogin />
    </div>
  );
}
