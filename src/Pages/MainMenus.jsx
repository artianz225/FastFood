import React, { useState } from 'react'
import '../Pages/MainMenus.css';
import { TiThMenuOutline } from "react-icons/ti";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Sidebar from '../Components/Sidebar';
import PlaceOrdered from '../Pages/PlaceOrdered';
import CheckOut from './CheckOut';

function MainMenus({toggleSidebar, hanleToggleSideBar}) {

  const [placeOrdered, setPlaceOrdered] = useState(false);

  const togglePlaceOrdered = () => {
    setPlaceOrdered(!placeOrdered)
  }


  return (
    <div className='main-container-on'>
      <div className={toggleSidebar ? 'main-wrapper-on' : 'main-wrapper-off'}>

        <div className={placeOrdered ? 'place-order-toggle-on' : 'place-order-toggle-off'}>
          <CheckOut />
        </div>

      <Sidebar toggleSidebar={toggleSidebar} />

      <nav className='nav-header-container'>
        <div className="nav-menus-and-header-wrapper">
          <TiThMenuOutline className='menu-icon' onClick={hanleToggleSideBar}/>
          <h1>Main Menus</h1>
        </div>
          <div className="cart-btn-container">
            <LuShoppingBag className='menu-icon' />
          </div>
      </nav>

      <div className="search-bar-container">
        <div className="serach-bar-icon-search">
        <IoSearch />
        </div>
        <input type="search" placeholder='Try our new Chicker Ala Arthur'/>
        <div className="serach-bar-icon-adjust">
        <TbAdjustmentsHorizontal />
        </div>
      </div>

      <div className="menus-category">
        <button className='active'>All</button>
        <button className='inactive'>Breakfast</button>
        <button className='inactive'>Chinken</button>
        <button className='inactive'>Seafood</button>
        <button className='inactive'>Meat</button>
      </div>

      <div className="main-menu-container">

        <div className="menu-wrapper" onClick={togglePlaceOrdered}>
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Arthur Steak</h4>
          <p>Meat</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 100</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            </div>
          </div>          
        </div>
        
        <div className="menu-wrapper">
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG8.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Diane Steak</h4>
          <p>Chicken</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 175</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStarHalfAlt className='bg-black'/></p>
            </div>
          </div>          
        </div>
        
        <div className="menu-wrapper">
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG8.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Diane Steak</h4>
          <p>Chicken</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 175</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStarHalfAlt /></p>
            <p><FaRegStar /></p>
            </div>
          </div>          
        </div>

        <div className="menu-wrapper">
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Arthur Steak</h4>
          <p>Meat</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 100</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            </div>
          </div>          
        </div>
        
        <div className="menu-wrapper">
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Arthur Steak</h4>
          <p>Meat</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 100</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStarHalfAlt /></p>
            <p><FaRegStar /></p>
            </div>
          </div>          
        </div>
        
        <div className="menu-wrapper">
          <img className='menu-image' src="https://pngimg.com/d/breakfast_PNG8.png" alt="" />
          <div className="meal-tittle-and-category-container">
          <h4>Diane Steak</h4>
          <p>Chicken</p>
          </div>
          <div className="price-and-rating-container">
            <div className="meal-price">
            <h3>P 175</h3>
            </div>
            <div className="meal-rating">
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStar /></p>
            <p><FaStarHalfAlt /></p>
            <p><FaRegStar /></p>
            </div>
          </div>          
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default MainMenus
