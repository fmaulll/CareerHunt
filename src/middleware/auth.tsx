import React, { FC, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute:FC<Props> = ({ children }) => {
  const isAuth = useSelector((state:RootState) => state.auth.userInfo);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Fragment>{children}</Fragment>;
};

export const NonProtectedRoute:FC<Props> = ({ children }) => {
  const isAuth = useSelector((state:RootState) => state.auth.userInfo);
  if (isAuth) {
    return <Navigate to="/jobs" />;
  }
  return <Fragment>{children}</Fragment>;
};
