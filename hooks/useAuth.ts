import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleAuthProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
interface AuthUser {
  uid: string;
  email: string | null;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        router.push("/admin");
      } else {
        const { uid, email } = firebaseUser;
        setUser({ uid, email });
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      toast.success("SignIn successfully!");
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 1000)
     
    } catch (error) {
      console.error("Error signing in with Google", error);
      setTimeout(() => {
        router.push("/admin");
      }, 1000)
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      toast.success("Signed out successfully");
      // Use a small delay to allow the toast to be displayed
      setTimeout(() => {
        router.push("/admin");
      }, 1000); // 1 second delay
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  return { user, signInWithGoogle, signOut };
};
