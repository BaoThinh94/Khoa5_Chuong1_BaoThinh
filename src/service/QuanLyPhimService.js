import { MANHOM } from "../util/settings/config";
import { ServiceBase } from "./baseService";


export class QuanLyPhimService extends ServiceBase {

    layDanhSachBanner = () => {
        return this.get('/api/QuanLyPhim/LayDanhSachBanner')
    }

    layDanhSachPhim = (tenPhim) => {
        if (tenPhim !== '') {
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}&tenPhim=${tenPhim}`)
        }
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`)
    }

    themPhimUploadHinh = (phim) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, phim)
    }

    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }

    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }

    capNhatPhimUpload = (phim) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, phim)
    }

}

export const quanLyPhimService = new QuanLyPhimService()