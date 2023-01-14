import React from 'react'
import { withFormik } from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux'
import { dangNhap } from '../../redux/action/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom';

function Login(props) {
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
            <span className="text-2xl font-light ">Login to your account</span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className="h-2 bg-purple-400 rounded-t-md" />
                <form onSubmit={handleSubmit} className="px-8 py-6 ">
                    <label className="block font-semibold"> Username</label>
                    <input name="taiKhoan" onChange={handleChange} type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.taiKhoan && touched.taiKhoan && <div id="feedback">{errors.taiKhoan}</div>}
                    <label className="block mt-3 font-semibold"> Password </label>
                    <input name="matKhau" onChange={handleChange} type="password" autoComplete="on" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                    {errors.matKhau && touched.matKhau && <div id="feedback">{errors.matKhau}</div>}
                    <div className="flex justify-between items-baseline">
                        <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
                        <NavLink to={"/register"} className="text-sm hover:underline">Register</NavLink>
                    </div>
                </form>
            </div></div></div>
}

const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: ''

    }),

    validationSchema: yup.object().shape({
        taiKhoan: yup.string().required(),
        matKhau: yup.string().required(),
    }),

    handleSubmit: (values, {props, setSubmitting }) => {

        props.dispatch(dangNhap(values))
    },

    displayName: 'BasicForm',
})(Login);


export default connect()(MyEnhancedForm)