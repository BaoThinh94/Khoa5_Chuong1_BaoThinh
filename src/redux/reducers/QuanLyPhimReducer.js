
import { ADD_CAROUSEL_TO_REDUCER, ADD_TO_LAYDANHSACHPHIM_REDUCER, ADD_TO_LAYTHONGTINPHIM_REDUCER, GET_PHIM_DANGCHIEU, GET_PHIM_SAPCHIEU } from "../types/QuanLyPhimType"



export const stateDefault = {
    layDanhSachBanner: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        },
    ],

    layDanhSachPhim: [
        {
            "maPhim": 10839,
            "tenPhim": "Venom 2: ĐỐI MẶT TỬ THÙ ",
            "biDanh": "venom-2-doi-mat-tu-thu",
            "trailer": "https://www.youtube.com/watch?v=-FmWuCgJmxo",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/venom-2-let-there-be-carnage_gp01.jpeg",
            "moTa": "Venom: Đối mặt tử thù (tựa gốc tiếng Anh: Venom: Let There Be Carnage) là một bộ phim siêu anh hùng ra mắt năm 2021 của Mỹ, dựa trên nhân vật Venom, 18 tháng sau các sự kiện trong Venom (2018), phóng viên Eddie Brock cố gắng làm quen với việc sống như 1 vật chủ của sinh vật ngoài hành tinh Venom, kẻ ban cho anh siêu năng lực nhưng cũng khiến anh phải cảnh giác. Brock cố gắng xây dựng lại sự nghiệp của mình bằng cách phỏng vấn tên sát nhân Cletus Kasady, kẻ trở thành vật chủ của sinh vật Carnage và bỏ trốn khỏi nhà tù sau khi may mắn thoát khỏi hành quyết.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-11-30T01:14:34.457",
            "danhGia": 9,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },
    ],
    layDanhSachPhimDefault: [],

    layThongTinPhim:{},


}

export const QuanLyPhimReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case ADD_CAROUSEL_TO_REDUCER: {
            return { ...state, layDanhSachBanner: action.img }
        }

        case ADD_TO_LAYDANHSACHPHIM_REDUCER: {
            return { ...state, layDanhSachPhim: action.list, layDanhSachPhimDefault: action.list}
        }

        case GET_PHIM_DANGCHIEU: {

            state.layDanhSachPhim = state.layDanhSachPhimDefault.filter(phim => Boolean(phim.dangChieu))
            
            return { ...state}
        }

        case GET_PHIM_SAPCHIEU: {

            state.layDanhSachPhim = state.layDanhSachPhimDefault.filter(phim => Boolean(phim.sapChieu))
            console.log(state.layDanhSachPhim)
            return { ...state}
        }

        case ADD_TO_LAYTHONGTINPHIM_REDUCER: {

            
            return { ...state,layThongTinPhim:action.phim}
        }
        default: return { ...state }
    }


        
}