import axios from "axios"

const JsonplaceholderleService = {}

JsonplaceholderleService.getUsers = function () {
	return axios.get("https://jsonplaceholder.typicode.com/users")
}

export default JsonplaceholderleService
