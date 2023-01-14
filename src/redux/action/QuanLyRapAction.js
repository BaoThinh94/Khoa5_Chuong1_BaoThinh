import { quanLyRap } from "../../service/QuanLyRapService";
import { STATUS_CODE } from "../../util/settings/config";
import { openNotificationWithIcon } from "../../util/settings/Notifycation/Notifycation";
import { SET_LICH_CHIEU_HE_THONG_RAP_TO_REDUCER, SET_THONG_TIN_CUM_RAP_THEO_HE_THONG_REDUCER, SET_THONG_TIN_HE_THONG_RAP_REDUCER, SET_THONG_TIN_LICH_CHIEU_PHIM_REDUCER } from "../types/QuanLyRapType";



export const layThongTinLichChieuHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRap.layThongTinLichChieuHeThongRap()
            if (status == STATUS_CODE.SUCCESS) {
                const action = {
                    type: SET_LICH_CHIEU_HE_THONG_RAP_TO_REDUCER,
                    heThongRap: data.content
                }

                dispatch(action);
            }

        } catch (error) {
            openNotificationWithIcon('error', error.response.data.content)

        }

    }
}


export const layThongTinLichChieuPhimAction = (maPhim) => {
    return async (dispatch) => {
        try{
            const {data,status} = await quanLyRap.layThongTinLichChieuPhim(maPhim)
            if(status == STATUS_CODE.SUCCESS){
                dispatch({
                    type: SET_THONG_TIN_LICH_CHIEU_PHIM_REDUCER,
                    thongTin: data.content
                })
            }
        }catch (error){
            openNotificationWithIcon('error', error.response.data.content)
        }
    }
}


export const layThongTinHeThongRapAction = () => {
    return async (dispatch) => {
        try{
            const {data,status} = await quanLyRap.layThongTinHeThongRap()
            if(status == STATUS_CODE.SUCCESS){
                dispatch({
                    type: SET_THONG_TIN_HE_THONG_RAP_REDUCER,
                    heThongRap: data.content
                })
            }
        }catch (error){
            openNotificationWithIcon('error', error.response.data.content)
        }
    }
}

export const layThongTinCumRapTheoHeThongAction = (maRap) => {
    return async (dispatch) => {
        try{
            const {data,status} = await quanLyRap.layThongTinCumRapTheoHeThong(maRap)
            console.log(data)
            if(status == STATUS_CODE.SUCCESS){
                dispatch({
                    type: SET_THONG_TIN_CUM_RAP_THEO_HE_THONG_REDUCER,
                    cumRap: data.content
                })
            }
        }catch (error){
            openNotificationWithIcon('error', error.response.data.content)
        }
    }
}