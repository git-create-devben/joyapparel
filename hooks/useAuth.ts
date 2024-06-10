
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

interface AuthUser {
  uid: string;
  email: string | null;
  // Add other properties if needed
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        router.push('/admin');
      } else {
        const { uid, email } = firebaseUser;
        setUser({ uid, email });
      }
    });
    return () => unsubscribe();
  }, [router]);

  return { user };
};
