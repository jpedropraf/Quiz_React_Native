// Imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { GameScreen } from "@screens/GameScreen/GameScreen";
import { EndScreen } from "@screens/EndScreen/EndScreen";

// Routes
import { ROUTES } from "./routes";



const { Navigator, Screen } = createNativeStackNavigator();

export function GameNavigation() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={ROUTES.GAME_MAIN} component={GameScreen} />
            <Screen name={ROUTES.GAME_RESULT} component={EndScreen} />
        </Navigator>
    );
}