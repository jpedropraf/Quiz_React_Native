// Imports
import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Components
import { AppText, Button, Card, Badge } from '@app-components/index';

// Layouts
import { AppLayout } from '@app-layouts/index';

// Hooks
import { useScore } from '@app-hooks/useScore';

// Routes
import { ROUTES } from '@app-navigation/routes';

// Themes
import { colors } from '@app-themes/colors';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.GAME_RESULT>;

export function EndScreen({ route, navigation }: Props) {
    const { playerName, score } = route.params;
    const { addNewScore, sortedScores } = useScore();

    useEffect(() => {
        addNewScore({ nome: playerName, score });
    }, []);

    const handlePlayAgain = () => {
        navigation.popToTop();
        navigation.navigate(ROUTES.START as never);
    };

    const totalQuestions = 5;
    const percentage = Math.round((score / totalQuestions) * 100);

    let message = '';
    let messageColor = colors.secondary;

    if (percentage === 100) {
        message = 'Perfeito. Você foi excelente em Geografia.';
        messageColor = colors.accent;
    } else if (percentage >= 80) {
        message = 'Excelente resultado.';
        messageColor = colors.accent;
    } else if (percentage >= 60) {
        message = 'Bom resultado. Você tem um ótimo conhecimento.';
        messageColor = colors.tertiary;
    } else if (percentage >= 40) {
        message = 'Você está no caminho certo. Vale mais uma rodada.';
        messageColor = colors.tertiary;
    } else {
        message = 'Tente novamente para melhorar sua pontuação.';
        messageColor = colors.secondary;
    }

    const playerRank = sortedScores.findIndex(s => s.nome === playerName && s.score === score) + 1 || sortedScores.length;

    return (
        <AppLayout>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.resultContainer}>
                    <AppText style={styles.title}>Quiz Finalizado!</AppText>

                    <Card variant="elevated" style={styles.scoreCard}>
                        <AppText style={styles.playerName}>{playerName}</AppText>
                        <View style={styles.scoreWrapper}>
                            <AppText style={styles.score}>{score}</AppText>
                            <AppText style={styles.totalQuestions}>/{totalQuestions}</AppText>
                        </View>
                        <Badge text={`${percentage}% de acerto`} variant="success" />
                    </Card>

                    <Card style={styles.messageCard}>
                        <AppText style={[styles.message, { color: messageColor }]}>
                            {message}
                        </AppText>
                    </Card>

                    {playerRank <= 3 && (
                        <Card style={styles.medalCard}>
                            <AppText style={styles.medalText}>
                                Você está em #{playerRank} lugar.
                            </AppText>
                        </Card>
                    )}

                    <View style={styles.rankingContainer}>
                        <AppText style={styles.rankingTitle}>Top 5 pontuações</AppText>
                        
                        {sortedScores.length > 0 ? (
                            <Card style={styles.rankingList}>
                                {sortedScores.slice(0, 5).map((item, index) => {
                                    const isCurrentPlayer = item.nome === playerName && item.score === score;
                                    return (
                                        <View 
                                            key={index} 
                                            style={[
                                                styles.rankingItem,
                                                isCurrentPlayer && styles.rankingItemHighlight,
                                            ]}
                                        >
                                            <AppText style={styles.rankingPosition}>
                                                {`${index + 1}.`}
                                            </AppText>
                                            <AppText style={[styles.rankingName, isCurrentPlayer && styles.rankingNameHighlight]}>
                                                {item.nome}
                                            </AppText>
                                            <Badge 
                                                text={`${item.score}/${totalQuestions}`} 
                                                variant={isCurrentPlayer ? 'success' : 'info'}
                                            />
                                        </View>
                                    );
                                })}
                            </Card>
                        ) : (
                            <AppText style={styles.noScores}>Nenhuma pontuação registrada ainda</AppText>
                        )}
                    </View>
                </View>

                <Button
                    label="Jogar novamente"
                    onPress={handlePlayAgain}
                    variant="primary"
                    style={styles.button}
                />
            </ScrollView>
        </AppLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        paddingBottom: 40,
        justifyContent: 'space-between',
    },
    resultContainer: {
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.primary,
        marginBottom: 20,
        textAlign: 'center',
    },
    scoreCard: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
        minHeight: 220,
        justifyContent: 'center',
        paddingVertical: 24,
    },
    playerName: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.primary,
        marginBottom: 12,
    },
    scoreWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    score: {
        fontSize: 56,
        fontWeight: 'bold',
        color: colors.primary,
    },
    totalQuestions: {
        fontSize: 24,
        color: colors.tertiary,
        marginTop: 8,
        marginLeft: 4,
    },
    messageCard: {
        width: '100%',
        marginBottom: 16,
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 22,
    },
    medalCard: {
        width: '100%',
        marginBottom: 16,
        alignItems: 'center',
        borderColor: colors.glass_border,
        backgroundColor: colors.card_background,
    },
    medalText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
    },
    rankingContainer: {
        width: '100%',
        marginTop: 24,
    },
    rankingTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.tertiary,
        marginBottom: 12,
    },
    rankingList: {
        width: '100%',
        paddingVertical: 0,
    },
    rankingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.glass_border,
        gap: 12,
    },
    rankingItemHighlight: {
        backgroundColor: colors.success_glass,
    },
    rankingPosition: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.tertiary,
        minWidth: 24,
    },
    rankingName: {
        fontSize: 14,
        color: colors.primary,
        flex: 1,
    },
    rankingNameHighlight: {
        fontWeight: '600',
    },
    noScores: {
        fontSize: 14,
        color: colors.tertiary,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    button: {
        minHeight: 50,
    },
});
