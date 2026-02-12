import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";
import { useComponentDidMount } from '../../hooks/useComponentDidMount';
import rateIcon from "../../assets/rate.svg";

export default function Product({id, img, title, cost, costBefore, rate, setTotalQuantityInCart}) {
    const [count, setCount] = useState(+sessionStorage.getItem(id));
    const isComponentMounted = useComponentDidMount();

    const addToCart = () => {
        setCount(prev => prev + 1);
        setTotalQuantityInCart(prev => prev + 1);
    };

    useEffect(()=>{
        if(isComponentMounted){
            sessionStorage.setItem("" + id, count);
        }
    }, [count]);

    return (
        <div className='product-item'>
            <div className="product-img">
                <img className="product-picture" src={img} alt="product img"/>
            </div>
            <div className="product-info">
                <div className="heading-cost">
                    <Link to = "/product" className="product-heading">{title}</Link>
                    <div className='cost-group'>
                        <span className="product-cost">{cost}&nbsp;₽</span>
                        {costBefore&&<span className="product-cost--before">{costBefore}&nbsp;₽</span>}
                    </div>
                        
                    </div>
                    <div className="rate-buy">
                        <div className='rate'>
                            <img className="rate-icon" src={rateIcon} alt="rate"/>
                            <span className="rate-value">{rate}</span>
                        </div>
                        <button onClick={addToCart} className="product-heading">
                            Купить
                        </button>
                    </div>
            </div>   
        </div>
    )
}
