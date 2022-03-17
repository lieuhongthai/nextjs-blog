import React from "react";
import { Outlet } from "react-router-dom";
import style from "./auth-layout.less";

const AuthLayout = (props) => {
  return (
    <>
      <main className={style.content}>
        {console.log(12005, props)}
        <div>aaaaaaaaaaaaa</div>
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
