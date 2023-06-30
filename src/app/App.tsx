import { useEffect } from "react";
import { useActions } from "common/hooks";
import { SignUp } from "features/auth/SignUp";
import { authThunks } from "features/auth/auth.slice";
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from "features/auth/signin/SignIn";
import { Test } from "features/Test";

function App() {

	const { initializeApp } = useActions(authThunks)

	useEffect(() => { initializeApp({}) }, [])

	return (
		<div className="App">
			<Routes>
				<Route path={'/'} element={<Test />} />
				<Route path={'/signup'} element={<SignUp />} />
				<Route path={'/signin'} element={<SignIn />} />
				<Route path={'/404'} element={<h1>404: Page not found.</h1>} />
				<Route path='*' element={<Navigate to={'/404'} />} />
			</Routes>
		</div>
	);
}

export default App;
