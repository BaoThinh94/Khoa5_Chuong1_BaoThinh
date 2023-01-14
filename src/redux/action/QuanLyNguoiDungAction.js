import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService"
import { history } from "../../util/history"
import { STATUS_CODE, TOKEN, USER_LOG } from "../../util/settings/config"
import { openNotificationWithIcon } from "../../util/settings/Notifycation/Notifycation"
import { CLOSED_LOADING, OPEN_LOADING } from "../types/LoadingType"

import { SET_USER_LOG_IN_REDUCER } from "../types/QuanLyNguoiDungAction"
import { closeLoading, openLoading } from "./LoadingAction"


export const dangNhap = (userDangNhap) => {
    return async (dispatch) => {

        dispatch(openLoading())
        try {
            const {data, status} = await quanLyNguoiDungService.dangNhap(userDangNhap)
           
            if(status == STATUS_CODE.SUCCESS){
                
                localStorage.setItem(USER_LOG,JSON.stringify(data.content))
                localStorage.setItem(TOKEN,data.content.accessToken)
                dispatch({
                    type: SET_USER_LOG_IN_REDUCER,
                    dangNhap: data.content
                })
                
                if(data.content.maLoaiNguoiDung == "QuanTri"){
                    history.push('/admin')
                }else {
                    history.push('/home')
                }
                
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

        dispatch(closeLoading())
    }
}

export const dangKy = (userDangKy) => {
    return async (dispatch) => {

        dispatch(openLoading())
        try {
            const {data, status} = await quanLyNguoiDungService.dangKy(userDangKy)
            if(status == STATUS_CODE.SUCCESS){
                
                openNotificationWithIcon('success',data.message)
                
                history.push('/login')
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
            
        }

        dispatch(closeLoading())
    }
}