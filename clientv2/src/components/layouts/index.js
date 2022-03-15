import { Layout } from "antd";
import HeaderLayout from "../header";
import SidebarLayout from "../sidebar";
import { Routes, Route } from "react-router-dom";
import "./layout.css";
import routers from "../../routes";
import FooterLayout from "../footer";
import React from "react";

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
      {isLeft && <SidebarLayout onCollapsed={onCollapsed} collapsed={collapsed} />}
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
          <Routes>
            {routers.map((router, index) => (
              <Route
                path={router.path}
                element={router.component}
                key={index + 1}
              ></Route>
            ))}
          </Routes>
        </Content>
        <FooterLayout />
      </Layout>
      {!isLeft && <SidebarLayout onCollapsed={onCollapsed} collapsed={collapsed} />}
    </Layout>
    // </Router>
  );
};

export default MasterLayout;
