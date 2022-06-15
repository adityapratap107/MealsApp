import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: any) => {},
  removeFavorite: (id: any) => {},
});

function FavoritesContextProvider(props) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id: any) {
    setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: any) {
    setFavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContextProvider value={value}>
      {props.children}
    </FavoritesContextProvider>
  );
}

export default FavoritesContextProvider;
