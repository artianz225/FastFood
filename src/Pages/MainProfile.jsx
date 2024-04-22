import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../Pages/MainProfile.css';

function MainProfile() {
  return (
    <div className='main-container'>
      <div className="main-wrapper">

    <nav className='nav-header-container'>
      <div className="nav-menus-and-header-wrapper">
        <TiThMenuOutline className='menu-icon'/>
        <h1>Loyalty Points</h1>
      </div>
        {/* <div className="cart-btn-container">
          <LuShoppingBag className='menu-icon' />
        </div> */}
    </nav>

    <section>
      <div className="section-one-header">
        <div className="crown-tittle-contents-wrapper">
        <div className="crown-and-tittle">
        <img className='crown' src="https://st4.depositphotos.com/7752738/39057/v/450/depositphotos_390570356-stock-illustration-crown-king-royal-geometric-icon.jpg" alt="" />
        <h3>Begginer Tier</h3>
        </div>
        <p>View All <MdOutlineKeyboardArrowRight /></p>
        </div>
        <p>Earn point by purchasing from our store. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>

    <section>
      <div className="section-two-points-bar-container">
        <div className="points-bar">
          <h1>0 / 160</h1>
        </div>
      </div>
    </section>

    <section>
      <div className="section-three-contents-container">
        <h2>Rewards</h2>
        <p>How it Works <MdOutlineKeyboardArrowRight /></p>
      </div>      
    </section>

    <section>
      <div className="section-four-btns-container">
        <button className='active'>All</button>
        <button>Begginer</button>
        <button>Intermediate</button>
        <button>Loyal</button>
      </div>
    </section>

    <section>
      <div className="list-rewards-points">

        <div className="rewards-cards-container">
          <img src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
          <div className="section-five-menu-contents">
          <h4>Arthur Steak</h4>
          <p>Meat</p>
          <div className="section-five-rewards-contents-wrapper">
          <img className='crown' src="https://st4.depositphotos.com/7752738/39057/v/450/depositphotos_390570356-stock-illustration-crown-king-royal-geometric-icon.jpg" alt="" />
          <p>27 points</p>
          </div>
          </div>
        </div>

      </div>
    </section>
      
    </div>
  </div>
  )
}

export default MainProfile
