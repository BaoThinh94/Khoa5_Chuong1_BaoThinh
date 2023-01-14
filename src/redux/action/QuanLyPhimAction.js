

import { quanLyPhimService } from '../../service/QuanLyPhimService'
import { STATUS_CODE } from '../../util/settings/config'

import { ADD_CAROUSEL_TO_REDUCER, ADD_TO_LAYDANHSACHPHIM_REDUCER, ADD_TO_LAYTHONGTINPHIM_REDUCER } from '../types/QuanLyPhimType'
import { openNotificationWithIcon } from "../../util/settings/Notifycation/Notifycation"
import { closeLoading, openLoading } from "./LoadingAction"
import { type } from '@testing-library/user-event/dist/type'
import { history } from "../../util/history"


export const actionLayDanhSachPhim = (tenPhim) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimService.layDanhSachPhim(tenPhim)
            if (status == STATUS_CODE.SUCCESS) {
                const action = {
                    type: ADD_TO_LAYDANHSACHPHIM_REDUCER,
                    list: data.content
                }

                dispatch(action);
            }

        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }


    }
}




export const actionLayDanhSachBanner = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimService.layDanhSachBanner()
            if (status == STATUS_CODE.SUCCESS) {
                const action = {
                    type: ADD_CAROUSEL_TO_REDUCER,
                    img: data.content
                }

                dispatch(action);
            }

        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)

        }
    }
}


export const themPhimUploadHinhAction = (phim) => {
    return async (dispatch) => {

        dispatch(openLoading())

        try {
            const { data, status } = await quanLyPhimService.themPhimUploadHinh(phim)

            if (status == STATUS_CODE.SUCCESS) {
                openNotificationWithIcon('success', data.message)
                
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }

        dispatch(closeLoading())
    }
}


export const xoaPhim = (maPhim) => {
    return async (dispatch) => {

        dispatch(openLoading())

        try {
            const { data, status } = await quanLyPhimService.xoaPhim(maPhim)

            if (status == STATUS_CODE.SUCCESS) {
                openNotificationWithIcon('success', data.message)
                dispatch(actionLayDanhSachPhim())
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }

        dispatch(closeLoading())
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {

        try {
            const { data, status } = await quanLyPhimService.layThongTinPhim(maPhim)

            if (status == STATUS_CODE.SUCCESS) {
                dispatch({
                    type: ADD_TO_LAYTHONGTINPHIM_REDUCER,
                    phim:data.content
                })
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }

    }
}

export const capNhatPhimUpload = (phim) => {
    return async (dispatch) => {

        try {
            const { data, status } = await quanLyPhimService.capNhatPhimUpload(phim)
          ``
            if (status == STATUS_CODE.SUCCESS) {
                history.push('/admin')
                openNotificationWithIcon('success', data.message)
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }

    }
}