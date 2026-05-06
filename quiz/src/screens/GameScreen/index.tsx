// Imports
import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { RootStackParamList } from "@app-types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Components
import { AppText, Button, Card, Badge } from '@app-components/index';

// Layouts
import { AppLayout } from '@app-layouts/index';

// Hooks
import { useShuffledQuestions } from '@app-hooks/useShuffledQuestions';
import { useTimer } from '@app-hooks/useTimer';

// Routes
import { ROUTES } from '@app-navigation/routes';

// Data
import { questions as allQuestions } from '@app-data/questions';

// Themes
import { colors } from '@app-themes/colors';

// Types
import { Question } from '@app-types/Question';

type Props = NativeStackScreenProps<RootStackParamList, typeof ROUTES.GAME_MAIN>;

interface GameState {
    currentQuestionIndex: number;
    score: number;
    selectedAnswerId: string | null;
    answered: boolean;
}

export function GameScreen({ route, navigation }: Props) {
    const { playerName } = route.params;
    const { questions } = useShuffledQuestions(allQuestions, 5);
    const { seconds, start: startTimer } = useTimer(0);
    
    const [gameState, setGameState] = useState<GameState>({
        currentQuestionIndex: 0,
        score: 0,
        selectedAnswerId: null,
        answered: false,
    });

    useEffect(() => {
        startTimer();
    }, []);

    const currentQuestion = questions[gameState.currentQuestionIndex];
    const isLastQuestion = gameState.currentQuestionIndex === questions.length - 1;

    const handleSelectAnswer = (optionId: string) => {
        if (gameState.answered) return;

        const isCorrect = optionId === currentQuestion.correctOptionId;
        
        setGameState(prev => ({
            ...prev,
            selectedAnswerId: optionId,
            answered: true,
            score: isCorrect ? prev.score + 1 : prev.score,
        }));
    };

    const handleNextQuestion = () => {
        if (isLastQuestion) {
            navigation.navigate(ROUTES.GAME_RESULT, {
                playerName,
                score: gameState.score,
            });
        } else {
            setGameState(prev => ({
                currentQuestionIndex: prev.currentQuestionIndex + 1,
                score: prev.score,
                selectedAnswerId: null,
                answered: false,
            }));
        }
    };

    const renderOption = (option: Question['options'][0], isCorrect: boolean, isSelected: boolean) => {
        const isAnswered = gameState.answered;
        let backgroundColor = colors.card_background;
        let textColor = colors.primary;

        if (isAnswered) {
            if (isCorrect) {
                backgroundColor = colors.success_glass;
                textColor = colors.primary;
            } else if (isSelected && !isCorrect) {
                backgroundColor = colors.error_glass;
                textColor = colors.primary;
            }
        }

        return (
            <Pressable
                key={option.id}
                style={({ pressed }) => [
                    styles.option,
                    { backgroundColor },
                    pressed && !isAnswered && styles.optionPressed,
                    isSelected && isAnswered && styles.optionSelected,
                ]}
                onPress={() => handleSelectAnswer(option.id)}
                disabled={isAnswered}
            >
                {option.type === 'text' ? (
                    <AppText style={[styles.optionText, { color: textColor }]}>{option.text}</AppText>
                ) : (
                    <Image 
                        source={{ uri: option.imageUrl }} 
                        style={styles.optionImage}
                    />
                )}
            </Pressable>
        );
    };

    return (
        <AppLayout>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <AppText style={styles.playerName}>{playerName}</AppText>
                    </View>
                    <View style={styles.headerCenter}>
                        <Badge text={`${gameState.score}/${questions.length}`} variant="success" />
                    </View>
                    <View style={styles.headerRight}>
                        <AppText style={styles.timer}>{seconds}s</AppText>
                    </View>
                </View>

                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View
                            style={[
                                styles.progressFill,
                                {
                                    width: `${((gameState.currentQuestionIndex + 1) / questions.length) * 100}%`,
                                },
                            ]}
                        />
                    </View>
                    <AppText style={styles.progressText}>
                        Pergunta {gameState.currentQuestionIndex + 1} de {questions.length}
                    </AppText>
                </View>

                <Card style={styles.questionContainer}>
                    <AppText style={styles.question}>{currentQuestion.question}</AppText>
                </Card>

                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option) => {
                        const isCorrect = option.id === currentQuestion.correctOptionId;
                        const isSelected = option.id === gameState.selectedAnswerId;
                        return renderOption(option, isCorrect, isSelected);
                    })}
                </View>

                {gameState.answered && (
                    <Card 
                        variant="elevated"
                        style={[
                            styles.feedbackContainer,
                            gameState.selectedAnswerId === currentQuestion.correctOptionId
                                ? styles.feedbackSuccess
                                : styles.feedbackError,
                        ]}
                    >
                        {gameState.selectedAnswerId === currentQuestion.correctOptionId ? (
                            <AppText style={[styles.feedback, styles.feedbackCorrect]}>
                                ✓ Resposta Correta!
                            </AppText>
                        ) : (
                            <AppText style={[styles.feedback, styles.feedbackIncorrect]}>
                                ✗ Resposta Incorreta!
                            </AppText>
                        )}
                        {currentQuestion.explanation && (
                            <AppText style={styles.explanation}>
                                {currentQuestion.explanation}
                            </AppText>
                        )}
                    </Card>
                )}

                {gameState.answered && (
                    <Button
                        label={isLastQuestion ? 'Ver resultado' : 'Próxima pergunta'}
                        onPress={handleNextQuestion}
                        variant={isLastQuestion ? 'secondary' : 'primary'}
                        style={styles.nextButton}
                    />
                )}
            </ScrollView>
        </AppLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.glass_border,
    },
    headerLeft: {
        flex: 1,
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    playerName: {
        fontSize: 12,
        color: colors.primary,
        fontWeight: '600',
    },
    timer: {
        fontSize: 12,
        color: colors.tertiary,
        fontWeight: '600',
    },
    progressContainer: {
        marginBottom: 16,
    },
    progressBar: {
        height: 6,
        backgroundColor: colors.card_background,
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: colors.accent,
    },
    progressText: {
        fontSize: 12,
        color: colors.tertiary,
        fontWeight: '600',
    },
    questionContainer: {
        marginBottom: 16,
        minHeight: 160,
        justifyContent: 'center',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        lineHeight: 24,
    },
    optionsContainer: {
        marginBottom: 16,
        gap: 8,
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.glass_border,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 60,
    },
    optionPressed: {
        opacity: 0.82,
    },
    optionSelected: {
        borderWidth: 1.5,
        borderColor: colors.glass_highlight,
    },
    optionText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.primary,
        textAlign: 'center',
    },
    optionImage: {
        width: '100%',
        height: 60,
        resizeMode: 'contain',
    },
    feedbackContainer: {
        marginBottom: 16,
        minHeight: 110,
        justifyContent: 'center',
    },
    feedbackSuccess: {
        borderColor: colors.accent,
    },
    feedbackError: {
        borderColor: colors.secondary,
    },
    feedback: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    feedbackCorrect: {
        color: colors.accent,
    },
    feedbackIncorrect: {
        color: colors.secondary,
    },
    explanation: {
        fontSize: 13,
        color: colors.primary,
        lineHeight: 18,
    },
    nextButton: {
        minHeight: 48,
    },
});
