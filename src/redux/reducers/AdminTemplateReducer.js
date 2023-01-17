import { SET_DEFAULT_KEY } from "../types/AdminTemplateType"


export const stateDefault = {
    defaultkey:'1'
}

export const AdminTemplateReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DEFAULT_KEY: {
            return { ...state, defaultkey: action.key }
        }

      
       
        default: return { ...state }
    }


        
}