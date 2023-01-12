const defaultState = {
    orders: []
}

export const SET_ORDERS = "SET_ORDERS"
export const FETCH_ORDERS = "FETCH_ORDERS"

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state, orders: action.payload
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