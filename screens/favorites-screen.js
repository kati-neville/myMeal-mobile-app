import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/mealslist.js/meals-list";
import { MEALS } from "../data";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
	// const { ids } = useContext(FavoritesContext);
	const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

	const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

	return favoriteMeals.length === 0 ? (
		<View style={styles.rootContainer}>
			<Text style={styles.text}>You have no favorite meals yet</Text>
		</View>
	) : (
		<MealsList items={favoriteMeals} />
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
export default FavoritesScreen;
