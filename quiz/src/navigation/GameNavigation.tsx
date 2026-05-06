// Imports
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Screens
import { GameScreen } from "@app-screens/GameScreen";
import { EndScreen } from "@app-screens/EndScreen";

// Routes
import { ROUTES } from "./routes";

// Types
import { RootStackParamList } from "@app-types/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.GAME>;

export function GameNavigation({ route }: Props) {
    const { playerName } = route.params;

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name={ROUTES.GAME_MAIN} 
                component={GameScreen}
                initialParams={{ playerName }}
            />
            <Stack.Screen 
                name={ROUTES.GAME_RESULT} 
                component={EndScreen}
                options={{ animation: "none" }}
            />
        </Stack.Navigator>
    );
}
