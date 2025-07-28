'use client';
import { useState } from 'react';
import PasswordModal from './PasswordModal';

export default function AuthWrapper({ 
  children, 
  isAuthenticated 
}: { 
  children: React.ReactNode;
  isAuthenticated: boolean;
}) {
  const [showModal, setShowModal] = useState(!isAuthenticated);

  const handleAuthSuccess = () => {
    setShowModal(false);
    window.location.reload();
  };

  if (showModal) {
    return <PasswordModal onSuccess={handleAuthSuccess} />;
  }

  return <>{children}</>;
}
