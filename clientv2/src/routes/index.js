import TestCanvas from "../pages/canvas";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React from "react";
import PageNotFound from "../pages/page-not-found";
import Login from "../pages/login";
const Canvas = React.lazy(() => import('../pages/canvas'));
const TableUser = React.lazy(() => import('../pages/users/table-user'));
const routers = [
  {
    path: "/",
    icon: <AppstoreOutlined/>,
    title: "Canvas",
    exact: true,
    component: <Canvas/>,
  },
  {
    path: "/users",
    title: "Users",
    icon:<UserAddOutlined/>,
    component: <TableUser/>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/auth/login",
    title: "Login",
    icon:<MenuFoldOutlined/>,
    component: <Login/>,
    main: () => <h2>Bubblegum</h2>,
  },

  {
    path: "*",
    icon:"",
    exact: false,
    component: <PageNotFound/>
  }
  // {
  //   path: "/shoelaces",
  //   title: "shoelaces",
  //   icon:<MenuFoldOutlined/>,
  //   component: <TableEnterLeave/>,
  //   main: () => <h2>Shoelaces</h2>,
  // },
];

export default routers;
