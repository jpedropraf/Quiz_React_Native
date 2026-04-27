import { act, useCallback, useEffect, useState } from "react";


export function useTimer(initialSec: number) {
    const [sec, setSec] = useState(0);
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (active && sec !== 0) {
            interval = setInterval(() => {
                setSec((prev) => prev + 1);
            }, 1000);
        } else if (sec === 0) {
            setActive(false);
            clearInterval(interval!);
        }

        return () => {
            if (interval) clearInterval(interval);
        }
    }, [active, sec]);

    const start = () => setActive(true);
    const pause = () => setActive(false);
    const reset = (newSeconds: number = initialSec) => {
        setActive(true);
        setSec(newSeconds);
    };

    return { sec, active, start, pause, reset }
}