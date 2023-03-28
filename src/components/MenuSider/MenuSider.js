import React from 'react'
import "./ManuSider.scss";
import {UserOutlined, AppstoreAddOutlined} from "@ant-design/icons";
import { useLocation, useNavigate } from 'react-router-dom';
import {Layout, Menu} from "antd";


export const MenuSider = (props) => {
    const {Sider} = Layout;
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        {
            key:"/admin/users",
            icon:<UserOutlined />,
            label: <span className='nav-text'>Users</span>
        },
        {
            key:"/admin/products",
            icon:<AppstoreAddOutlined />,
            label: <span className='nav-text'>Products</span>
        }
    ]
    const menuClick = (e) => {
        const path = e.key;
        console.log("De click en el item del menu " + path);
        navigate(path);
    };
    return (
        <Sider className='menu-sider' collapsed = {props.menuCollapsed}>
            <Menu  
                mode='inline' 
                defaultSelectedKeys={[location.pathname]}
                items={menuItems}
            ></Menu>
        </Sider>
    )
}

