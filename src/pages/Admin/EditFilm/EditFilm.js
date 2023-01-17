
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { capNhatPhimUpload, layThongTinPhimAction } from '../../../redux/action/QuanLyPhimAction';
import * as Yup from 'yup';
import * as dayjs from 'dayjs'

export default function EditFilm(props) {
  const dispatch = useDispatch();

  let { layThongTinPhim } = useSelector(state => state.QuanLyPhimReducer)
  const [componentSize, setComponentSize] = useState('default');
  const [img, setImg] = useState('')

  useEffect(() => {
    dispatch(layThongTinPhimAction(props.match.params.id))
  }, [])

  useEffect(() => {
    setImg(layThongTinPhim?.hinhAnh)
  }, [layThongTinPhim])
  const display = img !== '' ? '' : 'hidden'
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
    {
      maphim: layThongTinPhim?.maPhim,
      maNhom:layThongTinPhim?.maNhom,
      tenPhim: layThongTinPhim?.tenPhim,
      trailer: layThongTinPhim?.trailer,
      moTa: layThongTinPhim?.moTa,
      ngayKhoiChieu: layThongTinPhim?.ngayKhoiChieu,
      dangChieu: layThongTinPhim?.dangChieu,
      sapChieu: layThongTinPhim?.sapChieu,
      hot: layThongTinPhim?.hot,
      danhGia: layThongTinPhim?.danhGia,
      hinhAnh: null
    }
    ,

    validationSchema: Yup.object().shape({
      tenPhim: Yup.string()
        .required('Required'),
      moTa: Yup.string()
        .required('Required'),
      ngayKhoiChieu: Yup.string().required('Required'),
      danhGia: Yup.number().required('Required'),

    }),

    onSubmit: values => {
      
      let formdata = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formdata.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formdata.append('File', values.hinhAnh, values.hinhAnh.name);   
          }
        }
      }
      dispatch(capNhatPhimUpload(formdata))
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
        <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
        {formik.touched.tenPhim && formik.errors.tenPhim && <div className='text-red-500'>{formik.errors.tenPhim}</div>}
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
        {formik.touched.moTa && formik.errors.moTa && <div className='text-red-500'>{formik.errors.moTa}</div>}
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker defaultValue={dayjs(moment(formik.values.ngayKhoiChieu).format("YYYY-MM-DD"))} format={"DD-MM-YYYY"} onChange={(handleChangeDatepicker)} />
        {formik.touched.ngayKhoiChieu && formik.errors.ngayKhoiChieu && <div className='text-red-500'>{formik.errors.ngayKhoiChieu}</div>}
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch onChange={(value, e) => { formik.setFieldValue("dangChieu", value) }} checked={formik.values.dangChieu} />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch onChange={(value, e) => { formik.setFieldValue("sapChieu", value) }} checked={formik.values.sapChieu} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={(value, e) => { formik.setFieldValue("hot", value) }} checked={formik.values.hot} />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber onChange={(value, e) => { formik.setFieldValue("danhGia", value) }} min={1} max={10} value={formik.values.danhGia} />
        {formik.touched.danhGia && formik.errors.danhGia && <div className='text-red-500'>{formik.errors.danhGia}</div>}
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <input type="file" onChange={handleChangeUpload} accept="image/png, image/jpeg,image/gif,image/png" >
        </input>
        <img style={{ width: 80, height: 120 }} className={`mt-4 ${display}`} src={img} alt='123' />
      </Form.Item>
      <Form.Item className='ml-36'>
        <Button htmlType="submit" className='bg-green-600 '>Cập nhật</Button>
      </Form.Item>
    </Form>
  )
}
