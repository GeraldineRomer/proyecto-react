/* components > layauts > pages > routes */
import Layout from 'antd/es/layout/layout'
import React, {useState} from 'react'
import { MenuSider } from '../components/MenuSider/MenuSider';

export const LayoutGeneral = (props) => {
    const {children} = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
  return (
    <Layout>
        <MenuSider menuCollapsed = {menuCollapsed}/>
        <h1>Navbar</h1>
        <h3>Content</h3>
        <h2>Footer</h2>
        {children}
    </Layout>
  )
}

