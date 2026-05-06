// Imports
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Components
import { AppText, Button, Input, Card } from '@app-components/index';

// Layouts
import { AppLayout } from '@app-layouts/index';

// Routes
import { ROUTES } from '@app-navigation/routes';

// Themes
import { colors } from '@app-themes/colors';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.START>;

export function StartScreen({ navigation }: Props) {
    const [playerName, setPlayerName] = useState('');

    const handleStartGame = () => {
        if (playerName.trim() === '') {
            Alert.alert('Atenção', 'Por favor, insira seu nome para começar!');
            return;
        }
        navigation.navigate(ROUTES.GAME, { playerName: playerName.trim() });
    };

    return (
        <AppLayout>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <AppText style={styles.title}>Quiz de Geografia</AppText>
                    <AppText style={styles.subtitle}>Teste seus conhecimentos sobre o mundo!</AppText>

                    <Card variant="elevated" style={styles.infoCard}>
                        <AppText style={styles.infoText}>
                            Responda 5 perguntas sobre países e bandeiras.
                        </AppText>
                        <AppText style={styles.infoText}>
                            Acompanhe sua pontuação em tempo real.
                        </AppText>
                        <AppText style={styles.infoText}>
                            Busque o melhor resultado.
                        </AppText>
                    </Card>

                    <View style={styles.formContainer}>
                        <Input
                            label="Seu Nome:"
                            placeholder="Digite seu nome"
                            value={playerName}
                            onChangeText={setPlayerName}
                        />
                    </View>

                    <Button
                        label="Iniciar Jogo"
                        onPress={handleStartGame}
                        variant="primary"
                        style={styles.button}
                    />
                </View>
            </ScrollView>
        </AppLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 8,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 10,
        color: colors.primary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 24,
        color: colors.tertiary,
        textAlign: 'center',
    },
    infoCard: {
        width: '100%',
        minHeight: 190,
        justifyContent: 'center',
        marginBottom: 32,
    },
    infoText: {
        fontSize: 14,
        color: colors.primary,
        marginBottom: 10,
        lineHeight: 21,
    },
    formContainer: {
        width: '100%',
        marginBottom: 24,
    },
    button: {
        width: '100%',
        minHeight: 50,
    },
});
