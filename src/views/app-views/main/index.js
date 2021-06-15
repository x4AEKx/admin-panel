import Loading from "components/shared-components/Loading"
import { Switch, Route, Redirect } from "react-router-dom"
import { lazy, memo, Suspense } from "react"

const Main = ({ match }) => (
	<Suspense fallback={<Loading cover="content" />}>
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/main`} />
			<Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
			<Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
		</Switch>
	</Suspense>
)

export default memo(Main)
