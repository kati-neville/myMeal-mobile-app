import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./meal-item";

function MealsList({ items }) {
	function renderMealItem(itemData) {
		const { title, imageUrl, duration, affordability, complexity, id } =
			itemData.item;

		const mealProps = {
			id,
			title,
			imageUrl,
			duration,
			affordability,
			complexity,
		};

		return <MealItem {...mealProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={item => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default MealsList;
