import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/categories-screen";
import MealsOverviewScreen from "./screens/meal-overview-screen";
import MealDetailsScreen from "./screens/meal-details-screen";
import FavoritesScreen from "./screens/favorites-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#3f2f25" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#3f2f25" },
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#351401",
				drawerActiveBackgroundColor: "#e4baa1",
			}}>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star-outline" size={size} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
export default function App() {
	return (
		<>
			<StatusBar style="light" />
			{/* <FavoriteContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#3f2f25" },
							headerTintColor: "white",
							contentStyle: { backgroundColor: "#3f2f25" },
						}}>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="meal-overview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen name="meal-details" component={MealDetailsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoriteContextProvider> */}
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
