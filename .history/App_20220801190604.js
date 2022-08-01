/** @format */

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "./screens/ProductsScreen";
import ProducItemScreen from "./screens/ProducItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "rgb(148, 211, 211)" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "rgb(229, 238, 221)" },
          }}
        >
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="ProductItem" component={ProducItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
