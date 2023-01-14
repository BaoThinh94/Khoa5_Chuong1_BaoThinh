import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { datVeAction, layDanhSachPhongVeAction } from '../../redux/action/QuanLyDatVeAction';
import { CHUYEN_TAB_CONFIRM, SET_GHE_DANG_DAT_TO_REDUCER, SET_KEY_TAB } from '../../redux/types/QuanLyDatVeType';
import { USER_LOG } from '../../util/settings/config'
import './Checkout.css'
import _ from 'lodash'
import { Tabs } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { history } from '../../util/history';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { CLOSE_MODAL_CONFIRM, DAT_VE_CONFIRM, OPEN_MODAL_CONFIRM } from '../../redux/types/ModalConfirmType';
const { confirm } = Modal;

function CheckOutSub(props) {

  const dispatch = useDispatch()
  const { danhSachPhongVe, danhSachGheDangChon, tongGiaVe } = props
  const user = JSON.parse(localStorage.getItem(USER_LOG))
  const confirmButtonDatVe = danhSachGheDangChon.length !== 0 ? false : true
  const opacityButtonDatVe = confirmButtonDatVe ? '0.4' : '1'



  useEffect(() => {
    dispatch(layDanhSachPhongVeAction(props.match.params.id))

  }, [])


  if (!localStorage.getItem(USER_LOG)) {
    return <Redirect
      to={{
        pathname: "/login",

      }}
    />;
  }
  const renderChonGhe = () => {
    return danhSachPhongVe.danhSachGhe?.map((ghe, index) => {
      let loaiGHe = ghe.loaiGhe === "Thuong" ? 'checkout_thuong' : 'checkout_vip'
      let gheDat = ghe.daDat === true ? 'checkout_dadat' : ''
      let indexGheDangChon = danhSachGheDangChon?.findIndex(item => item.maGhe == ghe.maGhe)
      let gheDangChon = indexGheDangChon === -1 ? '' : 'checkout_dangchon'
      let gheBanChon = ghe.taiKhoanNguoiDat == user.taiKhoan ? 'checkout_banchon' : ''
      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${loaiGHe} ${gheDat} ${gheDangChon} ${gheBanChon} m-1`} onClick={() => {
          dispatch({
            type: SET_GHE_DANG_DAT_TO_REDUCER,
            gheChon: ghe
          })
        }}>
          {ghe.tenGhe}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }

  return (
    <div className='grid grid-cols-12 min-h-full'>
      <div className='col-span-9 py-2 container mx-auto w-4/5'>
        <div className='flex justify-between'>
          <div className='flex justify-center items-center'>
            <img src={danhSachPhongVe.thongTinPhim?.hinhAnh} style={{ height: 60, width: 60 }} className='rounded-full' alt='123' />
            <div>
              <p>
                {danhSachPhongVe.thongTinPhim?.tenCumRap}<br />
                <span className='text-sm text-gray-600'>- {danhSachPhongVe.thongTinPhim?.gioChieu} - {danhSachPhongVe.thongTinPhim?.tenRap}</span>
              </p>
            </div>
          </div>
          <div>
            <p>thời gian giữ ghế</p>
            <h1 className='text-5xl text-red-600'>5:00</h1>
          </div>
        </div>
        <div className='bg-black mt-5' style={{ height: 15 }}></div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-1%' }} className='checkout_screen'>
          </div>
          <div className='z-40 text-center'>
            <h1 className='font-bold text-1xl pt-5'>Màn hình</h1>
            <div className='mt-20'>
              {renderChonGhe()}
              <div className='flex justify-around mt-6'>
                <div className='flex mb-2 items-center'>
                  <div className='mr-1' style={{ height: 35, width: 35, backgroundColor: 'red' }}></div>
                  Checked
                </div>
                <div className='flex mb-2 items-center'>
                  <div className='mr-1' style={{ height: 35, width: 35, backgroundColor: 'gray' }}></div>
                  Đã chọn
                </div>
                <div className='flex mb-2 items-center'>
                  <div className='mr-1' style={{ height: 35, width: 35, backgroundColor: 'green' }}></div>
                  Bạn chọn
                </div>
                <div className='flex mb-2 items-center'>
                  <div className='checkout_thuong mr-1' style={{ height: 35, width: 35, }}></div>
                  Thường
                </div>
                <div className='flex mb-2 items-center'>
                  <div className='checkout_vip mr-1' style={{ height: 35, width: 35, }}></div>
                  Vip
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3 checkout_right min-h-full flex flex-col justify-between'>
        <div className='px-8'>
          <h1 className='text-green-500 text-5xl font-bold text-center py-4'>{tongGiaVe} đ</h1>
          <hr />
          <div className='py-4'>
            <h3 className='font-bold'> {danhSachPhongVe.thongTinPhim?.tenPhim}</h3>
            <p>{danhSachPhongVe.thongTinPhim?.tenCumRap}</p>
            <p>{danhSachPhongVe.thongTinPhim?.ngayChieu} - {danhSachPhongVe.thongTinPhim?.gioChieu} - {danhSachPhongVe.thongTinPhim?.tenRap}</p>
          </div>
          <hr />
          <p className='flex justify-between py-4'><span className='text-red-500 w-6/12'>Ghế: {danhSachGheDangChon.map((ghe, index) => {
            return <span key={index} className='text-black'>{ghe.tenGhe}, </span>
          })}</span> <span className='text-green-500'>{tongGiaVe} đ</span> </p>
          <hr />
          <p className='py-4'>
            <span className='text-sm text-gray-500'>E-mail</span><br />
            {user.email}
          </p>
          <hr />
          <p className='py-4'>
            <span className='text-sm text-gray-500'>Phone</span><br />
            {user.soDT}
          </p>
          <hr />
        </div>
        <div className='mt-4 w-full'>
          <button style={{ opacity: opacityButtonDatVe }} disabled={confirmButtonDatVe} 
          onClick={() => {dispatch({type:CHUYEN_TAB_CONFIRM})}} className='rounded-none w-full bg-green-600 text-white text-3xl py-4' >Đặt vé</button>
        </div>
      </div>
    </div>
  )
}

function ThonTinDatVe(props) {

  const dispatch = useDispatch()
  const { danhSachGheDangChon, danhSachPhongVe } = props

  const datVe = () => {
    let veDat = {
      maLichChieu: props.match.params.id,
      danhSachVe: danhSachGheDangChon
    }
    dispatch(datVeAction(veDat))
    dispatch({
      type:CLOSE_MODAL_CONFIRM
    })


  }
  return <div style={{ marginTop: '5%' }} className='container mx-auto text-left flex justify-center items-center'>
    <div>
      <h1 className='text-5xl font-bold text-purple-500'>Thông tin đặt vé</h1>
      <div className='flex mt-8'>
        <div className='mr-5'>
          <img className='mr-3' style={{ width: 200, height: 300 }} src={danhSachPhongVe.thongTinPhim?.hinhAnh} alt={danhSachPhongVe.thongTinPhim?.hinhAnh} >
          </img>
        </div>
        <div className='flex justify-start w-1/2' >
          <div className='text-gray-700 text-left' style={{ whiteSpace: 'pre-line' }} >
            <h1 className='text-3xl font-bold'>{danhSachPhongVe.thongTinPhim?.tenPhim}</h1>
            <p>{danhSachPhongVe.thongTinPhim?.tenCumRap}</p>
            <p>{danhSachPhongVe.thongTinPhim?.ngayChieu} - {danhSachPhongVe.thongTinPhim?.gioChieu} - {danhSachPhongVe.thongTinPhim?.tenRap}</p>

            <p className='mt-4'>Ghế ngồi:<br />
              {danhSachGheDangChon.map((ghe, index) => {
                return <span key={index} className='text-black'>{ghe.tenGhe}, </span>
              })}</p>
          </div>
        </div>

      </div>
      <button onClick={() => { dispatch({ type: DAT_VE_CONFIRM, button: datVe }) }} className='bg-green-600 text-white text-2xl font-bold p-3 mt-5'>Xác nhận đặt vé và thanh toán</button>
    </div>
  </div>
};


export default function CheckOut(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const { danhSachPhongVe, danhSachGheDangChon, tongGiaVe } = useSelector(state => state.QuanLyDatVeReducer)

  const { key, disableTab } = useSelector(state => state.QuanLyDatVeReducer)

  const onChange = (key) => {
    dispatch({
      type: SET_KEY_TAB,
      keyTab: key
    })
  };


  return <Tabs
    className='checkout min-h-screen'
    defaultActiveKey="1"
    activeKey={key}
    onChange={onChange}
    items={[
      {
        label: `1. Chọn ghế`,
        key: '1',
        children: <CheckOutSub danhSachPhongVe={danhSachPhongVe} danhSachGheDangChon={danhSachGheDangChon} tongGiaVe={tongGiaVe} {...props} />,

      },
      {
        label: `2. Thông tin đặt vé`,
        key: '2',
        children: <ThonTinDatVe danhSachPhongVe={danhSachPhongVe} danhSachGheDangChon={danhSachGheDangChon} {...props} />,
        disabled : disableTab
      },
      {
        label: <HomeOutlined onClick={() => {
          history.push('/home')
        }} className='text-2xl flex items-center' />,
        key: '3',
      },
    ]}
  />

}