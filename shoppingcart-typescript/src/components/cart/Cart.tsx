import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MouseEventHandler } from 'react'

import CartContext from '../../store/CartContex';
import { CartItem } from '../CartItem';
import {NavBarForCart} from '../navBars/NavBarForCart'

export interface Cart {
    id:number,
    remove:MouseEventHandler
}
export function Cart  (cart:any, setCart:any)  {
  const removeNotify = () => toast("You remove item from cart!");

  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const { items } = cartCtx;
	
  const cartItemRemoveHandler = (event:React.FormEvent, item:any) => {
    event.preventDefault();
    cartCtx.removeItem(item.id);
    removeNotify();

  };
  return (
    <div>
      <div id='page' className='site'>
        <Link className='skip-link screen-reader-text' to='#content'>
          Skip to content
        </Link>
			  <NavBarForCart />
        <div id='content' className='site-content'>
          <div id='primary' className='content-area'>
            <main id='main' className='site-main'>
              <div className='cart'>
                <div className='wrap'>
                  <div className='cart__container'>
                    <div className='cart__top'>
                      <div className='cart__top-btn'>
                        <Link className='btn btn--black' to='/'>
                          BACK TO SHOP
                        </Link>
                      </div>
                      <div className='cart__title'>
                        <span className='pretitle'> SHOP</span>
                        <h2 className='section-title'>SAME OLD SAME OLD</h2>
                        <h3 className='total-price'>
                          Total price : {totalPrice}
                        </h3>
                      </div>
                      <div className='cart__top-btn'>
                        <Link className='btn btn--black' to='/checkout'>
                          CHECKOUT
                        </Link>
                      </div>
                    </div>
                    {items.map((item) => {
                      return <CartItem key={item.id} item={item} remove={cartItemRemoveHandler} />;
                    })}
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
