import { Layout, Breadcrumb, Menu } from "antd";
import HeaderLayout from "../header";
import SidebarLayout from "../sidebar";
import { Routes, Route } from "react-router-dom";
import TestCanvas from "../../pages/canvas";
import routers from "../../routes";
import FooterLayout from "../footer";

const { Content } = Layout;
const { Sider } = Layout;
const { SubMenu } = Menu;
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
const MasterLayout = () => {
  return (
    // <Router>
    <Layout>
      {/* Header */}
      <HeaderLayout />
      <Layout>
        {/* sidebar */}
        <SidebarLayout />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
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
        </Layout>
      </Layout>
	  <FooterLayout/>

    </Layout>
    // </Router>
  );
  //   return (
  //     <Layout>
  //       <Header className="header">
  //         <div className="logo" />
  //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
  //           <Menu.Item key="1">nav 1</Menu.Item>
  //           <Menu.Item key="2">nav 2</Menu.Item>
  //           <Menu.Item key="3">nav 3</Menu.Item>
  //         </Menu>
  //       </Header>
  //       <Layout>
  //         <Sider width={200} className="site-layout-background">
  //           <Menu
  //             mode="inline"
  //             defaultSelectedKeys={["1"]}
  //             defaultOpenKeys={["sub1"]}
  //             style={{ height: "100%", borderRight: 0 }}
  //           >
  //             <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
  //               <Menu.Item key="1">option1</Menu.Item>
  //               <Menu.Item key="2">option2</Menu.Item>
  //               <Menu.Item key="3">option3</Menu.Item>
  //               <Menu.Item key="4">option4</Menu.Item>
  //             </SubMenu>
  //           </Menu>
  //         </Sider>
  //         <Layout style={{ padding: "0 24px 24px" }}>
  //           <Breadcrumb style={{ margin: "16px 0" }}>
  //             <Breadcrumb.Item>Home</Breadcrumb.Item>
  //             <Breadcrumb.Item>List</Breadcrumb.Item>
  //             <Breadcrumb.Item>App</Breadcrumb.Item>
  //           </Breadcrumb>
  //           <Content
  //             className="site-layout-background"
  //             style={{
  //               padding: 24,
  //               margin: 0,
  //               minHeight: 280,
  //             }}
  //           >
  //             Content
  //           </Content>
  //         </Layout>
  //       </Layout>
  //     </Layout>
  //   );
};

export default MasterLayout;
