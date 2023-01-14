import React from 'react'
import { withFormik } from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux'
import { dangKy, dangNhap } from '../../redux/action/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom';

function Register(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
            <span className="text-2xl font-light ">Đăng ký thông tin </span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className="h-2 bg-purple-400 rounded-t-md" />
                <form onSubmit={handleSubmit} className="px-8 py-6 ">
                    <label className="block font-semibold"> Username</label>
                    <input name="taiKhoan" onChange={handleChange} type="text" placeholder="Username" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 round
                    ed-md" />
                    {errors.taiKhoan && touched.taiKhoan && <div className='text-purple-500' id="feedback">{errors.taiKhoan}</div>}

                    <label className="block mt-3 font-semibold"> Họ Tên </label>
                    <input name="hoTen" onChange={handleChange} type="text"  placeholder="hoTen" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.hoTen && touched.hoTen && <div className='text-purple-500' id="feedback">{errors.hoTen}</div>}

                    <label className="block mt-3 font-semibold"> Password </label>
                    <input name="matKhau" onChange={handleChange} type="password" autoComplete="on" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.matKhau && touched.matKhau && <div className='text-purple-500' id="feedback">{errors.matKhau}</div>}

                    <label className="block mt-3 font-semibold"> Email </label>
                    <input name="email" onChange={handleChange} type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.email && touched.email && <div className='text-purple-500' id="feedback">{errors.email}</div>}

                    <label className="block mt-3 font-semibold"> Phone </label>
                    <input name="soDt" onChange={handleChange} type="number" placeholder="Phone" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.soDt && touched.soDt && <div className='text-purple-500' id="feedback">{errors.soDt}</div>}

                    <label className="block mt-3 font-semibold"> Mã nhóm </label>
                    <input name="maNhom" onChange={handleChange} type="password" placeholder="Mã nhóm" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.maNhom && touched.maNhom && <div className='text-purple-500' id="feedback">{errors.maNhom}</div>}
                    
                    
                    <div className="flex justify-between items-baseline">
                        <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Submit</button>
                        <NavLink to={"/login"} className="text-sm hover:underline">Quay lại đăng nhập</NavLink>
                    </div>
                </form>
            </div></div></div>
}

const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: '',
        email:'',
        soDt:'',
        maNhom:'',
        hoTen:''



    }),

    validationSchema: yup.object().shape({
        taiKhoan: yup.string().required("Chưa điền thông tin"),
        matKhau: yup.string().required("Chưa điền thông tin"),
        email: yup.string().required("Chưa điền thông tin"),
        soDt: yup.string().required("Chưa điền thông tin"),
        hoTen: yup.string().required("Chưa điền thông tin"),

    }),

    handleSubmit: (values, {props, setSubmitting }) => {

        props.dispatch(dangKy(values))
    },

    displayName: 'BasicForm',
})(Register);


export default connect()(MyEnhancedForm)