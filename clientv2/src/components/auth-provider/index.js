import React from "react";
import { AuthContext } from "../../services/AuthContext";
import { fakeAuthProvider } from "../../services/FakeAuthProvider";

function AuthProvider({children}){
	const [user, setUser] = React.useState(sessionStorage.getItem("user"));
  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      sessionStorage.setItem("user", newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;