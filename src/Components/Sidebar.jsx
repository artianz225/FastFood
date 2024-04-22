import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../Components/Sidebar.css';

import { GiFoodChain } from "react-icons/gi";
import { GiChickenLeg } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { IoStorefront } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiHistoryLine } from "react-icons/ri";

function Sidebar( {toggleSidebar} ) {

  return (
    <div className={toggleSidebar ? 'sliding-bar-on' : 'sliding-bar-off'}>
        
        <div className="sidebar-profile-wrapper">
        <img className='sidebar-profile-img' src="https://media.licdn.com/dms/image/C4E03AQHSfCujAQ09CQ/profile-displayphoto-shrink_800_800/0/1570108788491?e=2147483647&v=beta&t=rYlvXweYwVGeal8qu674F7hEwx39csGC7LkTVsVysic" alt="" />
        <img className='sidebar-crown-img' src="https://st4.depositphotos.com/7752738/39057/v/450/depositphotos_390570356-stock-illustration-crown-king-royal-geometric-icon.jpg" alt="" />
        <p>0 Points</p>
        <span><MdOutlineKeyboardArrowRight /></span>
        </div>

        <div className="sidebar-profile-info">
          <h2>Arthur John Philipps Epiz</h2>
          <p>+63 912 345 6789</p>
        </div>

      <div className="sidebar-links-one">
        <ul>
          <li><div className='icon-link'><GiFoodChain className='icon' />Home</div></li>
          <li><div className='icon-link'><GiChickenLeg className='icon' />Order Now!</div></li>
          <li><div className='icon-link'><IoNotifications className='icon' />Notificatiobs</div><div className='notif-msg'>4</div></li>
          <li><div className='icon-link'><FaLocationDot className='icon' />Store Locator</div></li>
          <li><div className='icon-link'><FaQuestionCircle className='icon' />FAQ's</div></li>
        </ul>
      </div>

      <div className="sidebar-links-two">
        <ul>
          <li><div className='icon-link'><RiShoppingBag3Fill className='icon' />My Order</div><div className='notif-msg'>2</div></li>
          <li><div className='icon-link'><MdAccountCircle className='icon' />My Account</div></li>
          <li><div className='icon-link'><FaHeart className='icon' />My Favorites</div></li>
          <li><div className='icon-link'><IoStorefront className='icon' />Order Tracker</div></li>
          <li><div className='icon-link'><RiHistoryLine className='icon' />Order History</div></li>
        </ul>
      </div>

      <button className='sidebar-logout-btn'>Logout</button>

      </div>
  )
}

export default Sidebar
