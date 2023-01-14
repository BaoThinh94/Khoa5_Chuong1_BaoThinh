import { USER_LOG } from "../../util/settings/config"
import { SET_USER_LOG_IN_REDUCER } from "../types/QuanLyNguoiDungAction"

let user
if(localStorage.getItem(USER_LOG)){
    user = JSON.parse(localStorage.getItem(USER_LOG))
}

export const stateDefault = {
    userLog: user,

}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_USER_LOG_IN_REDUCER: {
            return { ...state, userLog: action.dangNhap }
        }

       
        default: return { ...state }
    }


        
}