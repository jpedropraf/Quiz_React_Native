// Imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

// Layout
import { AppLayout } from "@layouts/AppLayout";

// Screens
import { EndScreen } from "@screens/EndScreen/EndScreen";
import { StartScreen } from "@screens/StartScreen/StartScreen";

// Types
import { RootStackParamList } from "@app-types/RootStackParamList";

// Routes
import { ROUTES } from "./routes";
import { GameNavigation } from "./GameNavigation";


const Stack = createNativeStackNavigator <RootStackParamList>();

export function AppNavigation() {
    return (
        <AppLayout>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={ROUTES.START} component={StartScreen} />
                    <Stack.Screen name={ROUTES.GAME} component={GameNavigation} />
                    <Stack.Screen name={ROUTES.END} component={EndScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppLayout>
    );
}