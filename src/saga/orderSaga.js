import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_ORDERS, setOrders} from "../store/redusers/orderReduser";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// const fetchOrdersFromApi = () => fetch('https://...')

function* fetchOrderWorker() {
    // const data = yield call(fetchOrdersFromApi)
    // const json = yield call(() => new Promise(res => res(data.json())))
    const json = [{
        key: "1",
        orderNumber: "№1",
        latFrom: "59.84660399",
        lngFrom: "30.29496392",
        latTo: "59.82934196",
        lngTo: "30.42423701",
    },
    {
        key: "2",
        orderNumber: "№2",
        latFrom: "59.82934196",
        lngFrom: "30.42423701",
        latTo: "59.82761295",
        lngTo: "30.41705607",
    },
    {
        key: "3",
        orderNumber: "№3",
        latFrom: "59.83567701",
        lngFrom: "30.38064206",
        latTo: "59.82761295",
        lngTo: "30.41705607",
    },
    {
        key: "4",
        orderNumber: "№4",
        latFrom: "59.84660399",
        lngFrom: "30.29496392",
        latTo: "59.84660399",
        lngTo: "30.29496392",
    },
    {
        key: "5",
        orderNumber: "№5",
        latFrom: "59.83567701",
        lngFrom: "30.38064206",
        latTo: "59.84660399",
        lngTo: "30.29496392",
    },
];
    yield delay(1000)
    yield put(setOrders(json))
}

export function* orderWatcher() {
    yield takeEvery(FETCH_ORDERS, fetchOrderWorker)
}
