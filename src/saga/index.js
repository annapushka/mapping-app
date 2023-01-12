import {all} from "redux-saga/effects"
import {orderWatcher} from "./orderSaga";

export function* rootWatcher() {
    yield all([orderWatcher()])
}
