import { useEffect, useState } from "react";


export function useTimer(initialSeconds: number) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (active) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        }
    }, [active, seconds]);

    const start = () => setActive(true);
    const pause = () => setActive(false);
    const reset = (newSeconds: number = initialSeconds) => {
        setActive(true);
        setSeconds(newSeconds);
    };

    return { seconds, active, start, pause, reset }
}
