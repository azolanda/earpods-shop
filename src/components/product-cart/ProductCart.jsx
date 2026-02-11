import React, { useContext, useEffect, useState } from 'react';
import "./ProductCart.css";
import { Link } from 'react-router-dom';
import { useComponentDidMount } from '../../hooks/useComponentDidMount';
import { TotalQuantityInCartContext } from '../../context';

export default function ProductCart({id, img, imgCart, title, cost, costBefore, rate, quantity, setProductsTotalSum}) {
    const [count, setCount] = useState(quantity);
    const isComponentMounted = useComponentDidMount();
    const {totalQuantityInCart, setTotalQuantityInCart} = useContext(TotalQuantityInCartContext);
    const productTotalSum =  cost * count;

    useEffect(() => {
        setProductsTotalSum(prev => ({...prev, [id]: productTotalSum}));
    }, [productTotalSum]);

    useEffect(()=>{
         if(isComponentMounted){
            sessionStorage.setItem("" + id, count);
         }
    }, [count]);

    const decreaseQuantity = () => {
        if(count > 1) {
            setCount(prev => +prev - 1);
            setTotalQuantityInCart(prev => prev - 1);
        }
    }

    const increaseQuantity = () => {
        setCount(prev => +prev + 1);
        setTotalQuantityInCart(prev => prev + 1);
    };

    const deleteProductFromCart = () => {
        const deleteQuantity = sessionStorage.getItem('' + id);
        setCount(prev => +prev - deleteQuantity);
        setTotalQuantityInCart(prev => prev - deleteQuantity);
        setProductsTotalSum(prev => { 
            delete prev['' +id];
            return prev;
        });
        sessionStorage.removeItem("" + id);
    }

    return (
        <div className='cart-item'>
            <div className='cart-img-quantity-info'>
                <div className='cart-img-quantity'>
                    <div className="cart-img">
                        <img className="cart-picture" src={imgCart?`./src/assets/${imgCart}`:`./src/assets/${img}`} alt="product img"/>
                    </div>
                    <div className='cart-quantity'>
                        <button onClick={decreaseQuantity} className='change-quantity'>               
                            <svg className = "change-icon" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H14V2H0V0Z" fill="white"/>
                            </svg>
                        </button>
                        {count}
                        <button onClick={increaseQuantity} className='change-quantity'>
                            <svg className = "change-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="cart-info">
                    <Link to = "/product" className="cart-product-heading">{title}</Link>
                    <div className='cart-cost-group'>
                        <span className="cart-product-cost">{cost}&nbsp;₽</span>
                        {costBefore&&<span className="cart-product-cost--before">{costBefore}&nbsp;₽</span>}
                    </div>
                </div>  
            </div>
            <div className="delete-and-sum">
                <button onClick={deleteProductFromCart} className='delete-product'>
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9458 3.4H19.9278V5.1H17.935V16.15C17.935 16.3754 17.83 16.5916 17.6432 16.751C17.4563 16.9104 17.2029 17 16.9386 17H2.98917C2.72491 17 2.47147 16.9104 2.28461 16.751C2.09775 16.5916 1.99278 16.3754 1.99278 16.15V5.1H0V3.4H4.98194V0.85C4.98194 0.624566 5.08692 0.408365 5.27378 0.248959C5.46064 0.0895533 5.71407 0 5.97833 0H13.9494C14.2137 0 14.4671 0.0895533 14.654 0.248959C14.8409 0.408365 14.9458 0.624566 14.9458 0.85V3.4ZM15.9422 5.1H3.98556V15.3H15.9422V5.1ZM11.3728 10.2L13.1344 11.7028L11.7255 12.9047L9.96389 11.4019L8.20227 12.9047L6.79338 11.7028L8.555 10.2L6.79338 8.6972L8.20227 7.4953L9.96389 8.9981L11.7255 7.4953L13.1344 8.6972L11.3728 10.2ZM6.97472 1.7V3.4H12.9531V1.7H6.97472Z" fill="#DF6464"/>
                    </svg>
                </button>
                <div className='sum'>{productTotalSum}&nbsp;₽</div>
            </div> 
        </div>
    )
}
