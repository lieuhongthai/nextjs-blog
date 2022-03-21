import { Layout } from "antd";
import HeaderLayout from "../header";
import SidebarLayout from "../sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./layout.css";
import FooterLayout from "../footer";
import React from "react";
import useAuth from "../../services/AuthContext";
// import { renderRoutes } from "react-router-config";

const { Content } = Layout;
const MasterLayout2 = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const auth = useAuth();
  const location = useLocation();
  const isLeft = true;
  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };
  if(!auth.user){
    return <Navigate to={"/auth/login"} state={{from:location}} replace />
  }
  return (
    <Layout>
      {/* sidebar */}
      {isLeft && (
        <SidebarLayout onCollapsed={onCollapsed} collapsed={collapsed} />
      )}
      <Layout className="site-layout">
        {/* Header */}
        <HeaderLayout onCollapsed={onCollapsed} collapsed={collapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
    // </Router>
  );
};

export default MasterLayout2;
