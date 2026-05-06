import { Score } from "@app-types/Score";
import { useEffect, useMemo, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useScore() {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        const loadScores = async () => {
            try {
                const storedScores = await AsyncStorage.getItem("scores");
                if (storedScores) {
                    const parsedScores: Score[] = JSON.parse(storedScores);
                    setScores(parsedScores);
                }
            } catch (error) {
                console.error("Error loading scores:", error);
            }
        };
        loadScores();
    }, []);

    useEffect(() => {
        const saveScores = async () => {
            try {
                await AsyncStorage.setItem("scores", JSON.stringify(scores));
            } catch (error) {
                console.error("Error saving scores:", error);
            }
        };
        if (scores.length > 0) {
            saveScores();
        }
    }, [scores]);

    const addNewScore = ({ nome, score }: Score) => {
        setScores((prev) => [...prev, { nome, score }]);
    }

    const sortedScores = useMemo(() => (
        [...scores].sort((a, b) => b.score - a.score)
    ), [scores]);

    return { scores, addNewScore, sortedScores };
}