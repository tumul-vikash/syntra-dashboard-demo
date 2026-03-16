import types from "../types";

const initialState = {
    FinanceData: {}
}

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_FINANCE_DATA:
            return {
                ...state,
                FinanceData: action.payload
            }
        default:
            return state;
    }
}

export default HomeReducer;