import { SET_USERS, TOGGLE_LOADING } from "redux/constants/Users"

const initState = {
	loading: false,
	data: [],
}

const users = (state = initState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				loading: false,
				data: action.payload,
			}
		case TOGGLE_LOADING: {
			return {
				...state,
				loading: action.loading,
			}
		}
		default:
			return state
	}
}

export default users
