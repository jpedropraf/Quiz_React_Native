// Imports
import { View, Text, Pressable } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type Props = NativeStackScreenProps<RootStackParamList, "start">;

export function StartScreen({ navigation }: Props) {
    return (
        <View>
            <Text>StartScreen</Text>

            <Pressable onPress={() => navigation.navigate("game")}>
                <Text>
                    AAA
                </Text>
            </Pressable>
        </View>
    );
}