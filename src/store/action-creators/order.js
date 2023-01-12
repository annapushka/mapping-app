const data = [{
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

export const FETCH_ORDERS = 'FETCH_USERS';
export const FETCH_ORDERS_ERROR = 'FETCH_USERS_ERROR';
export const FETCH_ORDERS_SUCCESS = 'FETCH_USERS_SUCCES';

export const fetchOrders = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: FETCH_ORDERS
            });
            const response = await [...data]; //stub for future database queries
            dispatch({
                type: FETCH_ORDERS_SUCCESS,
                payload: response
            })

        } catch (e) {
            dispatch({
                type: FETCH_ORDERS_ERROR,
                payload: 'Error'
            })
        }
    }
}