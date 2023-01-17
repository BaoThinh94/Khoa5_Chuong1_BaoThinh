import { NavLink, Redirect, Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { CaretDownOutlined, UploadOutlined, UserAddOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Dropdown, Layout, Menu, theme } from 'antd';
import { USER_LOG } from "../../util/settings/config";
const { Header, Content, Footer, Sider } = Layout



const NavTop = (props) => {
    const { userLog } = useSelector(state => state.QuanLyNguoiDungReducer)
    const displayAdmin = userLog?.maLoaiNguoiDung == "QuanTri" ? '' : 'hidden'
    const items = [
        {
            key: '1',
            label: (
                <NavLink className={`${displayAdmin} `} to="/admin">
                    Trang Admin
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink to="/home" onClick={() => {
                    localStorage.clear()
                }}>
                    Đăng Xuất
                </NavLink>
            ),
        },
    ];


    return <div className='hover:text-violet-400 flex ml-10 justify-end items-center cursor-pointer'>Chào {userLog.hoTen} <img className='ml-3 rounded-full' src='https://picsum.photos/50/50' alt="123" />
    <Dropdown
    menu={{
        items,
    }}
    placement="bottom"
    arrow
>
    <CaretDownOutlined className='ml-2 text-2xl font-bold'/>
</Dropdown></div>
}


export const UserInforTemplate = (props) => {


    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const { Component, ...restprops } = props
    return < Route  {...restprops} render={(propsRoute) => {
      
        return (
            <Layout className='min-h-screen'>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <NavLink to="/home" className="logo flex justify-center py-5 cursor-pointer " ><img className="rounded-full" src="https://picsum.photos/60/60" alt="123"/> </NavLink>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}

                        items={[{
                            key: String(1),
                            icon: React.createElement(UserOutlined),
                            label: <NavLink to="/userinfor/profile" >Thông tin cá nhân</NavLink>,
                        },{
                            key: String(2),
                            icon: React.createElement(VideoCameraOutlined),
                            label: <NavLink to="/userinfor/historycheckout">Lịch Sử Đặt vé</NavLink>,
                        },
                        ]
                        }
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: '0 24px',
                            background: colorBgContainer,

                        }}
                    >
                        <NavTop />

                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >

                    </Footer>
                </Layout>
            </Layout>
        );
    }} />
}