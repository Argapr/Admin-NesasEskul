// withAuth.js
import { useRouter } from 'next/router';
import { useUser } from '@/components/context/UserContext';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
