import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: id => {},
	removeFavorite: id => {},
});

function FavoriteContextProvider({ children }) {
	const [favoriteMealIds, setFavoriteMealIds] = useState([]);

	function addFavorite(id) {
		setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
	}

	function removeFavorite(id) {
		setFavoriteMealIds(currentFavIds =>
			currentFavIds.filter(mealId => mealId !== id)
		);
	}

	const values = {
		ids: favoriteMealIds,
		addFavorite,
		removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={values}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoriteContextProvider;
