import { Layout, Menu, Typography } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import routers from "../../routes";
import "./Sidebar.css";
const SidebarLayout = ({ collapsed,onCollapsed }) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  // const [theme, setTheme] = React.useState("light");
  const theme="light";

  const location = useLocation();
  const getRouters = routers
  return (
    <Sider className="sidebar" width={200} collapsed={collapsed}>
      <Menu
        id="menu-slide-bar-custom"
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
              <Typography style={{fontFamily:"Megaton", fontSize:25,  fontWeight:400, color:theme==="light"?"#151515":"#FFFFFF"}}>
                {/* lineHeight:30, */}
                MEGATON TEAMS
              </Typography>

            </Link>
          </div>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1"
        onTitleClick={collapsed ? onCollapsed : undefined}
        >
          {getRouters.map((router) => (
            <Menu.Item key={router.path} icon={router.icon}>
              {console.log(12005,router)}
              <Link to={router.path}>{router.title}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SidebarLayout;
