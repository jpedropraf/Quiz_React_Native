import React from 'react';
import { TextInput, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { AppText } from './AppText';
import { colors } from '@app-themes/colors';

interface InputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    editable?: boolean;
    style?: StyleProp<ViewStyle>;
    error?: string;
}

export function Input({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    editable = true,
    style,
    error,
}: InputProps) {
    return (
        <View style={[styles.container, style]}>
            {label && <AppText style={styles.label}>{label}</AppText>}
            <TextInput
                style={[
                    styles.input,
                    !editable && styles.disabled,
                    error && styles.inputError,
                ]}
                placeholder={placeholder}
                placeholderTextColor={colors.tertiary}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
            {error && <AppText style={styles.errorText}>{error}</AppText>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 8,
        color: colors.tertiary,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.glass_border,
        borderRadius: 18,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 16,
        color: colors.primary,
        backgroundColor: colors.card_background,
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: colors.background,
    },
    inputError: {
        borderColor: colors.secondary,
    },
    errorText: {
        fontSize: 12,
        color: colors.secondary,
        marginTop: 4,
        fontWeight: '500',
    },
});
