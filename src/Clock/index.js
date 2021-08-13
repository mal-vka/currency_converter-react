import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatDate = (time) => time.toLocaleString(
        undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );

    return (
        <div className="clock">
            Dziś jest {formatDate(time)}
        </div>
    );
};

export default Clock;