import { useEffect } from "react";
import { useActions } from "common/hooks";
import { SignUp } from "features/auth/SignUp";
import { authThunks } from "features/auth/auth.slice";
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { SignIn } from "features/auth/signin/SignIn";
import { Test } from "features/Test";

function App() {

	const { initializeApp } = useActions(authThunks)

	useEffect(() => { initializeApp({}) }, [])

	const menu = [
		{ id: 1, title: 'Home', to: '/' },
		{ id: 2, title: 'Sign Up', to: '/signup' },
		{ id: 3, title: 'Sign In', to: '/signin' }
	]

	const linkActive = (isActive: boolean) => {
		return { color: isActive ? 'red' : 'black' }
	}

	return (
		<div className="App">

			{menu.map((m) => {
				return (
					<NavLink
						key={m.id}
						to={m.to}
						style={(params) => linkActive(params.isActive)}>
						{m.title}
					</NavLink>
				)
			})}

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
