import React from "react";
import AuthLayout, { HomeLayout } from "../components/AuthLayout";
import MasterLayout2 from "../components/layouts/master-template-2";
import TestCanvas from "../pages/canvas";
import Login from "../pages/login";
import PageNotFound from "../pages/page-not-found";
import TableUser from "../pages/users/table-user";
const Login2 = React.lazy(() => import("../pages/login"));
const Canvas = React.lazy(() => import("../pages/canvas"));
const AuthLayout2 = React.lazy(() => import("../components/AuthLayout"));
const routerReRender = [
  {
    path: "/",
    component: <MasterLayout2 />,
    routers: [
      {
        path: "/",
        component: <TestCanvas />,
      },
      {
        path: "/user",
        component: <TableUser />,
      },
    ],
  },

  {
    path: "/auth/",
    component: <AuthLayout />,
    routes: [
      {
        path: "/login",
        component: <Login />,
      },
      {
        index: true,
        path: "/register",
        exact: false,
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
