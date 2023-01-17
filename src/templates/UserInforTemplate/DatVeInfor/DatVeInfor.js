import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thongTinTaiKhoanAction } from '../../../redux/action/QuanLyNguoiDungAction';
import moment from 'moment';
import { Button, Modal } from 'antd';

export default function DatVeInfor() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thongTinTaiKhoanAction())
  },[])

  const listDatVe = useSelector(state => state.QuanLyNguoiDungReducer.thongTinTaiKhoanReducer?.thongTinDatVe)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderLichSuDatVe = () => {
    return listDatVe?.map((item,index) => {
      return <div key={index} className='border-b border-black pb-4'>
      <h2 className='font-bold mb-2'>Mã đặt vé: {item.maVe} </h2>
      <div className='flex'>
        <div><img style={{width:150,height:200}} src={item.hinhAnh} alt={item.hinhAnh} /></div>
        <div className='ml-4'>
          <p><span className='font-bold text-xl'>{item.tenPhim}</span></p>
          <p> <span>ngày đặt vé:</span> {moment(item.ngayDat).format("DD/MM/YYYY")} <br/>
          {item.thoiLuongPhim} phút <br/>
          Rạp: {item.danhSachGhe[0].maHeThongRap} <br/>
          {item.danhSachGhe[0].tenHeThongRap} <br/>
          ({item.danhSachGhe.map((ghe,indexGhe) => {
          return indexGhe == (item.danhSachGhe.length -1) ? <span key={indexGhe} >{ghe.tenGhe}</span> : <span key={indexGhe} >{ghe.tenGhe}, </span>
          })}) <br/>
          <span className='font-bold'>{(item.giaVe * item.danhSachGhe.length).toLocaleString()} đ</span>
          </p>
        </div>
      </div>
    </div>
    })
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-8'>Lịch sử mua vé</h1>
      <div className='grid grid-cols-4 gap-4'>
        {renderLichSuDatVe()}
      </div>
      
    </div>
  )
}
