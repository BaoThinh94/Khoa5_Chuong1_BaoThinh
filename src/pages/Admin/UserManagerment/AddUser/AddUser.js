import { useFormik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { capNhatThongTinNguoiDungAction, layDanhSachLoaiNguoiDungAction, themNguoiDungAction } from '../../../../redux/action/QuanLyNguoiDungAction';
import { MANHOM } from '../../../../util/settings/config';
import * as yup from 'yup';


export default function AddUser() {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(layDanhSachLoaiNguoiDungAction())
    },[])
    const { layDanhSachLoaiNguoiDungReducer} = useSelector(state => state.QuanLyNguoiDungReducer)
  
   

    const formik = useFormik({
       enableReinitialize: true,
       initialValues: {
           taiKhoan: '',
           matKhau: '',
           email:'',
           soDt:'',
           maNhom:MANHOM,
           hoTen:'',
           maLoaiNguoiDung:layDanhSachLoaiNguoiDungReducer[0]?.tenLoai
       },

       validationSchema: yup.object().shape({
           taiKhoan: yup.string().required("Chưa điền thông tin"),
           matKhau: yup.string().required("Chưa điền thông tin"),
           email: yup.string().required("Chưa điền thông tin"),
           soDt: yup.string().required("Chưa điền thông tin"),
           hoTen: yup.string().required("Chưa điền thông tin"),
   
          
       }),

       onSubmit: values => {
           dispatch(themNguoiDungAction(values))
           
       },
   });

 return (
   <div className="relative pb-9 min-h-full flex text-gray-800 antialiased justify-center overflow-hidden bg-gray-50">
       <div className="relative sm:w-96 mx-auto text-center">
           <span className="text-2xl font-light ">Cập nhật thông tin </span>
           <div className="mt-4  bg-white shadow-md rounded-lg text-left">
               <div className="h-2 bg-purple-400 rounded-t-md" />
               <form onSubmit={formik.handleSubmit} className="px-8 py-6 ">
                   <label className="block font-semibold"> Username</label>
                   <input name="taiKhoan" onChange={formik.handleChange} type="text" placeholder="Username" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 round
                   ed-md" value={formik.values.taiKhoan} />
                   {formik.errors.taiKhoan && formik.touched.taiKhoan && <div className='text-purple-500' id="feedback">{formik.errors.taiKhoan}</div>}

                   <label className="block mt-3 font-semibold"> Họ Tên </label>
                   <input name="hoTen" onChange={formik.handleChange} type="text"  placeholder="hoTen" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" value={formik.values.hoTen} />
                   {formik.errors.hoTen && formik.touched.hoTen && <div className='text-purple-500' id="feedback">{formik.errors.hoTen}</div>}

                   <label className="block mt-3 font-semibold"> Password </label>
                   <input name="matKhau" onChange={formik.handleChange} type="password" autoComplete="on" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" value={formik.values.matKhau}/>
                   {formik.errors.matKhau && formik.touched.matKhau && <div className='text-purple-500' id="feedback">{formik.errors.matKhau}</div>}

                   <label className="block mt-3 font-semibold"> Email </label>
                   <input name="email" onChange={formik.handleChange} type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" value={formik.values.email}/>
                   {formik.errors.email && formik.touched.email && <div className='text-purple-500' id="feedback">{formik.errors.email}</div>}

                   <label className="block mt-3 font-semibold"> Phone </label>
                   <input name="soDt" onChange={formik.handleChange} type="number" placeholder="Phone" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" value={formik.values.soDt}/>
                   {formik.errors.soDt && formik.touched.soDt && <div className='text-purple-500' id="feedback">{formik.errors.soDt}</div>}

                   <label className="block mt-3 font-semibold"> Loại người dùng </label>
                   <select  name="maLoaiNguoiDung" onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} className="border w-full h-8 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" >
                       {layDanhSachLoaiNguoiDungReducer?.map((item,index) => {
                           return <option key={index} value = {item.maLoaiNguoiDung}>{item.tenLoai}</option>
                       })}
                      
                   </select>
                   {formik.errors.maNhom && formik.touched.maNhom && <div className='text-purple-500' id="feedback">{formik.errors.maNhom}</div>}
                   <div className="flex justify-between items-baseline">
                       <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Submit</button>
                   </div>
               </form>
           </div></div></div>
 )
}
