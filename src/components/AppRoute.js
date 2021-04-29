import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { publicRoutes } from '../routes'
import { MAIN_ROUTE } from '../utils/constants'

const AppRoute = () => {
	// const isAuth = false
	return (
		<Switch>
			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} component={Component} exact />
			)}
			<Redirect to={MAIN_ROUTE} />
		</Switch>
	)
}

export default AppRoute
