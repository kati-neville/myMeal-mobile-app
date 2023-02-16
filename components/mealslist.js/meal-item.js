import { useNavigation } from "@react-navigation/native";
import {
	Image,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { MealDetails } from "../meal-details";

function MealItem({
	id,
	title,
	imageUrl,
	duration,
	affordability,
	complexity,
}) {
	const navigation = useNavigation();

	function selectMealItem() {
		navigation.navigate("meal-details", {
			mealId: id,
		});
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				onPress={selectMealItem}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>

					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.45,
		shadowColor: "black",
		backgroundColor: "white",
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	buttonPressed: {
		opacity: 0.25,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
});

export default MealItem;
