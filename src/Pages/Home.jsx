import React, { useState } from 'react';
import '../Pages/Home.css';
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Sidebar from '../Components/Sidebar';
import MainMenus from './MainMenus';

function Home({toggleSidebar, hanleToggleSideBar}) {

  const [slideRight, setSlideRight] = useState(false);
  
  const toggleSlideRight = () => {
    setSlideRight(!slideRight);
  }


  return (
    <div className='main-container-on'>
      <div className={toggleSidebar ? 'main-wrapper-on' : 'main-wrapper-off'}>

        <div className={slideRight ? 'slide-right-on' : 'slide-right-off'}>
        <MainMenus toggleSidebar={toggleSidebar} hanleToggleSideBar={hanleToggleSideBar}/>
        </div>

      <Sidebar toggleSidebar={toggleSidebar} />

      <div onClick={hanleToggleSideBar} className={toggleSidebar ? 'black-wrapper-on' : 'black-wrapper-off'}></div> 
      
      <nav className='nav-header-container'>
        <div className="nav-menus-and-header-wrapper">
          <TiThMenuOutline className='menu-icon' onClick={hanleToggleSideBar}/>
          <div className="crown-contents-and-image-main-container">
          <div className="home-crown-and-contents">
            <img src="https://st4.depositphotos.com/7752738/39057/v/450/depositphotos_390570356-stock-illustration-crown-king-royal-geometric-icon.jpg" alt="" />
            <p>0 Points <span><MdOutlineKeyboardArrowRight /></span></p>
          </div>
            <img className="profile-image-container" src="https://media.licdn.com/dms/image/C4E03AQHSfCujAQ09CQ/profile-displayphoto-shrink_800_800/0/1570108788491?e=2147483647&v=beta&t=rYlvXweYwVGeal8qu674F7hEwx39csGC7LkTVsVysic" alt="" />
          </div>
        </div>
      </nav>

      <section>
        <div className="home-section-container">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf55c062-fa46-40f9-a65f-0021c9868e59/d5ohls0-d643dd14-18f4-4a3c-85e8-ddedfb891964.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmNTVjMDYyLWZhNDYtNDBmOS1hNjVmLTAwMjFjOTg2OGU1OVwvZDVvaGxzMC1kNjQzZGQxNC0xOGY0LTRhM2MtODVlOC1kZGVkZmI4OTE5NjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Vtq1gZrRv0N9H9en0DBMyllo5B2UURbCzVyBfIUHUHY" alt="" />
          <div className="home-section-contents">
            <p>Anneoyong, Chou!</p>
            <h1>What do you want to eat?</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="home-search-container">
          <div className="search-wrapper">
            <div className='home-search-icon'>
            <IoSearch />
            </div>
            <input className='home-search-input' type="search" placeholder='try our new Steak Fries Veggies'/>
          </div>
        </div>
      </section>

      <section>
        <div className="special-offer-header-container">
          <h3>Special Offers!</h3>
          <p>View All <MdOutlineKeyboardArrowRight /></p>
        </div>

        <div className="special-offer-coupon-container">
          <div className="coupon-wrapper">
          <img src="https://i.pinimg.com/736x/2b/c1/b3/2bc1b327a98651ba24e68aaed5eb5a68.jpg" alt="" />
          <div className="coupon-dot-separator-left"></div>
          <div className="coupon-dot-separator-right"></div>
          </div>

          <div className="coupon-wrapper">
          <img src="https://i.pinimg.com/736x/2b/c1/b3/2bc1b327a98651ba24e68aaed5eb5a68.jpg" alt="" />
          <div className="coupon-dot-separator-left"></div>
          <div className="coupon-dot-separator-right"></div>
          </div>

        </div>    
      </section>

      <section>
        <div className="category-container">
          <div className="category-header">
            <h3>Category</h3>
          </div>

          <div className="category-images-container">

            <div className="category-images-wrapper">
              <img src="https://simply-delicious-food.com/wp-content/uploads/2016/07/Easy-Tuscan-roast-chicken.jpg" alt="" />
              <div className="categgory-text-contents">
              <h3>Chicken</h3>
              <p>9 Recipes</p>
              </div>
              <div className="img-overlay-background">
              </div>
            </div>

            <div className="category-images-wrapper">
              <img src="https://st3.depositphotos.com/1194063/15070/i/450/depositphotos_150709732-stock-photo-fresh-fish-and-seafood.jpg" alt="" />
              <div className="categgory-text-contents">
              <h3>Seafoods</h3>
              <p>6 Recipes</p>
              </div>
              <div className="img-overlay-background">
              </div>
            </div>

            <div className="category-images-wrapper">
              <img src="https://simply-delicious-food.com/wp-content/uploads/2016/07/Easy-Tuscan-roast-chicken.jpg" alt="" />
              <div className="categgory-text-contents">
              <h3>Pork</h3>
              <p>12 Recipes</p>
              </div>
              <div className="img-overlay-background">
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
          <div className="Whats-new-header">
            <h3>What's New?</h3>
          </div>

          <div className="whats-new-contents-container">
          <div className="whats-new-image-wrapper">
            <img src="https://res.cloudinary.com/https-highape-com/image/upload/q_auto:eco,f_auto,h_380/v1644219613/ohrwn9rp4svxuyom6pdg.png" alt="" />
          </div>
          </div>

      </section>

      <section>
          <div className="most-popular-header">
            <h3>Most Popular</h3>
          </div>

          <div className="main-menu-container">

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
      </div>
      </section>

      <button onClick={toggleSlideRight} className='order-now-btn'>Order Now!</button>
    </div>
  </div>
  )
}

export default Home
