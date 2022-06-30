import FavoriteContex from "./FavoriteContex";
import { useReducer } from "react";
const defaultFavoriteState = {
  items: [],
  totalAmount: 0,
};
const favoriteReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
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
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount =
      state.totalAmount - existingItem.amount * existingItem.price;
    let updatedItems;
    if (existingItem.amount) {
      updatedItems = state.items.filter((item: any) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultFavoriteState;
};

const FavoriteProvider = (props: any) => {
  const [favoriteState, dispatchFavoriteAction] = useReducer(
    favoriteReducer,
    defaultFavoriteState
  );

  const addItemToFavoriteHandle = (item: any) => {
    dispatchFavoriteAction({ type: "ADD", item });
  };
  const removeFromFavoriteHandler = (id: any) => {
    dispatchFavoriteAction({ type: "REMOVE", id });
  };

  const favoriteContext = {
    items: favoriteState.items,
    totalAmount: favoriteState.totalAmount,
    addFavoriteItem: addItemToFavoriteHandle,
    removeFavoriteItem: removeFromFavoriteHandler,
  };

  return (
    <FavoriteContex.Provider value={favoriteContext}>
      {props.children}
    </FavoriteContex.Provider>
  );
};

export default FavoriteProvider;
