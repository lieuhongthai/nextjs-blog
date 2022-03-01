import TestCanvas from "../pages/canvas";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const routers = [
  {
    path: "/",
    icon: <AppstoreOutlined/>,
    title: "Canvas",
    exact: true,
    component: <TestCanvas />,
  },
  {
    path: "/bubblegum",
    title: "bubblegum",
    icon:<MenuUnfoldOutlined/>,
    component: <PublicPage />,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/shoelaces",
    title: "shoelaces",
    icon:<MenuFoldOutlined/>,
    component: <ProtectedPage />,
    main: () => <h2>Shoelaces</h2>,
  },
];
function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
export default routers;
