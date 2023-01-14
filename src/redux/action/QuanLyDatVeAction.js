import { quanLyDatVe } from "../../service/QuanLyDatVe"
import { quanLyRap } from "../../service/QuanLyRapService"
import { STATUS_CODE } from "../../util/settings/config"
import { openNotificationWithIcon } from "../../util/settings/Notifycation/Notifycation"
import { RESET_DAT_VE_REDUCER, SET_DANH_SACH_DAT_VE_TO_REDUCER } from "../types/QuanLyDatVeType"
import { closeLoading, openLoading } from "./LoadingAction"


export const layDanhSachPhongVeAction = (maVe) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyDatVe.layDanhSachPhongVe(maVe)
            if (status == STATUS_CODE.SUCCESS) {
                dispatch({
                    type: SET_DANH_SACH_DAT_VE_TO_REDUCER,
                    phongVe: data.content
                })
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }
    }
}

export const datVeAction = (veDat) => {
    return async (dispatch) => {
        dispatch(openLoading())

        try {
            const { data, status } = await quanLyDatVe.datVe(veDat)
            console.log(data)
            if (status == STATUS_CODE.SUCCESS) {
                openNotificationWithIcon('success', data.message)
                dispatch({
                    type: RESET_DAT_VE_REDUCER
                })
               await dispatch(layDanhSachPhongVeAction(veDat.maLichChieu))
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
        }

        dispatch(closeLoading())
    }
}


export const taoLichChieuAction = (lichChieu) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyDatVe.taoLichChieu(lichChieu)
            console.log(data)
            if (status == STATUS_CODE.SUCCESS) {
                openNotificationWithIcon('success', data.message)    
            }
        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)
            console.log(error)
        }

    }
}