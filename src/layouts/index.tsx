import React, { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/atoms/Loader";
import { RootState } from "../store";
import Header from "./Header";
import NonAuth from "./NonAuthLayout";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.userInfo);
  const { loading } = useSelector((state: RootState) => state.auth);
  return (
    <div className="relative">
      {loading && <Loader />}
      {isAuth ? (
        <div className="min-h-screen">
          <Header />
          <div
            style={{ minHeight: "calc(100vh - 80px)" }}
            className="py-10 px-10 bg-primary"
          >
            {children}
          </div>
        </div>
      ) : (
        <NonAuth>{children}</NonAuth>
      )}
    </div>
  );
};

export default Layout;
