// Imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { GameScreen } from "@screens/GameScreen/GameScreen";
import { EndScreen } from "@screens/EndScreen/EndScreen";

// Routes
import { ROUTES } from "./routes";



const { Navigator, Screen } = createStackNavigator();

export function GameNavigation() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name={ROUTES.GAME_MAIN} component={GameScreen} />
                <Screen name={ROUTES.GAME_RESULT} component={EndScreen} />
            </Navigator>
        </NavigationContainer>
    );
}