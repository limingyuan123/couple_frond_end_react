import React, { Component } from 'react'
import Info from './components/Info'
// import Navbar from './components/Navbar'
import LeftMenu from './components/LeftMenu'
import Navbar from './components/Navbar'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>       
          <div className='container'>
            <div className='leftMenu'>
                <LeftMenu/>
            </div>
            <div  className='info'>
                <Info/>
            </div>
          </div>   
      </div>
    )
  }
}