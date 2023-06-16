import { useEffect, useState } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState<string>("00:00:00 p.m.");
    const [awake, setAwake] = useState<boolean>(true);

    function updateTime() {
        let current = new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" });
        setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`);
        setTimeout(updateTime, 60 * 1000);

        if (new Date().getHours() < 7) setAwake(false);
    }

    useEffect(() => {
        updateTime();
    }, []);

    return (
        <p className="text-black/50 dark:text-white/50 text-sm mb-10">
            Son aproximadamente las <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> para mi, asi que probablemente este {" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "despierto" : "dormido"}</span>. Me pondre en contacto pronto.
        </p>
    );
};

export default TimeStatus;
