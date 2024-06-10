"use client"
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
export default function Dashboard() {
    const { user } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (user && user.email !== "benlad636@gmail.com") {
        router.push("/");
      }
    }, [user, router]);
  
    if (!user) {
      return <p>Loading...</p>;
    }
  return (
    <div className="bg-black h-lvh w-full p-12">
      <h1 className="text-center text-4xl text-lime-200 animate-in mt-10 font-black">
         Dashboard
      </h1>
    </div>
  );
}
