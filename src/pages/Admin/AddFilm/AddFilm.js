import React, { useEffect, useState } from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,

} from 'antd';

import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {  themPhimUploadHinhAction } from '../../../redux/action/QuanLyPhimAction';
import * as Yup from 'yup';
import { SET_DEFAULT_KEY } from '../../../redux/types/AdminTemplateType';

export default function AddFilm() {
    const dispatch = useDispatch();
    const [componentSize, setComponentSize] = useState('default');
    const [img, setImg] = useState('')
    const display = img !== '' ? '' : 'hidden'


    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: '',
            hinhAnh: null
        },

        validationSchema: Yup.object().shape({
            tenPhim: Yup.string()
                .required('Required'),
            moTa: Yup.string()
                .required('Required'),
            ngayKhoiChieu: Yup.string().required('Required'),
            danhGia: Yup.number().required('Required'),
           
        }),

        onSubmit: values => {
           
            if (values.hinhAnh == null){
                alert("Phim chưa có ảnh") 
            }
            let formdata = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formdata.append(key, values[key]);
                } else {
                    formdata.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            dispatch(themPhimUploadHinhAction(formdata))
        },
    });

    const handleChangeDatepicker = (date, dateString) => {
        formik.setFieldValue('ngayKhoiChieu', dateString)
    }

    const handleChangeUpload = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImg(e.target.result)
        }
        formik.setFieldValue('hinhAnh', file)

    }

    return (
        <>
        <h1 className='text-2xl font-bold mb-5'>Thêm phim</h1>
        <Form
            onFinish={formik.handleSubmit}
            labelCol={{
                span: 2,
            }}
            wrapperCol={{
                span: 10,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <Form.Item label="Tên Phim">
                <Input name='tenPhim' onChange={formik.handleChange} />
                {formik.touched.tenPhim && formik.errors.tenPhim && <div className='text-red-500'>{formik.errors.tenPhim}</div>}
            </Form.Item>
            <Form.Item label="Trailer">
                <Input name='trailer' onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <Input name='moTa' onChange={formik.handleChange} />
                {formik.touched.moTa && formik.errors.moTa && <div className='text-red-500'>{formik.errors.moTa}</div>}
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD-MM-YYYY"} onChange={(handleChangeDatepicker)} />
                {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu && <div className='text-red-500'>{formik.errors.ngayKhoiChieu}</div>}
            </Form.Item>
            <Form.Item label="Đang chiếu" valuePropName="checked">
                <Switch onChange={(value, e) => { formik.setFieldValue("dangChieu", value) }} />
            </Form.Item>
            <Form.Item label="Sắp chiếu" valuePropName="checked">
                <Switch onChange={(value, e) => { formik.setFieldValue("sapChieu", value) }} />
            </Form.Item>
            <Form.Item label="Hot" valuePropName="checked">
                <Switch onChange={(value, e) => { formik.setFieldValue("hot", value) }} />
            </Form.Item>

            <Form.Item label="Số sao">
                <InputNumber onChange={(value, e) => { formik.setFieldValue("danhGia", value) }} min={1} max={10} />
                {formik.touched.danhGia && formik.errors.danhGia && <div className='text-red-500'>{formik.errors.danhGia}</div>}
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
                <input type="file" onChange={handleChangeUpload} accept="image/png, image/jpeg,image/gif,image/png" >
                </input>
                <img style={{ width: 80, height: 120 }} className={`mt-4 ${display}`} src={img} alt='123' />
            </Form.Item>
            <Form.Item className='ml-36'>
                <Button htmlType="submit" className='bg-green-600 '>Save</Button>
            </Form.Item>
        </Form>
        </>
    )
}
