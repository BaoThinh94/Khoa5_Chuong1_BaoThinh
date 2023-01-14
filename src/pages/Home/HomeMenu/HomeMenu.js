import React, { useEffect, useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import HomeSubCumRap from './HomeSubCumRap/HomeSubCumRap';
import { layThongTinLichChieuHeThongRapAction } from '../../../redux/action/QuanLyRapAction';


export default function HomeMenu() {
    const [tabPosition, setTabPosition] = useState('left');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layThongTinLichChieuHeThongRapAction())
    },[])
    const {layThongTinLichChieuHeThongRap} = useSelector(state => state.QuanLyRapReducer)
    return (
        <>

            <Tabs
                tabPosition={tabPosition}
                items={layThongTinLichChieuHeThongRap.map((cumRap, index) => {
                   
                    return {
                        label: [<img key={index} src={cumRap.logo} className='w-12 rounded-full' alt={cumRap.logo}></img>],
                        key: index,
                        children: [<HomeSubCumRap key={index} cumRap = {cumRap}/>],
                    };
                })}
            />
        </>
    )
}
