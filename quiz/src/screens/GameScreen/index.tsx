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

export function GameScreen() {
    return (
        <AppLayout>
            <View>
                <AppText>GameScreen</AppText>
            </View>
        </AppLayout>
    );
}