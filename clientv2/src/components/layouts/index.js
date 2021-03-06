import { Layout } from "antd";
import HeaderLayout from "../header";
import SidebarLayout from "../sidebar";
import { Routes, Route } from "react-router-dom";
import "./layout.css";
import routers from "../../routes";
import FooterLayout from "../footer";
import React from "react";
// import { renderRoutes } from "react-router-config";

const { Content } = Layout;
const MasterLayout = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const isLeft = true;
  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };
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
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routers.map((router, index) => (
                <Route
                  path={router.path}
                  element={router.component}
                  key={index + 1}
                />
              ))}
            </Routes>
          </React.Suspense>
        </Content>
        <FooterLayout />
      </Layout>
      {!isLeft && (
        <SidebarLayout onCollapsed={onCollapsed} collapsed={collapsed} />
      )}
    </Layout>
    // </Router>
  );
};

export default MasterLayout;
