import React, { useEffect } from "react";
import {
	Alert,
	Button,
	FlatList,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";
import CategoryGridTile from "../components/category-grid-tile.js";
import { CATEGORIES } from "../data/index.js";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldPlaySound: false,
			shouldSetBadge: false,
			shouldShowAlert: true,
		};
	},
});

const CategoriesScreen = ({ navigation }) => {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate("meal-overview", {
				categoryId: itemData.item.id,
			});
		}

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}

	// useEffect(() => {
	// 	async function configurePushNotification() {
	// 		const { status } = await Notifications.getPermissionsAsync();

	// 		let finalStatus = status;

	// 		if (finalStatus !== "granted") {
	// 			const { status } = await Notifications.getPermissionsAsync();
	// 			finalStatus = status;
	// 		}

	// 		if (finalStatus !== "granted") {
	// 			Alert.alert(
	// 				"Permission Required",
	// 				"Push Notification need appropriate permissions"
	// 			);
	// 		}
	// 		const pushToken = await Notifications.getExpoPushTokenAsync();
	// 		console.log(pushToken);

	// 		if (Platform.OS === "android") {
	// 			Notifications.setNotificationChannelAsync("default", {
	// 				name: "default",
	// 				importance: Notifications.AndroidImportance.DEFAULT,
	// 			});
	// 		}
	// 	}

	// 	configurePushNotification();
	// }, []);

	// useEffect(() => {
	// 	const subscription = Notifications.addNotificationReceivedListener(
	// 		notification => {
	// 			const data = notification.request.content.data.userName;
	// 			console.log("NOTIFICATION REC: ");
	// 			console.log(data);
	// 		}
	// 	);

	// 	const subscribtion2 = Notifications.addNotificationResponseReceivedListener(
	// 		response => {
	// 			console.log("NOTIFICATION RESPONSE REC: ");

	// 			console.log(response);
	// 		}
	// 	);

	// 	return () => {
	// 		subscription.remove();
	// 		subscribtion2.remove();
	// 	};
	// }, []);

	// function scheduleNotificationHandler() {
	// 	Notifications.scheduleNotificationAsync({
	// 		content: {
	// 			title: "My first local notification",
	// 			body: "This is the notification body",
	// 			priority: "MAX",
	// 			data: {
	// 				userName: "Neville",
	// 			},
	// 		},
	// 		trigger: {
	// 			seconds: 5,
	// 		},
	// 	});
	// }

	// function sendPushNotificationHandler() {
	// 	const message = {
	// 		to: "ExponentPushToken[FNiLmhBFiJxQC6xLwR5gdO]",
	// 		title: "Test Title from this device",
	// 		body: "And here is the body!",
	// 	};
	// 	fetch("https://exp.host/--/api/v2/push/send", {
	// 		method: "POST",
	// 		headers: {
	// 			Accept: "application/json",
	// 			"Accept-encoding": "gzip, deflate",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(message),
	// 	});
	// }

	return (
		<View styles={styles.notificationContainer}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={item => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	notificationContainer: {
		marginTop: 10,
	},
});

export default CategoriesScreen;
