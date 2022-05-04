import React, { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./component/AuthScreen";
import HomeScreen from "./component/HomeScreen";

export default (props) => {
	const [myState, setMyState] = useState(false);
	const [isLoading] = useFonts({
		Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
	});

	if (!isLoading) {
		return null;
	}

	return (
		<NavigationContainer>
			{myState ? <HomeScreen /> : <AuthScreen />}
		</NavigationContainer>
	);
};
