import Loading from "components/shared-components/Loading"
import { Switch, Route, Redirect } from "react-router-dom"
import { lazy, Suspense, memo } from "react"

const Clients = ({ match }) => (
	<Suspense fallback={<Loading cover="content" />}>
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/clients`} />
			<Route path={`${match.url}/edit-profile`} component={lazy(() => import(`./edit-profile`))} />
			<Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
		</Switch>
	</Suspense>
)

export default memo(Clients)
