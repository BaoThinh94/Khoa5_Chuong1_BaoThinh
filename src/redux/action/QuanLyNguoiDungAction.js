import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService"
import { history } from "../../util/history"
import { STATUS_CODE, TOKEN, USER_LOG } from "../../util/settings/config"
import { openNotificationWithIcon } from "../../util/settings/Notifycation/Notifycation"
import { CLOSED_LOADING, OPEN_LOADING } from "../types/LoadingType"

import { SET_DANH_SACH_LOAI_NGUOI_DUNG_TO_REDUCER, SET_LIST_USER_TO_LAY_DANH_SACH_NGUOI_DUNG_REDUCER, SET_THONG_TIN_NGUOI_DUNG_TO_REDUCER, SET_USER_LOG_IN_REDUCER } from "../types/QuanLyNguoiDungType"
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

export const layDanhSachNguoiDungAction = (user) => {
    return async (dispatch) => {

        dispatch(openLoading())
        try {
            const {data, status} = await quanLyNguoiDungService.layDanhSachNguoiDung(user)
            if(status == STATUS_CODE.SUCCESS){
                dispatch({
                    type:SET_LIST_USER_TO_LAY_DANH_SACH_NGUOI_DUNG_REDUCER,
                    listUser: data.content
                })
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

        dispatch(closeLoading())
    }
}

export const layDanhSachLoaiNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung()
            if(status == STATUS_CODE.SUCCESS){
                dispatch({
                    type:SET_DANH_SACH_LOAI_NGUOI_DUNG_TO_REDUCER,
                    listType: data.content
                })
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

    }
}

export const capNhatThongTinNguoiDungAction = (user) => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.capNhatThongTinNguoiDung(user)
            if(status == STATUS_CODE.SUCCESS){
                openNotificationWithIcon('success',data.message)
                localStorage.removeItem("edituser")
                history.push('/admin/usermanager')
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

    }
}

export const xoaNguoiDungAction = (user) => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.xoaNguoiDung(user)
            if(status == STATUS_CODE.SUCCESS){
                openNotificationWithIcon('success',data.message)
                dispatch(layDanhSachNguoiDungAction(''))
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

    }
}

export const themNguoiDungAction = (user) => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.themNguoiDung(user)
            if(status == STATUS_CODE.SUCCESS){
                openNotificationWithIcon('success',data.message)
                history.push('/admin/usermanager')
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)         
        }

    }
}

export const capNhatThongTinNguoiDungProfileAction = (user) => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.capNhatThongTinNguoiDungProfile(user)
            if(status == STATUS_CODE.SUCCESS){
                openNotificationWithIcon('success',data.message)
                localStorage.clear()
                history.push('/login')
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

    }
}

export const thongTinTaiKhoanAction = () => {
    return async (dispatch) => {
        try {
            const {data, status} = await quanLyNguoiDungService.thongTinTaiKhoan()
            if(status == STATUS_CODE.SUCCESS){
                dispatch({type:SET_THONG_TIN_NGUOI_DUNG_TO_REDUCER,
                inforUser: data.content
                })
            }
        } catch (error) {
            openNotificationWithIcon('error',error.response.data.content)
            
        }

    }
}