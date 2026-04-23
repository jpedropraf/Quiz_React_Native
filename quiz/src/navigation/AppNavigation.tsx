// Imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { EndScreen } from "@screens/EndScreen/EndScreen";
import { StartScreen } from "@screens/StartScreen/StartScreen";


// Routes
import { ROUTES } from "./routes";
import { GameNavigation } from "./GameNavigation";




const { Navigator, Screen } = createStackNavigator();

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name={ROUTES.START} component={StartScreen} />
                <Screen name={ROUTES.GAME} component={GameNavigation} />
                <Screen name={ROUTES.END} component={EndScreen} />
            </Navigator>
        </NavigationContainer>
    );
}