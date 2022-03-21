import React from "react";
import AuthLayout, { HomeLayout } from "../components/AuthLayout";
import MasterLayout2 from "../components/layouts/master-template-2";
import Login from "../pages/login";
import PageNotFound from "../pages/page-not-found";
// import TableUser from "../pages/users/table-user";

/**
 * lazy loading
 */
const TableUser = React.lazy(()=>import("../pages/users/table-user"));
const TestCanvas = React.lazy(()=>import("../pages/canvas"));
const routerReRender = [
  {
    path: "/",
    component: <MasterLayout2 />,
    routers: [
      {
        path: "/",
        component: <React.Suspense fallback={<>...</>}>
        <TestCanvas />
      </React.Suspense>,
      },
      {
        path: "users",
        component: (
          <React.Suspense fallback={<>...</>}>
            <TableUser />
          </React.Suspense>
        ),
      },
      {
        path:"*",
        component: <PageNotFound/>,
      }
    ],
  },

  {
    path: "/auth",
    component: <AuthLayout />,
    routers: [
      {
        path: "login",
        component: <Login />,
      },
      {
        path: "register",
        component: (
          <React.Suspense>
            <TableUser />
          </React.Suspense>
        ),
      },
    ],
  },

];

export default routerReRender;
