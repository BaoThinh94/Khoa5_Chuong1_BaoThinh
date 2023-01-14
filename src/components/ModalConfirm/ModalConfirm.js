import React, { Fragment } from 'react'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import './ModalConfirm.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL_CONFIRM, OPEN_MODAL_CONFIRM } from '../../redux/types/ModalConfirmType';
const { confirm } = Modal;

export default function ModalConfirm() {

    const {open,button} = useSelector(state => state.ModalConfirmReducer);
    const dispatch= useDispatch()

    return <div>
        <Modal
            className='modalConfirm'
            open={open}
            onOk={button}
            onCancel={() => { dispatch({
                type:CLOSE_MODAL_CONFIRM
            })}}
            okText="Ok"
            cancelText="Cancle"
        >
            <p>Bạn có muốn thực hiện tác vụ này ?</p>
        </Modal>
    </div>

}

