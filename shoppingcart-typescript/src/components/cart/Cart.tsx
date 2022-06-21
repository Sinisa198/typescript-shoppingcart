import { FunctionComponent, useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/CartContex';
import  CartItem  from '../CartItem';
import {NavBarForCart} from '../navBars/NavBarForCart'


export function Cart  (cart:any, setCart:any) {

  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;
  const { items } = cartCtx;
	
  const cartItemRemoveHandler = ( item:any) => {
    cartCtx.removeItem(item.id);


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
                    {items.map((item:any) => {
                      return <CartItem key={item.id} item={item} remove={cartItemRemoveHandler} />;
                    })}
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
