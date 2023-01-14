import { ServiceBase } from "./baseService"

export class QuanLyNguoiDungService extends ServiceBase{

    dangNhap = (userDangNhap) => {
        return this.post('/api/QuanLyNguoiDung/DangNhap', userDangNhap)
    }

    dangKy = (userDangKy) => {
        return this.post('/api/QuanLyNguoiDung/DangKy', userDangKy)
    }
}


export const quanLyNguoiDungService = new QuanLyNguoiDungService()