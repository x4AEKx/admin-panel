import { all, takeEvery, put, fork, call } from "redux-saga/effects"

import { setUsers, showLoading } from "../actions/Users"
import { FETCH_USERS } from "../constants/Users"

import JsonplaceholderleService from "../../services/Jsonplaceholder"

export function* getUsers() {
	yield takeEvery(FETCH_USERS, function* () {
		try {
			yield put(showLoading(true))
			const { data } = yield call(JsonplaceholderleService.getUsers)
			if (data) {
				yield put(setUsers(data))
			} else {
				yield put(showLoading(false))
			}
		} catch (error) {
			yield put(showLoading(false))
		}
	})
}

export default function* rootSaga() {
	yield all([fork(getUsers)])
}
