import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userRole: 'user' | 'admin' | null;
  requiredRole: 'user' | 'admin';
}

const ProtectedRoute = ({ children, userRole, requiredRole }: ProtectedRouteProps) => {
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== requiredRole) {
    return <div className="p-8 text-center text-red-500 font-semibold">Access Denied: Unauthorized!</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
