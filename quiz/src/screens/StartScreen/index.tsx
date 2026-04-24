// Imports
import React from 'react';
import { View, Pressable } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Components
import { AppText } from '@app-components/AppText';

// Layouts
import { AppLayout } from '@app-layouts/index';

// Styles
import { globalStyle } from "@app-styles/globalStyle";

// Routes
import { ROUTES } from '@app-navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.START>;

export function StartScreen({ navigation }: Props) {
    return (
        <AppLayout>
            <View>
                <AppText>StartScreen</AppText>

                <Pressable onPress={() => navigation.navigate("game")}>
                    <AppText>
                        AAA
                    </AppText>
                </Pressable>
            </View>
        </AppLayout>
    );
}