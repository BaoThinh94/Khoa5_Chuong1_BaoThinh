import { SET_LICH_CHIEU_HE_THONG_RAP_TO_REDUCER, SET_THONG_TIN_CUM_RAP_THEO_HE_THONG_REDUCER, SET_THONG_TIN_HE_THONG_RAP_REDUCER, SET_THONG_TIN_LICH_CHIEU_PHIM_REDUCER } from "../types/QuanLyRapType"


export const stateDefault = {
    layThongTinLichChieuHeThongRap: [

    ],

    layThongTinLichChieuPhim:[

    ],

    layThongTinHeThongRapReducer:[

    ],

    layThongTinCumRapTheoHeThongReducer:[

    ]

}

export const QuanLyRapReducer = (state = stateDefault, action) => {

    switch (action.type) {
          case SET_LICH_CHIEU_HE_THONG_RAP_TO_REDUCER: {
            return { ...state, layThongTinLichChieuHeThongRap: action.heThongRap }
        }
        case SET_THONG_TIN_LICH_CHIEU_PHIM_REDUCER: {
            return { ...state, layThongTinLichChieuPhim: action.thongTin }
        }

        case SET_THONG_TIN_HE_THONG_RAP_REDUCER: {
            return { ...state, layThongTinHeThongRapReducer: action.heThongRap }
        }

        case SET_THONG_TIN_CUM_RAP_THEO_HE_THONG_REDUCER: {
            return { ...state, layThongTinCumRapTheoHeThongReducer: action.cumRap }
        }
       
        default: return { ...state }
    }


        
}