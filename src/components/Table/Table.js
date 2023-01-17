import { CalendarOutlined, DeleteOutlined, EditOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { stringify } from 'postcss'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../../assets/Pagination/Pagination.css'
import { layThongTinPhim, xoaPhim } from '../../redux/action/QuanLyPhimAction'

export default function Table(props) {


    const { data, ROW } = props
    const dispatch = useDispatch()
    const [activePagination, setActivePagination] = useState(1)

    const renderFilm = (row, page) => {
        return data?.slice(row * page - row, row * page)?.map((item, index) => {
            return <tr key={index} className='dashboard_table_item'>
                <td>{item.maPhim} </td>
                <td className='flex justify-center items-center'><img style={{ height: '70px', width: '50px' }} src={item.hinhAnh} alt='123'></img></td>
                <td>{item.tenPhim}</td>
                <td>{(item.moTa)?.length > 100 ? item.moTa.slice(0, 100) + ' ...' : item.moTa} </td>
                <td> <NavLink to = {`/admin/editfilm/${item.maPhim}`} ><EditOutlined className='dashboard_button hover:font-bold text-blue-400 hover:text-blue-700'/></NavLink> <DeleteOutlined onClick={() => {dispatch(xoaPhim(item.maPhim))}} className='dashboard_button hover:font-bold text-red-400 hover:text-red-700' /> <NavLink to = {`/admin/showtime/${item.maPhim}`} onClick = {() => {}}><CalendarOutlined onClick = {() => {
                    localStorage.setItem("film", JSON.stringify(item))
                }} className='dashboard_button hover:font-bold text-blue-400 hover:text-blue-700'/></NavLink></td>
            </tr>
        })
    }


    const addButtonPagination = (row) => {
        let tong = []
        for (let i = 0; i < Math.ceil(data?.length / row); i++) {

            tong.push(i + 1)
        }
          return tong
    }

    const renderPaginaton = (row) => {
        let tong = addButtonPagination(row);
        return tong.map((item, index) => {
            if (activePagination == item) {
                return <button key={index} className='pagination_button pagination_button_active' onClick={() => { setActivePagination(item) }}>
                    {item}
                </button>
            } else {
                return <button key={index} className='pagination_button' onClick={() => { setActivePagination(item) }}>
                    {item}
                </button>
            }
        })
    }
    return (
        <div><table style={{ width: '100%' }} className='dashboard_table'>
            <tbody>
                <tr className='dashboard_table_title'>
                    <th>Mã Phim</th>
                    <th>Hình Ảnh</th>
                    <th>Tên phim</th>
                    <th>Nội dung</th>
                    <th>Hành động</th>
                </tr>
                {renderFilm(ROW, activePagination)}
            </tbody>
        </table>
            <div className='text-right mt-5 flex justify-end' style={{ fontSize: '16px' }}>
                <button className='pagination_button' onClick={() => {
                    if (activePagination !== 1) {
                        setActivePagination(activePagination - 1)
                    }
                }}>
                    <LeftOutlined />
                </button>
                {renderPaginaton(ROW)}
                <button className='pagination_button' onClick={() => {
                    if (activePagination !== Math.ceil(data?.length / ROW)) {
                        setActivePagination(activePagination + 1)
                    }
                }}>
                    <RightOutlined />
                </button>
            </div></div>
    )
}
