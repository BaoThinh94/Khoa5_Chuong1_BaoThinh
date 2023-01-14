import { MANHOM } from "../util/settings/config";
import { ServiceBase } from "./baseService";

export class QuanLyRap extends ServiceBase{

    layThongTinLichChieuHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}`)
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }

    layThongTinHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
    }

    layThongTinCumRapTheoHeThong = (tenRap) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${tenRap}`)
    }


}

export const quanLyRap = new QuanLyRap()
