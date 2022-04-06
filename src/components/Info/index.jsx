import React, { Component } from 'react'
import { Card,Button } from 'antd';
import './index.css'
import {

  SelectOutlined,
} from '@ant-design/icons';
export default class Info extends Component {
  render() {
    return (
      <div>
        <div className='content'>
          <div className='leftContent'>
            <Card>              
              <SelectOutlined style={{float: 'left',margin: '10px'}}/>
              <h2 style={{position:'absolute', left:'60px'}}>耦合模型选择区</h2>
              <Button type='primary' style={{position:'absolute', left:'250px'}}>模型选择</Button>
            </Card>
          </div>
          <div className='rightContent'>
            <Card>
              <h2>模型模块化耦合控制区</h2>
              <Button type='primary'>模型选择</Button>
            </Card>
          </div>
          </div>
      </div>
    )
  }
}
