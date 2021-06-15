import fetch from "auth/FetchInterceptor"

const JsonplaceholderleService = {}

JsonplaceholderleService.getUsers = function () {
	return fetch({
		url: "/users",
		method: "get",
	})
}

export default JsonplaceholderleService
