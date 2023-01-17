import { USER_LOG } from "../../util/settings/config"
import { SET_DANH_SACH_LOAI_NGUOI_DUNG_TO_REDUCER, SET_EDIT_USER_TO_REDUCER, SET_LIST_USER_TO_LAY_DANH_SACH_NGUOI_DUNG_REDUCER, SET_THONG_TIN_NGUOI_DUNG_TO_REDUCER, SET_USER_LOG_IN_REDUCER } from "../types/QuanLyNguoiDungType"


let user
if(localStorage.getItem(USER_LOG)){
    user = JSON.parse(localStorage.getItem(USER_LOG))
}

export const stateDefault = {
    userLog: user,
    layDanhSachNguoiDungReducer:[],
    editUser:{},
    layDanhSachLoaiNguoiDungReducer:[],
    thongTinTaiKhoanReducer:{}

}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_USER_LOG_IN_REDUCER: {
            return { ...state, userLog: action.dangNhap }
        }

        case SET_LIST_USER_TO_LAY_DANH_SACH_NGUOI_DUNG_REDUCER: {
            return { ...state, layDanhSachNguoiDungReducer: action.listUser }
        }

        case SET_EDIT_USER_TO_REDUCER: {
            return { ...state, editUser: action.editUser }
        }

        case SET_DANH_SACH_LOAI_NGUOI_DUNG_TO_REDUCER: {
            return { ...state, layDanhSachLoaiNguoiDungReducer: action.listType }
        }

        case SET_THONG_TIN_NGUOI_DUNG_TO_REDUCER: {
            return { ...state, thongTinTaiKhoanReducer: action.inforUser }
        }

       
        default: return { ...state }
    }


        
}