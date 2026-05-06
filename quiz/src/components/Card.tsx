import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { colors } from '@app-themes/colors';

interface CardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    variant?: 'default' | 'elevated';
}

export function Card({ children, style, variant = 'default' }: CardProps) {
    const cardStyle = variant === 'elevated' ? styles.elevated : styles.default;

    return (
        <View style={[styles.card, cardStyle, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 24,
        padding: 20,
    },
    default: {
        backgroundColor: colors.card_background,
        borderWidth: 1,
        borderColor: colors.glass_border,
    },
    elevated: {
        backgroundColor: colors.card_background,
        borderWidth: 1,
        borderColor: colors.glass_highlight,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.14,
        shadowRadius: 18,
        elevation: 6,
    },
});
