import Modal from 'antd/es/modal/Modal'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import styled from 'styled-components'

import Slider from "react-slick";
import './HomeDanhSachPhim.css'
import Film from '../../../components/Film/Film'

import { actionLayDanhSachPhim } from '../../../redux/action/QuanLyPhimAction'
import { GET_PHIM_DANGCHIEU, GET_PHIM_SAPCHIEU } from '../../../redux/types/QuanLyPhimType';

export default function HomeDanhSachPhim() {
    const dispatch = useDispatch()
    const { layDanhSachPhim } = useSelector(state => state.QuanLyPhimReducer)
    useEffect(() => {
        dispatch(actionLayDanhSachPhim(''))
    }, [])

    const [valueActive, setValue] = useState('')

    const activeClass = "px-8 py-3 font-semibold rounded dark:bg-purple-400 dark:text-gray-800"

    const nonActiveClass = "px-8 py-3 hover:bg-purple-400 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"

    const settingsSmall = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
    
    };

    const settingsBig = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1295,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 914,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 523,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings = layDanhSachPhim?.length > 3 ? {...settingsBig} : {...settingsSmall}

    const renderListPhim = () => {
        return layDanhSachPhim.map((item, index) => {
            
            return <Film key={index} item={item} />
        })



    }
    return (
        <section className="text-gray-600 body-font homedanhsachphim mt-5 mb-5">
           <div >
           <button type="button" value = '1' onClick={() => {
            setValue('1')
            dispatch({
                type:GET_PHIM_DANGCHIEU
            })
           }} className={valueActive == '1' ? activeClass + ' mr-2' : nonActiveClass + ' mr-2'} >Đang Chiếu</button>
           <button  onClick={() => {
            setValue('2')
            dispatch({
                type:GET_PHIM_SAPCHIEU
            })
           }}type="button" className={valueActive == '2' ? activeClass : nonActiveClass }>Sắp chiếu</button>
           </div>
            <Slider {...settings} className="container px-8 py-5 mx-auto">
                {renderListPhim()}
            </Slider>
            {/* <HomeModal /> */}
        </section>
    )
}
