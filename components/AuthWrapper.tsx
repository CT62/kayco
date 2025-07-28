'use client';
import { useState, useEffect } from 'react';
import PasswordModal from './PasswordModal';

export default function AuthWrapper({ 
  children, 
  isAuthenticated 
}: { 
  children: React.ReactNode;
  isAuthenticated: Promise<boolean>;
}) {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authenticated = await isAuthenticated;
        setShowModal(!authenticated);
        console.log(authenticated);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setShowModal(true);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthentication();
  }, []);

  const handleAuthSuccess = () => {
    setShowModal(false);
    window.location.reload();
  };

  if (loading) {
    return <div>Loading authentication...</div>; 
  }

  if (showModal) {
    return <PasswordModal onSuccess={handleAuthSuccess} />;
  }

  return <>{children}</>;
}
