import { MANHOM } from "../util/settings/config"
import { ServiceBase } from "./baseService"

export class QuanLyNguoiDungService extends ServiceBase{

    dangNhap = (userDangNhap) => {
        return this.post('/api/QuanLyNguoiDung/DangNhap', userDangNhap)
    }

    dangKy = (userDangKy) => {
        return this.post('/api/QuanLyNguoiDung/DangKy', userDangKy)
    }

    layDanhSachNguoiDung = (user) => {
        if (user == ''){
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MANHOM}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MANHOM}&tuKhoa=${user}`)
    }

    layDanhSachLoaiNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }

    capNhatThongTinNguoiDung = (user) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user)
    }

    xoaNguoiDung = (user) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
    }

    themNguoiDung = (user) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,user)
    }

    capNhatThongTinNguoiDungProfile = (user) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user)
    }

    thongTinTaiKhoan = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
}


export const quanLyNguoiDungService = new QuanLyNguoiDungService()