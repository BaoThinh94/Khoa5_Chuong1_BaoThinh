import React from 'react'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import { MANHOM, USER_LOG } from '../../../util/settings/config';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { capNhatThongTinNguoiDungProfileAction, layDanhSachLoaiNguoiDungAction } from '../../../redux/action/QuanLyNguoiDungAction';
import { useSelector } from 'react-redux';

export default function UserInfor() {

    const userlog = JSON.parse(localStorage.getItem(USER_LOG))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachLoaiNguoiDungAction())
    }, [])
    const { layDanhSachLoaiNguoiDungReducer } = useSelector(state => state.QuanLyNguoiDungReducer)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userlog.taiKhoan,
            matKhau: '',
            email: userlog.email,
            soDT: userlog.soDT,
            maNhom: MANHOM,
            hoTen: userlog.hoTen,
            maLoaiNguoiDung: userlog.maLoaiNguoiDung
        },

        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required("Chưa điền thông tin"),
            matKhau: yup.string().required("Chưa điền thông tin"),
            email: yup.string().required("Chưa điền thông tin"),
            soDT: yup.string().required("Chưa điền thông tin"),
            hoTen: yup.string().required("Chưa điền thông tin"),
        }),

        onSubmit: values => {
            console.log(values)
            dispatch(capNhatThongTinNguoiDungProfileAction(values))

        },
    });

    console.log(formik.errors)

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
        <h1 className='text-2xl font-bold mb-8'>Thông tin tài khoản</h1>
        <Form
            className='w-1/2'
            onFinish={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <Form.Item label="Tài khản">
                <Input disabled name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan} />
                {formik.errors.taiKhoan && formik.touched.taiKhoan && <div className='text-purple-500' id="feedback">{formik.errors.taiKhoan}</div>}
            </Form.Item>
            <Form.Item label="Mật khẩu">
                <Input.Password name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
                {formik.errors.matKhau && formik.touched.matKhau && <div className='text-purple-500' id="feedback">{formik.errors.matKhau}</div>}
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
                {formik.errors.hoTen && formik.touched.hoTen && <div className='text-purple-500' id="feedback">{formik.errors.hoTen}</div>}
            </Form.Item>
            <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email && formik.touched.email && <div className='text-purple-500' id="feedback">{formik.errors.email}</div>}
            </Form.Item>
            <Form.Item label="Phone">
                <Input name="soDT" onChange={formik.handleChange} value={formik.values.soDT} />
                {formik.errors.soDT && formik.touched.soDT && <div className='text-purple-500' id="feedback">{formik.errors.soDT}</div>}
            </Form.Item>
            <Form.Item label="Loại tài khoản">
                {/* <Select name="maLoaiNguoiDung" onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung}/> */}
                <select disabled name="maLoaiNguoiDung" onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} className="border w-full h-8 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" >
                    {layDanhSachLoaiNguoiDungReducer?.map((item, index) => {
                        return <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
                    })}

                </select>
            </Form.Item>
            <Form.Item className='text-center'>
                <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Save</button>
            </Form.Item>
        </Form>
        </>
    );
}
