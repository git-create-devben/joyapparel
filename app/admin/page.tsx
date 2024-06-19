"use client"
import Dashboard from "./dashboard/page";
import AdminLogin from "./login";
// import { useAuth } from "@/hooks/useAuth";
// import { useRouter } from "next/navigation";
export default function Admin() {
// const {user} = useAuth()
// const router = useRouter()
// if(user){
//   router.push("/admin/dashboard")
// }
  return (
    <div className="bg-gradient-to-tl from-[#050B26]  to-[#050B26] h-lvh w-full p-12">
      <h1 className="text-center text-4xl text-lime-200 animate-in mt-10 font-black">
        Admin Dashboard
      </h1>
      <AdminLogin />
    </div>
  );
}
