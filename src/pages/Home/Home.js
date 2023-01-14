import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useDispatch, useSelector } from 'react-redux'
import HomeDanhSachPhim from './HomeDanhSachPhim/HomeDanhSachPhim'
import HomCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomCarousel'

export default function Home(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className='container mx-auto w-4/5'>
            <HomCarousel />
            <HomeDanhSachPhim />
            <HomeMenu />
        </div>
    )
}
