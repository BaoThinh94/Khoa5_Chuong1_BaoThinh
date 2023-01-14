import { ADD_TO_HOMEMODALREDUCER_TRALER, CLOSE_HOMEMODAL } from "../types/HomeModalType"


export const stateDefault = {
    modalOpen: false,
    trailer: '',
    tenPhim: ''

}

export const HomeModalReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case ADD_TO_HOMEMODALREDUCER_TRALER: {
            console.log(action.tenPhim)

            return { ...state, modalOpen: true, trailer: action.trailer, tenPhim: action.tenPhim }
        }

        case CLOSE_HOMEMODAL: {
            return { ...state, modalOpen: false }
        }

        default: return { ...state }
    }
}