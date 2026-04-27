import { Score } from "@app-types/Score";
import { useEffect, useMemo, useState } from "react";


export function useScore() {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        const storedScores = localStorage.getItem("scores");

        if (storedScores) {
            const parsedScores: Score[] = JSON.parse(storedScores);
            setScores(parsedScores);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("scores", JSON.stringify(scores));
    }, [scores]);

    const addNewScore = ({ nome, score }: Score) => {
        setScores((prev) => [...prev, { nome, score }]);
    }

    const sortedScores = useMemo(() => (
        [...scores].sort((a, b) => b.score - a.score)
    ), [scores]);

    return { scores, addNewScore, sortedScores };
}