import TestCanvas from "../pages/canvas";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import UserTable from "../pages/table-user";
import TableEnterLeave from "../pages/table-test";
const routers = [
  {
    path: "/",
    icon: <AppstoreOutlined/>,
    title: "Canvas",
    exact: true,
    component: <TestCanvas />,
  },
  {
    path: "/users",
    title: "Users",
    icon:<UserAddOutlined/>,
    component: <UserTable/>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    title: "shoelaces",
    icon:<MenuFoldOutlined/>,
    component: <TableEnterLeave/>,
    main: () => <h2>Shoelaces</h2>,
  },
];

export default routers;
