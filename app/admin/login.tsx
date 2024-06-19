"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Dashboard from "./dashboard/page";
import toast, { Toaster } from 'react-hot-toast';
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
      toast.success("Redirecting")
        
    } catch (error) {
      toast.error("password or email seems incorrect");
      console.error("Error logging in to dashboard", error);
    }
  };

  

    return (
      <div className="bg-gradient-to-tl from-[#050B26] from-90% via-30%  via-[#10216d] to-[#050B26] p-10  block mt-20 w-full max-w-96 m-auto rounded-md">
        <div className="flex flex-col gap-2 text-center text-gray-200">
          <h1 className="text-4xl font-black">Login </h1>
          <span className="font-sans">To have access to the dashboard</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="placeholder:font-extrabold placeholder:text-xl font-extrabold text-1xl"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="placeholder:font-extrabold placeholder:text-xl font-extrabold text-1xl"
          />
          <Button
            onClick={handleLogin}
            className="bg-lime-100 text-black font-extrabold text-xl hover:bg-lime-50"
          >
            Login
          </Button>
          <span className="text-center text-2xl text-gray-200">OR</span>
          <hr />
          <Button onClick={signInWithGoogle}        className="bg-lime-100 text-black font-extrabold text-xl hover:bg-lime-50">Google</Button>
        </div>
      </div>
    );

}
