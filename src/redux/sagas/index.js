import { all } from "redux-saga/effects"
import Users from "./Users"

export default function* rootSaga(getState) {
	yield all([Users()])
}
