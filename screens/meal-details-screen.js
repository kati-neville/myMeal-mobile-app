import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/icon-button";
import List from "../components/meal-detail/list";
import SubTitle from "../components/meal-detail/sub-title";
import { MealDetails } from "../components/meal-details";
import { MEALS } from "../data/index";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorites, removeFavorite } from "../store/redux/favorite";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	// const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

	const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
	const dispatch = useDispatch();

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const {
		imageUrl,
		title,
		affordability,
		complexity,
		duration,
		ingredients,
		steps,
	} = selectedMeal;

	const mealIsFavorite = favoriteMealIds.includes(mealId);

	function changeFavoriteHandler() {
		if (mealIsFavorite) {
			// removeFavorite(mealId);
			dispatch(removeFavorite({ id: mealId }));
		} else {
			// addFavorite(mealId);
			dispatch(addFavorites({ id: mealId }));
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? "star" : "star-outline"}
						onPress={changeFavoriteHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoriteHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image style={styles.image} source={{ uri: imageUrl }} />
			<Text style={styles.title}>{title}</Text>

			<MealDetails
				duration={duration}
				affordability={affordability}
				complexity={complexity}
				textStyle={styles.detailText}
			/>

			<View style={styles.outerContainer}>
				<View style={styles.listContainer}>
					<SubTitle>Ingredients</SubTitle>

					<List data={ingredients} />

					<SubTitle>Steps</SubTitle>

					<List data={steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 24,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
	},
	detailText: {
		color: "white",
	},
	listContainer: {
		maxWidth: "80%",
	},
	outerContainer: {
		alignItems: "center",
	},
});

export default MealDetailScreen;
