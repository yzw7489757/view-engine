import React from 'react';
import './Sider.less';

const Sider:React.SFC<any> = function Sider({title}) {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/" className="simple-text logo-normal">
         {title || 'Development'}
        </a>
      </div>
      <div className="sidebar-wrapper" >
        <ul className="nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <i className="nav-icon">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">library_books</i>
              <p>Typography</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">location_ons</i>
              <p>Maps</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <i className="nav-icon">language</i>
              <p>RTL Support</p>
            </a>
          </li>
          <li className="nav-item active-pro ">
            <a className="nav-link" href="/">
              <i className="nav-icon">unarchive</i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-background"/>
    </div>
  )
} 

export default Sider