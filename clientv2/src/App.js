import "./App.css";
import React from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.min.css";
import jaJP from "antd/es/locale/ja_JP";
import MasterLayout from "./components/layouts";
import { BrowserRouter } from "react-router-dom";
function App() {
  ConfigProvider.config({
    theme:{
      light:"#25b864"
    }
  })
  return (
    <ConfigProvider locale={jaJP}>
      <BrowserRouter>
        <MasterLayout />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
