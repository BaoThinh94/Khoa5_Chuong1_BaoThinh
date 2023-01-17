import React, { useEffect, useState } from 'react';
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
} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinCumRapTheoHeThongAction, layThongTinHeThongRapAction } from '../../../redux/action/QuanLyRapAction';
import { useFormik } from 'formik';
import _ from 'lodash';
import * as Yup from 'yup';
import { taoLichChieuAction } from '../../../redux/action/QuanLyDatVeAction';

export default function ShowTime(props) {
    const dispatch = useDispatch();
    const film = JSON.parse(localStorage.getItem("film"));
    console.log(film)
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''

        },

        validationSchema: Yup.object().shape({

            maRap: Yup.string().required('Required'),
            ngayChieuGioChieu: Yup.string().required('Required'),
            giaVe: Yup.string().required('Required'),

        }),


        onSubmit: values => {
            dispatch(taoLichChieuAction(values))

        },
    });

    const [componentSize, setComponentSize] = useState('default');

    const { layThongTinHeThongRapReducer, layThongTinCumRapTheoHeThongReducer } = useSelector(state => state.QuanLyRapReducer)
    const listHeThongRap = layThongTinHeThongRapReducer?.map((item, index) => {
        return {
            value: item.maHeThongRap,
            label: item.maHeThongRap
        }
    })

    const listCumRapTheoHeThong = layThongTinCumRapTheoHeThongReducer?.map((item, index) => {
        return {
            value: item.maCumRap,
            label: item.tenCumRap
        }
    })

    const onChange = (value, dateString) => {
        formik.setFieldValue("ngayChieuGioChieu", dateString)
    };


    useEffect(() => {
        dispatch(layThongTinHeThongRapAction())
    }, [])

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleChangeMaHeThongRap = (value) => {
        dispatch(layThongTinCumRapTheoHeThongAction(value))
        console.log(value)
    }

    const handleChangeRap = (value) => {
        formik.setFieldValue("maRap", value)
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-6'>Tạo lịch chiếu</h1>
            <div className='pl-48 mb-5'>
                <div><img style={{ width: 200 }} src={film.hinhAnh} alt={film.hinhAnh} /></div>
            </div>
            <Form
                onSubmitCapture={formik.handleSubmit}
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

                <Form.Item label="Tên Phim">
                    <h2 className='text-xl font-bold'>{film.tenPhim}</h2>
                </Form.Item>
                <Form.Item label="Hệ thống rạp">
                    <Select style={{
                        width: 200,
                    }}

                        options={listHeThongRap}
                        onChange={handleChangeMaHeThongRap}
                    >

                    </Select>
                </Form.Item>
                <Form.Item label="Rạp">
                    <Select style={{
                        width: 200,
                    }}
                        onChange={handleChangeRap}
                        options={listCumRapTheoHeThong}
                    >
                    </Select>
                    {formik.touched.maRap && formik.errors.maRap && <div className='text-red-500'>{formik.errors.maRap}</div>}
                </Form.Item>
                {/* <Form.Item label="Mã Rạp">
                    <Select style={{
                        width: 200,
                    }}

                        onChange={handlechangeMaRap}
                        options={listMaRap}
                    >
                    </Select>
                    {formik.touched.maRap && formik.errors.maRap && <div className='text-red-500'>{formik.errors.maRap}</div>}
                </Form.Item> */}
                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChange} />
                    {formik.touched.ngayChieuGioChieu && formik.errors.ngayChieuGioChieu && <div className='text-red-500'>{formik.errors.ngayChieuGioChieu}</div>}
                </Form.Item>
                <Form.Item label="giá vé">
                    <InputNumber onChange={(value, e) => { formik.setFieldValue("giaVe", value) }} min={75000} max={150000} />
                    {formik.touched.giaVe && formik.errors.giaVe && <div className='text-red-500'>{formik.errors.giaVe}</div>}
                </Form.Item>
                <Form.Item label="Button">
                    <Button htmlType='submit'>Tạo lịch chiếu</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
