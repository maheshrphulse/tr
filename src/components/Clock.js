import { useEffect, useState } from "react";

export default function Clock() {

    const [time, setTime] = useState();

    // useEffect(() => {
    //     console.log("useEffect()");

    //     setInterval(() => {

    //         const date = new Date();
    //         const hours = date.getHours();
    //         const minutes = date.getMinutes();
    //         const seconds = date.getSeconds();

    //         const currentTime = `The time now is ${hours > 12 ? hours - 12: hours} : ${minutes} : ${seconds}.`;

    //         setTime(currentTime);

    //     }, 1000);

    // }, []);

    setInterval(() => {

        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const currentTime = `The time now is ${hours > 12 ? hours - 12: hours} : ${minutes} : ${seconds}.`;

        setTime(currentTime);

    }, 1000);

    return <main>
        <h1>{time}</h1>
        <h2>Showing you the time because you are wasting your time wandering some place that does not even exist.</h2>
    </main>
}