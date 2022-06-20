import CartContext from './CartContex';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
export function cartReducer (state:any, action:any) {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item:any) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
      const existingCartItemIndex = state.items.findIndex(
      (item:any) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount  -  existingItem.amount * existingItem.price;
    let updatedItems;
    if (existingItem.amount ) {
      updatedItems = state.items.filter((item:any) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props:any) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item:any) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id:number) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
