import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from './AppText';
import { colors } from '@app-themes/colors';

interface BadgeProps {
    text: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
}

export function Badge({ text, variant = 'info' }: BadgeProps) {
    const getBackgroundColor = () => {
        switch (variant) {
            case 'success':
                return colors.success_glass;
            case 'error':
                return colors.error_glass;
            case 'warning':
                return colors.warning_glass;
            case 'info':
            default:
                return colors.card_background;
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'success':
            case 'error':
            case 'warning':
                return colors.primary;
            default:
                return colors.primary;
        }
    };

    return (
        <View
            style={[
                styles.badge,
                { backgroundColor: getBackgroundColor() },
            ]}
        >
            <AppText
                style={[
                    styles.text,
                    { color: getTextColor() },
                ]}
            >
                {text}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: colors.glass_border,
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
    },
});
