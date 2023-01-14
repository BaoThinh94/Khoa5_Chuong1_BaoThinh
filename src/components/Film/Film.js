
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { PlaySquareOutlined } from '@ant-design/icons'
import styled from 'styled-components'


import { ADD_TO_HOMEMODALREDUCER_TRALER } from '../../redux/types/HomeModalType'
import { NavLink } from 'react-router-dom'


const ListPhim = styled.div`
{
   
    width:250px !important;
   

    &:hover .dsphim_play {
        display: flex;
      }

    &:hover .dsphim_detail {
        display: block;
      }
}

`;


export default function Film(props) {
    const { item } = props

    const dispatch = useDispatch()

    return (
        <ListPhim >
            <div className=" h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                <div className='relative'>
                    <img style={{ width: '250px', height: '350px' }} src={item.hinhAnh}>
                    </img>
                    <div
                        className='cursor-pointer hidden dsphim_play absolute w-full top-0 h-full flex justify-center items-center'>< PlaySquareOutlined onClick={() =>
                            dispatch({
                                type: ADD_TO_HOMEMODALREDUCER_TRALER,
                                tenPhim: item.tenPhim,
                                trailer: item.trailer,
                            })
                        } className='text-2xl' style={{ fontSize: '50px', color: 'red' }} /></div>


                    <div className='hidden dsphim_detail p-3 absolute bottom-0 text-white left-0 w-full bg-black/50'>
                        <h3 className='mb-2'>{item.tenPhim}</h3>
                        <div>
                            <NavLink to={`/detail/${item.maPhim}`}><button className='bg-purple-600 p-2 rounded-lg mr-1'>Xem chi tiết</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </ListPhim >
    )
}
