import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import './index.css'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from '../../assets/image/OGMS.png'
// const { SubMenu } = Menu;
const { Header } = Layout;

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header">
            <img className="logo" src={logo}/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Operation</Menu.Item>
              <Menu.Item key="2">Project</Menu.Item>
              <Menu.Item key="3" style={{marginRight:'1000px'}}>Help</Menu.Item>              
              <Menu.Item key="4">Login</Menu.Item>
              <Menu.Item key="5">Register</Menu.Item>
            </Menu>
            {/* <Menu theme="dark" mode="horizontal">
              
            </Menu> */}
          </Header>
        </Layout>
      </div>
    );
  }
}
