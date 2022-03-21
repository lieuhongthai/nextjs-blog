import "./App.css";
import React from "react";
import { ConfigProvider } from "antd";
import "antd/dist/antd.min.css";
import jaJP from "antd/es/locale/ja_JP";
// import MasterLayout from "./components/layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routerReRender from "./routes/routerReRender";
import { AuthContext } from "./services/AuthContext";
import { fakeAuthProvider } from "./services/FakeAuthProvider";
function App() {
  let [user, setUser] = React.useState(null);
  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  ConfigProvider.config({
    theme: {
      light: "#25b864",
    },
  });
  return (
    <ConfigProvider locale={jaJP}>
      <BrowserRouter>
        <AuthContext.Provider value={value}>
          <Routes>
            {routerReRender.map((router, index) => (
              <Route key={index} path={router.path} element={router.component}>
                {router.routers &&
                  router.routers.map((item, zIndex) => {
                    return (
                      <Route
                        key={item.path}
                        path={item.path}
                        element={item.component}
                      />
                    );
                  })}
              </Route>
            ))}
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
