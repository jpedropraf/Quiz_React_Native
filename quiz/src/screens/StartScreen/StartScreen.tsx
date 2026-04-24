// Imports
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Styles
import { globalStyle } from "@app-styles/globalStyle";

// Routes
import { ROUTES } from '@app-navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.START>;

export function StartScreen({ navigation }: Props) {
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.teste}>StartScreen</Text>

            <Pressable onPress={() => navigation.navigate("game")}>
                <Text>
                    AAA
                </Text>
            </Pressable>
        </View>
    );
}