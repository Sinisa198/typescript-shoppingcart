import { MouseEventHandler } from 'react'

import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type propsCartItem = {
    remove: MouseEventHandler,
    item: any
  }
  
export function CartItem ({ item, remove }: propsCartItem){
  return (
    <div className='row cart__wrapper'>
      <div key={item.id} className='cart__item'>
        <div className='cart__item-body-image'>
          <img src={item.image} alt='' className='cart__item-img' />
        </div>
        <div className='cart__item-details'>
          <span className='cart__item-name'>{item.name}</span>
          <span className='cart__item-info'>Amount: {item.amount}</span>
        </div>
        <div className='cart__item-button'>
          <Link
            className='btn btn--sm'
            to=''
            onClick={(event) => remove(event, item)}
          >
            REMOVE FROM CART
          </Link>
          <ToastContainer />
        </div>
        <div className='cart__item-price'>
          <span className='cards__price'>Price : ${item.price} </span>
        </div>
      </div>
    </div>
  );
};
