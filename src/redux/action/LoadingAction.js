import { CLOSED_LOADING, OPEN_LOADING } from "../types/LoadingType"

export const openLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: OPEN_LOADING
        })
    }
}

export const closeLoading = () => {
    return async (dispatch) => {
        dispatch({
            type: CLOSED_LOADING
        })
    }
}