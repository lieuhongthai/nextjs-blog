import { Layout, Menu, Image, Row, Typography } from "antd";
import React, { useEffect, useLayoutEffect } from "react";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import routers from "../../routes";
import "./Sidebar.css";
const SidebarLayout = ({ collapsed,onCollapsed }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [theme, setTheme] = React.useState("light");
  const location = useLocation();
  return (
    <Sider className="sidebar" width={200} collapsed={collapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }} // background: "#3F63FF"
        theme={theme}
        forceSubMenuRender={false}
      >
        <Menu.Item
          key={0}
          className="logo-menu collapse-false"
          style={{ backgroundColor: theme === "dark" ? "#001529" : "#FFFFFF" }}
        >
          <div className="logo" hidden={collapsed}>
            <Link to={"/"}>
              {/* <Image
                src={window.location.origin + "/megaton.jpg"}
                style={{ height: 53 }}
                alt="megaton"
                preview={false}
              /> */}
              <Typography style={{fontFamily:"file0", fontSize:42, lineHeight:53, fontWeight:400, color:"#151515"}}>
                MEGATON TEAMS
              </Typography>

            </Link>
          </div>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1"
        onTitleClick={collapsed ? onCollapsed : ()=>{}}
        >
          {routers.map((router, index) => (
            <Menu.Item key={router.path} icon={router.icon}>
              <Link to={router.path}>{router.title + index}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SidebarLayout;
