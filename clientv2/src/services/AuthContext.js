import React from "react";

//api
export const AuthContext = React.createContext(null);

const useAuth = () =>{
	return React.useContext(AuthContext);
}

export default useAuth;
