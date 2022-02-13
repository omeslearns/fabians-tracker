import { Tracker } from "./Tracker";
import { useState } from "react";

export function App() {
    const trackObj = [
        {
            name: "Angriff", 
            successes: useState(0),
            failures: useState(0),
        },
        {
            name: "Aufschlag", 
            successes: useState(0),
            failures: useState(0),
        },
        {
            name: "Block", 
            successes: useState(0),
            failures: useState(0),
        },
        // {
        //     name: "Annahme", 
        //     successes: useState(0),
        //     failures: useState(0),
        // },
        // {
        //     name: "Zuspiel", 
        //     successes: useState(0),
        //     failures: useState(0),
        // },
        {
            name: "Abwehr", 
            successes: useState(0),
            failures: useState(0),
        },
    ];
    console.dir(trackObj);

    return (
        <div>
            <main>
                {trackObj.map((tracker) => (
                    <Tracker {...tracker} />
                ))}
            </main>
        </div>
    );
}
