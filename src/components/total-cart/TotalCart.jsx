import React from 'react';
import "./TotalCart.css";
import { Link } from 'react-router-dom';

export default function TotalCart({totalSum}) {
  return (
    <div className='total-cart'>
        <div className='total-container'>
            <h3 className='total-heading'>Итого</h3>
            <span className="total-sum">₽&nbsp;{totalSum()}</span>
        </div>
        <Link to="/" className='total-button'>Перейти к оформлению</Link>
    </div>
  )
}
