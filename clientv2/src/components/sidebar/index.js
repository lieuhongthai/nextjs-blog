import { Button, Layout, Menu, Popover, Row } from "antd";
import React from "react";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import routers from "../../routes";
import "./Sidebar.css";
const SidebarLayout = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      className="site-layout-background sidebar"
      width={200}
      collapsed={collapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        theme="dark"
      >
        {/* <Popover> */}
        {/* {console.log(12005,PathMatch)} */}
        <Menu.Item
          onClick={onCollapse}
          key={"a"}
          
          style={{ float: "right", backgroundColor: "#001529" }}
        >
          <Row
            style={{ backdropFilter: "#fffffff" }}
            align="center"
            justify="end"
          >
            {React.createElement(
              collapsed ? RightOutlined : LeftOutlined 
            ) }
          </Row>
        </Menu.Item>
        {/* </Popover> */}
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1" onTitleClick={collapsed && onCollapse}>
          {routers.map((router, index) => (
            <Menu.Item key={index + 1} icon={router.icon}>
              <Link to={router.path}>{router.title + index}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SidebarLayout;
