import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				onPress={onPress}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowColor: "black",
		backgroundColor: "white",
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonPressed: {
		opacity: 0.25,
	},
	title: {
		fontSize: 14,
		fontWeight: "bold",
	},
});

export default CategoryGridTile;
