import Loading from "components/shared-components/Loading"
import { Switch, Route, Redirect } from "react-router-dom"
import { APP_PREFIX_PATH } from "configs/AppConfig"
import { lazy, Suspense, memo } from "react"

const AppViews = () => {
	return (
		<Suspense fallback={<Loading cover="content" />}>
			<Switch>
				<Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
				<Route path={`${APP_PREFIX_PATH}/main`} component={lazy(() => import(`./main`))} />
				<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
			</Switch>
		</Suspense>
	)
}

export default memo(AppViews)
