import TestCanvas from "../pages/canvas";
import {
  AppstoreOutlined,
  // MenuFoldOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// import TableEnterLeave from "../pages/table-test";
// import TableUser from "../pages/users/table-user";
import React from "react";
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
  // {
  //   path: "/shoelaces",
  //   title: "shoelaces",
  //   icon:<MenuFoldOutlined/>,
  //   component: <TableEnterLeave/>,
  //   main: () => <h2>Shoelaces</h2>,
  // },
];

export default routers;
