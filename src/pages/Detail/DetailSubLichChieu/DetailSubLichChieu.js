import React from 'react'
import { Radio, Space, Tabs } from 'antd';
import Moment from 'react-moment';
import 'moment-timezone';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { layDanhSachPhongVeAction } from '../../../redux/action/QuanLyDatVeAction';

export default function DetailSubLichChieu(props) {

    

    const { tenRap } = props
    const dispatch = useDispatch()
    return (
        <div><Tabs
            tabPosition={'left'}
            items={tenRap.cumRapChieu?.map((cumRap, i) => {
                return {
                    label: [<div key={i} className='flex'>
                        <div className='mr-1'>
                            <img style={{ width: '50px', height: '50px' }} src={cumRap.hinhAnh} alt={cumRap.hinhAnh} />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-bold'>{cumRap.tenCumRap}</h4>
                            <p className='text-xs'>{cumRap.diaChi}</p>
                            <p className='text-xs text-red-600'>[chi tiết]</p>
                        </div>
                    </div>],
                    key: i,
                    children: [<div key={i} className='grid grid-cols-5 gap-1'>{cumRap.lichChieuPhim?.map((lichChieu, index) => {
                        return <NavLink key={lichChieu.maLichChieu} to={`/checkout/${lichChieu.maLichChieu}`} ><Moment className='bg-purple-500 text-base text-center text-white text-xs pr-1 pl-1 cursor-pointer' format="HH:mm" >{lichChieu.ngayChieuGioChieu}</Moment></NavLink>
                    })}
                    </div>],
                };
            })}
        /></div>
    )
}
