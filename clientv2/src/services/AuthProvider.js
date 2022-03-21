import React, { Children } from 'react';
import { AuthContext } from './AuthContext';
import {fakeAuthProvider} from "./FakeAuthProvider";
const AuthProvider = () => {
	const [user, setUser] = React.useState(null);
	const signin = (username, callback)=>{
		return fakeAuthProvider.signin(()=>{
			setUser(username);
			callback();
		})
	}

	const signout = (callback) =>{
		return fakeAuthProvider.signout(()=>{
			setUser(null);
			callback();
		})
	}
	return (
		<div>
			
		</div>
	);

	let value = {user, signin, signout};

	return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>

};

export default AuthProvider;