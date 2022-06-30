import React from "react";

const FavoriteContext = React.createContext({
  favoriteItems: [],
  addFavoriteItem: (item: any) => {},
  removeFromFavorite: (id: any) => {},
});

export default FavoriteContext;
