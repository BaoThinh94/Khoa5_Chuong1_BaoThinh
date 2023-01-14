import { CLOSE_MODAL_CONFIRM, DAT_VE_CONFIRM, OPEN_MODAL_CONFIRM } from "../types/ModalConfirmType"


export const stateDefault = {
    button:'',
    open:false



}

export const ModalConfirmReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case OPEN_MODAL_CONFIRM: {
            return { ...state,open:true }
        }
        case CLOSE_MODAL_CONFIRM: {
            return { ...state,open:false, button:'' }
        }
        case DAT_VE_CONFIRM: {
            console.log(action.button)
            return { ...state,open:true, button:action.button }
        }
        default: return { ...state }
    }
}