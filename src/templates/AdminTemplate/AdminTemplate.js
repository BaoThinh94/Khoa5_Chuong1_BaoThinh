import { NavLink, Redirect, Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { USER_LOG } from "../../util/settings/config";
const { Header, Content, Footer, Sider } = Layout


const NavTop = (props) => {
    const { userLog } = useSelector(state => state.QuanLyNguoiDungReducer)
    return <div className='hover:text-violet-400 flex justify-end items-center cursor-pointer'>Chào {userLog.hoTen} <img className='ml-3 rounded-full' src='https://picsum.photos/50/50' /></div>
}


export const AdminTemplate = (props) => {


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const userLog = JSON.parse(localStorage.getItem(USER_LOG))

    if (userLog?.maLoaiNguoiDung !== "QuanTri" || userLog === 'undefined') {
        alert("Bạn không có quyền truy cập trang này")
        return <Redirect
            to={{
                pathname: '/home'
            }} />
    }

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
                            label: <NavLink to="/admin" >Admin</NavLink>,
                        },{
                            key: String(2),
                            icon: React.createElement(UploadOutlined),
                            label: <NavLink to="/admin/addfilm">Add Film</NavLink>,
                        }
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