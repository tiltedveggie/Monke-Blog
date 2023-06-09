import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	const login = async values => {
		const result = await axios.post(
			process.env.REACT_APP_API_URL + 'auth/login',
			values,
			{ withCredentials: true }
		);
		setCurrentUser(result.data);
	};

	const logout = async () => {
		await axios.post(
			process.env.REACT_APP_API_URL + 'auth/logout',
			{},
			{ withCredentials: true }
		);
		setCurrentUser(null);
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
