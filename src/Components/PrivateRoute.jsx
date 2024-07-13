import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuth;
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute
