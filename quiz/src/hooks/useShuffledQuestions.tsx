import { Question } from "@app-types/Question";
import { shuffleArray } from "@app-utils/shuffleArray";
import { useCallback, useState } from "react";


export function useShuffledQuestions(initialQuestions: Question[]) {
    const [questions, setQuestions] = useState<Question[]>(
        () => shuffleArray(initialQuestions)
    );

    const reshuffle = useCallback(() => {
        setQuestions((prev) => shuffleArray(prev));
    }, []);

    return { questions, reshuffle };
}