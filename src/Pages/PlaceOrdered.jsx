import React from 'react';
import '../Pages/PlaceOrdered.css';
import { IoIosArrowBack } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';

function PlaceOrdered() {

  const [placeOrdered, setplaceOrdered] = useState(false);

  const handlePlaceOrderToggle = () => {
    setplaceOrdered(!placeOrdered)
  }

  return (
    <div className='main-container'>
      <div className="main-wrapper">
      
    <nav className='nav-header-container'>
      <div className="nav-menus-and-header-wrapper">
        <div className="arrow-back">        
          <IoIosArrowBack />
        </div>
        <h1>Order Summary</h1>
      </div>
        <div className="cart-btn-container">
          <div className='menu-icon' />
        </div>
    </nav>

    <section>

      <div className="delivery-address-card-container">
        <div className="cards-wrapper">
          <div className="cards-contents">
            <h5>Arthur John Philipps</h5>
            <p>+63 912 345 6789</p>
            <p>artianz225@gmail.com</p>
          </div>
          <HiDotsVertical className='gold-font' />
        </div>
      </div>

      <div className="delivery-address-card-container">
        <div className="cards-wrapper">
          <div className="cards-contents">
            <div className="card-header-wrapper">
            <h5>My Home Address</h5>
            <input type="radio" name="" id="" className='radio-btn'/>
            </div>
            <p className='address-container'>No. 21 St. Agustin St, Brgy. De Jose Delgado City 1234 Philippines</p>
          </div>
          <HiDotsVertical className='gold-font' />
        </div>
      </div>

      <div className="delivery-address-card-container">
        <div className="cards-wrapper">
          <div className="cards-contents">
            <div className="card-header-wrapper">
            <h5>Work/Office</h5>
            <input type="radio" name="" id="" className='radio-btn'/>
            </div>
            <p className='address-container'>3rd flr Anyeong Bldg. Seareal St. Juaquin City 3456 Philippines</p>
          </div>
          <HiDotsVertical className='gold-font' />
        </div>
      </div>

    </section>

    <section>
      <div className="ordered-details-container">
        <h2>Orders</h2>

        <div className="ordered-cards-wrapper">
          <div className="ordered-cards-contents">

            <div className="ordered-img-and-break-down-container">
            <div className="order-img-wrapper">
              <img src="https://pngimg.com/d/breakfast_PNG24.png" alt="" />
            </div>
            <div className="ordered-break-down-wrapper">
              <h5>Steak Fries Veggies</h5>
              <p>1x Tomato Sauce</p>
              <p>1x Regular Coke</p>
              <p>1x Fried Chicken</p>
            </div>
            </div>

          <div className="check-out-price-and-quantity-container">
            <h3>P 185</h3>
            <div className="check-out-btns-wrapper">
              <button className='check-out-operator'>-</button>
              <p className='check-out-quantity-value'>1</p>
              <button className='check-out-operator'>+</button>
            </div>
          </div>

          </div>
          <HiDotsVertical className='gold-font' />
        </div>
      </div>
    </section>

    <section>
      <div className="payment-order-container">
        <h2>Payment Option</h2>

        <div className="payment-order-cards-wrapper">
          <h5>Cash on Delivery</h5>
          <p>Pay when you received the order</p>
          <input className='payment-order-radio-btn' type="radio" name="" id="" />
        </div>

        <div className="payment-order-cards-wrapper">
          <h5>Loyalty Points <span>(0 points)</span></h5>
          <p>Pay using your earned loyalty points</p>
          <input className='payment-order-radio-btn' type="radio" name="" id="" />
        </div>

        <div className="payment-order-cards-wrapper">
          <img className='payment-order-paypal-logo' src="https://logolook.net/wp-content/uploads/2023/09/PayPal-Logo-2014.png" alt="" />
          <p className='paypal-paragraph'>A new tab will open to access your account</p>
          <input className='payment-order-radio-btn' type="radio" name="" id="" />
        </div>

        <div className="payment-order-cards-wrapper">
          <img className='payment-order-paynamics-logo' src="https://www.paynamics.com/logos/paynamics_rgb.png" alt="" />
          <p className='paynamics-paragraph'>Choose paynamics services available from you</p>
          <input className='payment-order-radio-btn' type="radio" name="" id="" />
        </div>

      </div>
    </section>

    <section>
      <div className="sub-total-and-deliver-charges-container">
        <div className="subtotal-wrapper">
          <h3>Subtotal</h3>
          <h3>P 185</h3>
        </div>
        <div className="delivery-wrapper">
          <h3>Delivery Charges</h3>
          <h3>P 59</h3>
        </div>

        <div className="change-details-container">
          <input type="text" placeholder='e.g. 1,000'/>
          <p className='change-details'>Change for</p>
        </div>

      </div>
    </section>
    
    <section>
      <div className={placeOrdered ? 'place-ordered-modal-container-on' : 'place-ordered-modal-container-off'}>
        <div className="img-and-contents-wrapper">
        <img src="https://cdn1.iconfinder.com/data/icons/human-resources-1-6/128/41-512.png" alt="" />
        <h2>Order Received!</h2>
        <p>Your order <span>No. 19049585</span> has been Successfully take and now being processed. Kindly wait for our notification regarding your order.</p>
      </div>
      <div className="place-ordered-btns-wrapper">
        <button>Track Order</button>
        <p>Back to Home</p>
      </div>
      </div>
    </section>

    <footer>
      <div className="footer-grand-total-and-place-order-container">
        <div className="grand-total-wrapper">
          <p>Grand Total</p>
          <h3>P 244</h3>
        </div>
        <div className="place-order-btn-wrapper">
          <button onClick={handlePlaceOrderToggle}>Place Order</button>
        </div>
      </div>
    </footer>

    </div>
    </div>
  )
}

export default PlaceOrdered
