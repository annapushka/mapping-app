const defaultState = {
    orders: [],
    showOrder: {
        key: "",
        orderNumber: "",
        latFrom: "59.93428",
        lngFrom: "30.3351",
        latTo: "59.93428",
        lngTo: "30.3351"
    }
}

export const SET_ORDERS = "SET_ORDERS";
export const FETCH_ORDERS = "FETCH_ORDERS";
export const SHOW_ORDER = "SHOW_ORDER";

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state, orders: action.payload
            };
        case SHOW_ORDER:
            return {
                ...state, showOrder: action.payload
            };
        default:
            return state;
    }
}

export const setOrders = payload => ({
    type: SET_ORDERS,
    payload
})
export const fetchOrders = () => ({
    type: FETCH_ORDERS
})

export const showOrder = payload => ({
    type: SHOW_ORDER,
    payload
})
