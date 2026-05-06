import { Question } from "@app-types/Question";
import { shuffleArray } from "@app-utils/shuffleArray";
import { useCallback, useState } from "react";

let lastSessionQuestionIds: number[] = [];

export function useShuffledQuestions(initialQuestions: Question[], amount: number = initialQuestions.length) {
    const getRandomQuestions = useCallback(() => {
        const questionLimit = Math.min(amount, initialQuestions.length);
        const shuffledQuestions = shuffleArray(initialQuestions);

        if (lastSessionQuestionIds.length === 0) {
            const firstSessionQuestions = shuffledQuestions.slice(0, questionLimit);
            lastSessionQuestionIds = firstSessionQuestions.map((question) => question.id);
            return firstSessionQuestions;
        }

        const freshQuestions = shuffledQuestions.filter(
            (question) => !lastSessionQuestionIds.includes(question.id)
        );
        const repeatedQuestions = shuffledQuestions.filter(
            (question) => lastSessionQuestionIds.includes(question.id)
        );

        const repeatedAmount = Math.max(0, questionLimit - freshQuestions.length);
        const selectedQuestions = shuffleArray([
            ...freshQuestions.slice(0, questionLimit - repeatedAmount),
            ...repeatedQuestions.slice(0, repeatedAmount),
        ]).slice(0, questionLimit);

        lastSessionQuestionIds = selectedQuestions.map((question) => question.id);
        return selectedQuestions;
    }, [amount, initialQuestions]);

    const [questions, setQuestions] = useState<Question[]>(
        () => getRandomQuestions()
    );

    const reshuffle = useCallback(() => {
        setQuestions(getRandomQuestions());
    }, [getRandomQuestions]);

    return { questions, reshuffle };
}
