import { CLOSED_LOADING, OPEN_LOADING } from "../types/LoadingType"


export const stateDefault = {
    loadOpen: false,
    

}

export const LoadingReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case OPEN_LOADING: {
           
            return { ...state, loadOpen:true}
        }

        case CLOSED_LOADING: {
           
            return { ...state, loadOpen:false}
        }
       

        default: return { ...state }
    }
}