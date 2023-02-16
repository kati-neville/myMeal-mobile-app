import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	subTitle: {
		color: "white",
		fontWeight: "bold",
		padding: 6,
		fontSize: 18,
		textAlign: "center",
		borderBottomColor: "white",
	},
	subTitleContainer: {
		borderBottomWidth: 2,
		marginHorizontal: 24,
		marginVertical: 4,
		borderColor: "white",
	},
});
export default SubTitle;
