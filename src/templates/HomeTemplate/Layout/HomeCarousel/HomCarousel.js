import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { actionLayDanhSachBanner } from '../../../../redux/action/QuanLyPhimAction';



export default function HomCarousel() {

    const { layDanhSachBanner } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    const contentStyle = {
        height: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%'


    };


    useEffect(() => {
        dispatch(actionLayDanhSachBanner())
    }, [])

    const renderCarousel = () => {
        return layDanhSachBanner.map((img, index) => {
            return <div key={index} >
                <div style={{ ...contentStyle, backgroundImage: `url('${img.hinhAnh}')` }}>

                </div>
            </div >
        })
    }


    return (
        <Carousel effect="fade" >
            {renderCarousel()}
        </Carousel >
    )
}
