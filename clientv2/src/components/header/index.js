import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./header.css";
const { Header } = Layout;
const HeaderLayout = ({onCollapsed,collapsed}) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        ,{
          className: "trigger",
          onClick: onCollapsed,
        }
      )}
    </Header>
  );
};
export default HeaderLayout;
