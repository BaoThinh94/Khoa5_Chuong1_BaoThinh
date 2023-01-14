import { ServiceBase } from "./baseService";

export class QuanLyDatVe extends ServiceBase {

    layDanhSachPhongVe = (maVe) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maVe}`)
    }

    datVe = (veDat) => {
        return this.post(`/api/QuanLyDatVe/DatVe`,veDat)
    }

    taoLichChieu = (lich) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`,lich)
    }
}


export const quanLyDatVe = new QuanLyDatVe()