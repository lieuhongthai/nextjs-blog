import "./App.css";
import React from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.min.css";
import jaJP from "antd/es/locale/ja_JP";
// import MasterLayout from "./components/layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerReRender from "./routes/routerReRender";
import Login from "./pages/login";
import MasterLayout2 from "./components/layouts/master-template-2";
import AuthLayout, { HomeLayout } from "./components/AuthLayout";
function App() {
  ConfigProvider.config({
    theme: {
      light: "#25b864",
    },
  });
  return (
    <ConfigProvider locale={jaJP}>
      <BrowserRouter>
        {/* <MasterLayout /> */}
        <Routes>
          {/* {routerReRender.map(router=>(
          
            <Route key={router.path} path={router.path} element={router.component}>
              {router?.routes.map(item=>(
                <Route key={item.path}  path={item.path} element={item.component} />
              ))}
            </Route>
        ))} */}

        {/* <Route path="/login" element={<AuthLayout />} />
        <Route path="/" element={<MasterLayout2 />} >
          <Route path="/" element={<HomeLayout />} />
        </Route> */}
        
        {routerReRender.map((router, index)=>(
          <Route key={index} path={router.path} element={router.component}>
            {router.routers && router.routers.map((item, zIndex)=>(
              <Route key={zIndex+index} path={item.path} element={item.component} />
            ))}
          </Route>

        ))}


        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
