import React from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../services/AuthContext";
import style from "./auth-layout.less";

const AuthLayout = (props) => {
  const auth = useAuth();
  if (auth.user) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <>
      <main className={style.content}>
        <Outlet />
      </main>
    </>
  );
};
export function HomeLayout() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default AuthLayout;
