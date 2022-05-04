import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

const Stack = createNativeStackNavigator();

export default function AuthScreen() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="signUp" component={SignUpScreen} />
			<Stack.Screen name="signIn" component={SignInScreen} />
		</Stack.Navigator>
	);
}
