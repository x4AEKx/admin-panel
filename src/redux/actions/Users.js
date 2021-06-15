import { FETCH_USERS, SET_USERS, TOGGLE_LOADING } from "redux/constants/Users"

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		payload: users,
	}
}

export const fetchUsers = () => {
	return {
		type: FETCH_USERS,
	}
}

export const showLoading = (bool) => {
	return {
		type: TOGGLE_LOADING,
		loading: bool,
	}
}
