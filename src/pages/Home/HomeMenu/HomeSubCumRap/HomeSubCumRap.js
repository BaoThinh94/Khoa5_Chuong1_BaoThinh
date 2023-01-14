import React, { useState } from 'react'
import { Radio, Space, Tabs } from 'antd';
import Moment from 'react-moment';
import 'moment-timezone';

export default function HomeSubCumRap(props) {
  const [tabPosition, setTabPosition] = useState('left');
  const { cumRap } = props
  return (
    <><Tabs
      tabPosition={tabPosition}
      items={cumRap.lstCumRap?.map((rapPhim, index) => {
        return {
          label: [<div key={index} className='flex'>
            <div className='mr-1'>
              <img style={{ width: '50px', height: '50px' }} src={rapPhim.hinhAnh} />
            </div>
            <div className='text-left'>
              <h4 className='font-bold'>{rapPhim.tenCumRap}</h4>
              <p className='text-xs'>{rapPhim.diaChi}</p>
              <p className='text-xs text-red-600'>[chi tiết]</p>
            </div>
          </div>
          ],
          key: index,
          children: [<div key={index} className='grid grid-cols-4 gap-2'>{rapPhim.danhSachPhim?.map((phim, index) => {
            return <div key={phim.maPhim} className='flex mb-2'>
              <div className='mr-3'><img src={phim.hinhAnh} alt={phim.hinhAnh} style={{ width: '60px', height: '90px' }} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://picsum.photos/60/90";
              }} /></div>
              <div>
                <h1 className='font-bold text-base'>{phim.tenPhim}</h1>
                <div className='grid grid-cols-3 gap-1'>
                  {phim.lstLichChieuTheoPhim?.slice(0, 8).map((lich, index) => {
                    return <Moment key={lich.maLichChieu} className='bg-purple-500 text-white text-xs pr-1 pl-1 cursor-pointer' format="HH:mm" >{lich.ngayChieuGioChieu}</Moment>
                  })}
                </div>
              </div>
            </div>
          })}
          </div>],
        };
      })}
    /></>
  )
}
