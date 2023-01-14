import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './Dashboard.css'
import { useState } from 'react'
import { actionLayDanhSachPhim } from '../../../redux/action/QuanLyPhimAction';
import { EditOutlined, DeleteOutlined, LeftOutlined, RightOutlined, AudioOutlined } from '@ant-design/icons';
import '../../../assets/Pagination/Pagination.css'
import { set } from 'lodash'
import Table from '../../../components/Table/Table'
import { Input, Space } from 'antd';
const { Search } = Input;

export default function Dashboard(props) {
  const dispatch = useDispatch()
 
  const { layDanhSachPhim } = useSelector(state => state.QuanLyPhimReducer)
  useEffect(() => {
    dispatch(actionLayDanhSachPhim(''))
  }, [])

  const text = useRef(null)

  const onSearch = (e) => {

    console.log(text.current)
    if (text.current != null ){
      clearTimeout(text.current)
    }
    text.current = setTimeout(() => {
      dispatch(actionLayDanhSachPhim(e.target.value))  
    },500) 
  };

 


  return <div className='dashboard'>
    <h1 className='text-2xl font-bold'>Quản lý phím</h1>
    <div>
    <input
      className='w-full border-2 border-sky-500 rounded-lg p-2 mt-4'
      placeholder="input search text"
      onChange={onSearch}
    />
    </div>
    <Table data = {layDanhSachPhim} ROW = {5}/>
  </div>
}
