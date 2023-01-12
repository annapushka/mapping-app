import {
    FETCH_ORDERS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_SUCCESS
} from '../action-creators/order'

const initialState = {
    orders: [],
    loading: false,
    error: null
}

export const orderReduser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                loading: true, error: null, orders: []
            }
            case FETCH_ORDERS_SUCCESS:
                return {
                    loading: false, error: null, orders: action.payload
                }
                case FETCH_ORDERS_ERROR:
                    return {
                        loading: false, error: action.payload, orders: []
                    }
                    default:
                        return state
    }
}