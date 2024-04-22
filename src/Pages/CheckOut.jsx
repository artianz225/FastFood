import React, { useState } from 'react'
import '../Pages/CheckOut.css';
import { IoIosArrowBack } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function CheckOut() {

  const [quantity, setQuantity] = useState(1);
  const [favHeartIsClick, setFavHeartIsClick] = useState(false);
  const [disableMinusBtn, setDisableMinusBtn] = useState(true);
  const [disableAddBtn, setDisableAddBtn] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModalOpen = () => {
    setToggleModal(!toggleModal);
  }

  const handleCheckItem = () => {}

  const toggleFavHeart = () => {
    setFavHeartIsClick(!favHeartIsClick);
  }

  const handleMinusQuantity = () => {
    setQuantity(prev => prev -1);

    if (quantity <= 2) {
      setDisableMinusBtn(true);
    }

    if (quantity <= 10) {
      setDisableAddBtn(false);
    }
  }

  const handleAddQuantity = () => {
    setQuantity(prev => prev +1);

    if (quantity >= 1) {
      setDisableMinusBtn(false);
    }

    if (quantity >= 9) {
      setDisableAddBtn(true);
    }
  }

  return (
    <div className='main-container'>
      <div className="main-wrapper">

    <nav className='nav-header-container'>
      <div className="nav-menus-and-header-wrapper">
        <div className="arrow-back">        
          <IoIosArrowBack />
        </div>
        <h1>Meat</h1>
      </div>
        <div className="cart-btn-container">
          <LuShoppingBag className='menu-icon' />
        </div>
    </nav>

    <section>
      <div className="added-to-cart-menu">
        <div className="menu-image-wrapper">
          <img src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
          <div onClick={toggleFavHeart} className="heart-wrapper">
            {favHeartIsClick ? <FaHeart /> : <FaRegHeart /> }
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="added-to-cart-descriptions">
        <h4>Steak Fries Vegies</h4>
        <div className="meal-rating">
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
          <p><FaStar /></p>
        </div>
        <p className='menu-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>

    <section>
      <div className="added-to-cart-price-and-quantity-container">
        <h1>P 175</h1>
        <div className="quantity-btns-wrapper">
          <button className='quantity-operator'onClick={handleMinusQuantity} disabled={disableMinusBtn}>-</button>
          <p className='quantity-value'>{quantity}</p>
          <button className='quantity-operator' onClick={handleAddQuantity} disabled={disableAddBtn}>+</button>
        </div>
      </div>
    </section>

    <section>
      <div className="add-ons-container">
        <div className="add-ons-header">
          <h3>Beverages</h3>
          <div className="add-ons-options-wrapper">
            <p>Choose Beverages</p>
            <select name="add-ons" id="add-ons">
              <option value="coke">Coke</option>
              <option value="sprite">Sprite</option>
              <option value="royal">Royal</option>
            </select>
            <IoIosArrowDown className='select-arrow' />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="add-ons-btn-sizes-container">
        <button className='add-ons-active'>Regular</button>
        <button>Large</button>
        <button>X-Large</button>
      </div>
    </section>

    <section>
      <div className="add-ons-menus-container">
        <div className="add-ons-menu-header">
        <h3>Add-Ons</h3>
        </div>

        <div className="add-ons-card-container">
          <img src="https://static.vecteezy.com/system/resources/previews/033/225/966/original/tomato-sauce-isolated-on-background-png.png" alt="" />
          <div className="add-ons-contents">
          <div className="add-ons-tittle-and-checkbox-wrapper">
            <h3>Tomato Sauce</h3>
            <input className='add-ons-checkbox-style' type="checkbox" name="bla" id="bla" checked onChange={handleCheckItem}/>
          </div>
          <p className='add-ons-type'>Sauce</p>
          <div className="add-ons-price-and-quantity-container">
            <h3>P 49</h3>
            <div className="add-ons-btns-wrapper">
              <button className='add-ons-operator'onClick={handleMinusQuantity} disabled={disableMinusBtn}>-</button>
              <p className='add-ons-quantity-value'>{quantity}</p>
              <button className='add-ons-operator' onClick={handleAddQuantity} disabled={disableAddBtn}>+</button>
            </div>
          </div>
          </div>
        </div>

        <div className="add-ons-card-container">
          <img src="https://pngimg.com/d/rice_PNG11.png" alt="" />
          <div className="add-ons-contents">
          <div className="add-ons-tittle-and-checkbox-wrapper">
            <h3>White Rice</h3>
            <input className='add-ons-checkbox-style' type="checkbox" name="vla" id="vla" onChange={handleCheckItem}/>
          </div>
          <p className='add-ons-type'>Rice</p>
          <div className="add-ons-price-and-quantity-container">
            <h3>P 25</h3>
            <div className="add-ons-btns-wrapper">
              <button className='add-ons-operator'onClick={handleMinusQuantity} disabled={disableMinusBtn}>-</button>
              <p className='add-ons-quantity-value'>{quantity}</p>
              <button className='add-ons-operator' onClick={handleAddQuantity} disabled={disableAddBtn}>+</button>
            </div>
          </div>
          </div>
        </div>

    </div>
    </section>

    <section>
      <div className={toggleModal ? 'check-out-modal-container' : 'check-out-modal-container-disable'}>
        <div className="modal-confirmation-wrapper">
          <img src="https://cdn1.iconfinder.com/data/icons/human-resources-1-6/128/41-512.png" alt="" />
          <h4>Successfully Added!</h4>
          <p className='modal-question'>What do you want to do now?</p>
          <button className='check-out-btn'>Proceed to Checkout</button>
          <p className='check-out-add-more-btn'>Add More</p>
        </div>

      </div>
    </section>

    <button onClick={handleToggleModalOpen} className='add-to-bag-btn'>Add to Bag</button>
      
    </div>
  </div>
  )
}

export default CheckOut
