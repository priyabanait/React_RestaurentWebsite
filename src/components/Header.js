import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  return (
    <header>
        <div className="nav_box">
            <div className="my_shop" onClick={()=>props.handleCart(false)}>
                Sai Restaurant
            </div>
            <div className="cart" onClick={()=>props.handleCart(true)}>
                
                <span>
                    Your Cart <i className="fas fa-cart-plus"></i>
                </span>
                <span>{props.count}</span>
            </div>
        </div>
        
    </header>
  )
}

export default Header
