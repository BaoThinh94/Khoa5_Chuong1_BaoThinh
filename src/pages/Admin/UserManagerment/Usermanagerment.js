import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/action/QuanLyNguoiDungAction';
import { message, Popconfirm, Table } from 'antd';
import "./Usermanagerment.css"
import { useRef } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { SET_EDIT_USER_TO_REDUCER } from '../../../redux/types/QuanLyNguoiDungType';
import { SET_DEFAULT_KEY } from '../../../redux/types/AdminTemplateType';

export default function Usermanagerment() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction(''))

  }, [])

  const { layDanhSachNguoiDungReducer } = useSelector(state => state.QuanLyNguoiDungReducer);
  
  const text = useRef(null)
  const onSearch = (e) => {

    if (text.current != null) {
      clearTimeout(text.current)
    }
    text.current = setTimeout(() => {
      dispatch(layDanhSachNguoiDungAction(e.target.value))
    }, 500)
  };

  const textConfirm = 'Are you sure to delete this User?';
  const description = 'Delete the task';

  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
    },
    {
      title: 'Name',
      dataIndex: 'hoTen',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.taiKhoan.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
    },
    {
      title: 'Loại người dùng',
      dataIndex: 'maLoaiNguoiDung',
      render: (text, record, index) => {
        return <div>{record.maLoaiNguoiDung == 'KhachHang' ? 'Khách hàng' : "Quản Trị"}</div>
      },
      filters: [
        {
          text: 'Khách hàng',
          value: 'KhachHang',
        },
        {
          text: 'Quản trị',
          value: 'QuanTri',
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
    },
    {
      title: 'Action',

      render: (text, record, index) => {
        return <div className='text-base'>
          <NavLink onClick={() => {
            localStorage.setItem("edituser", JSON.stringify(record))
          }} to={`/admin/usermanager/edituser/${record.taiKhoan}`} className='mr-4 text-blue-600 cursor-pointer'><EditOutlined /></NavLink>        <Popconfirm
            placement="left"
            title={textConfirm}
            description={description}
            onConfirm={() => {
              console.log(record.taiKhoan)
              dispatch(xoaNguoiDungAction(record.taiKhoan))}}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined className='mr-4 text-red-600 cursor-pointer' />
          </Popconfirm>
        </div>
      },
    },
  ];



  return (
    <>
      <h1 className='text-2xl font-bold usermana'>User Managerment</h1>
      <div>
        <input
          className='w-full border-2 border-sky-500 rounded-lg p-2 mt-4'
          placeholder="input search text"
          onChange={onSearch}
        />
      </div>
      <Table className='usermanagerment' columns={columns} rowKey="taiKhoan" dataSource={layDanhSachNguoiDungReducer} />
    </>
  )
}
