import { CHUYEN_TAB_CONFIRM, RESET_DAT_VE_REDUCER, SET_DANH_SACH_DAT_VE_TO_REDUCER, SET_GHE_DANG_DAT_TO_REDUCER, SET_KEY_TAB } from "../types/QuanLyDatVeType"


export const stateDefault = {
    danhSachPhongVe: {},
    danhSachGheDangChon: [],
    tongGiaVe: 0,
    key: '1',
    disableTab: true,


}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_DANH_SACH_DAT_VE_TO_REDUCER: {
            state.danhSachPhongVe = { ...action.phongVe }
            return { ...state }
        }

        case SET_GHE_DANG_DAT_TO_REDUCER: {
            let newArr = [...state.danhSachGheDangChon]
            let index = newArr?.findIndex(ghe => ghe.maGhe == action.gheChon.maGhe)
            if (index !== -1) {
                newArr.splice(index, 1)
                state.tongGiaVe -= action.gheChon.giaVe
            } else {
                newArr.push(action.gheChon)
                state.tongGiaVe += action.gheChon.giaVe
            }
            state.danhSachGheDangChon = newArr


            return { ...state }
        }

        case RESET_DAT_VE_REDUCER: {
            return { ...state, danhSachGheDangChon: [], tongGiaVe: 0, disableTab: true, key: '1' }
        }

        case CHUYEN_TAB_CONFIRM: {
            return { ...state, disableTab: false, key: '2' }
        }


        case SET_KEY_TAB: {
            if (action.keyTab == '3') {
                return { ...state }
            } else {
                return { ...state, key: action.keyTab }
            }
        }

        default: return { ...state }
    }
}