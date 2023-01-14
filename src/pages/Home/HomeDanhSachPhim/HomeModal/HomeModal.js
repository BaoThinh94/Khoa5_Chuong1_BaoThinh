import React, { PureComponent, useState } from 'react';
import { Button, Modal } from 'antd';
import { PlaySquareOutlined } from '@ant-design/icons';
import './HomeModal.css'
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_HOMEMODAL } from '../../../../redux/types/HomeModalType';


export default function HomeModal() {

    const dispatch = useDispatch();
    const { modalOpen, trailer, tenPhim } = useSelector(state => state.HomeModalReducer);
    console.log('modalOpen', modalOpen)
    return (
        <>
            <Modal
                centered
                open={modalOpen}
                onOk={() => dispatch({
                    type: CLOSE_HOMEMODAL
                })}
                onCancel={() => dispatch({
                    type: CLOSE_HOMEMODAL
                })}
                className='homemodal'
            >
                <iframe width="720" height="400" src="https://www.youtube.com/embed/-FmWuCgJmxo" title="VENOM: LET THERE BE CARNAGE - Official Trailer 2 (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                {/* <iframe width={1268} height={713} src={trailer} title="VENOM: LET THERE BE CARNAGE - Official Trailer 2 (HD)" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}

                {/* <iframe width="1268" height="713" src="https://www.youtube.com/embed/-FmWuCgJmxo" title="VENOM: LET THERE BE CARNAGE - Official Trailer 2 (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </Modal>
        </>
    )
}



