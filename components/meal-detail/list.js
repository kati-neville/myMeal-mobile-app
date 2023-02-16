import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
	return data.map(dataPoint => (
		<View style={styles.listItem}>
			<Text key={dataPoint} style={styles.itemText}>
				{dataPoint}
			</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#e2b497",
	},
	itemText: {
		color: "#354101",
		textAlign: "center",
	},
});

export default List;
