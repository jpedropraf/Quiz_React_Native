import React from 'react';
import { Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { AppText } from './AppText';
import { colors } from '@app-themes/colors';

interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export function Button({
    label,
    onPress,
    variant = 'primary',
    disabled = false,
    style,
}: ButtonProps) {
    const getButtonStyle = () => {
        switch (variant) {
            case 'secondary':
                return styles.secondary;
            case 'outline':
                return styles.outline;
            default:
                return styles.primary;
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'secondary':
                return colors.primary;
            case 'outline':
                return colors.tertiary;
            default:
                return colors.primary;
        }
    };

    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                getButtonStyle(),
                disabled && styles.disabled,
                pressed && !disabled && styles.pressed,
                style,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <AppText style={[styles.text, { color: getTextColor() }]}>
                {label}
            </AppText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
        borderWidth: 1,
    },
    primary: {
        backgroundColor: colors.success_glass,
        borderColor: colors.glass_highlight,
    },
    secondary: {
        backgroundColor: colors.card_background,
        borderColor: colors.glass_border,
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: colors.glass_border,
    },
    disabled: {
        opacity: 0.5,
    },
    pressed: {
        opacity: 0.9,
    },
    text: {
        fontSize: 15,
        fontWeight: '600',
    },
});
