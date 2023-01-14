import React, { useEffect } from 'react'
import './Detail.css'
import '../../assets/styles/circle.css'
import { Radio, Space, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';



import moment from 'moment'
import DetailSubLichChieu from './DetailSubLichChieu/DetailSubLichChieu';
import { layThongTinLichChieuPhimAction } from '../../redux/action/QuanLyRapAction';

export default function Detail(props) {

    const { id } = props.match.params
    const { layThongTinLichChieuPhim } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(layThongTinLichChieuPhimAction(id))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return <div className='detail' style={{ backgroundImage: `url('${layThongTinLichChieuPhim.hinhAnh}')` }}>
        <div className='detail_glassmorphism'>
            <div className='container mx-auto py-44 w-2/5 '>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div>
                            <img className='mr-3' style={{ width: 200, height: 300 }} src={layThongTinLichChieuPhim.hinhAnh} alt={layThongTinLichChieuPhim.hinhAnh} >
                            </img>
                        </div>
                        <div className='flex justify-start w-1/2' >
                            <div className='text-gray-700' style={{ whiteSpace: 'pre-line' }} >
                                <p >Ngày khởi chiếu: {moment(layThongTinLichChieuPhim.ngayKhoiChieu).format("DD-MM-YYYY")}  </p>
                                <h1 className='text-3xl font-bold'>{layThongTinLichChieuPhim.tenPhim}</h1>

                                <p className='mt-4'>Nội dung:<br /> {layThongTinLichChieuPhim.moTa}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className={`c100 p${layThongTinLichChieuPhim.danhGia * 10} green`}>
                                <span>{layThongTinLichChieuPhim.danhGia}</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <p className='text-center'>Điểm đành giá</p>
                        </div>
                    </div>
                </div>
                <div className='text-gray-200 mt-20 bg-white p-5'>
                    <h1 className='font-bold text-2xl mb-9 text-purple-700 text-center'>Thông tin đặt vé</h1>
                    <Tabs
                        className='text-gray-200'
                        tabPosition={'left'}
                        items={layThongTinLichChieuPhim.heThongRapChieu?.map((tenRap, index) => {
                            return {
                                label: [<img key={index} className='w-12 rounded-full' src={tenRap.logo} alt={tenRap.logo} />],
                                key: index,
                                children: [<DetailSubLichChieu key={index} tenRap={tenRap}/>],
                            };
                        })}
                    />
                </div>
            </div>
        </div>
    </div>
}
