import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./Header.css";


const MESSAGES = [
    "Starting your next project is effortless,",
    "Seamlessly integrate React & Django,",
    "Focus solely on your project's core,",
    "Layouts, Inputs & Notifications;",
    "Authenticate, Authorize & Chat."
];

const Header = () => {

    const [startCycling, setStart] = useState(false);
    const [index, setIndex] = useState(0);
    const controls = useAnimation();

    const h2Variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    useEffect(
        () => {
            const displayH2 = async () => {
                await new Promise(
                    resolve => setTimeout(
                        () => {
                            setStart(true);
                            resolve();
                        },
                        1_000
                    )
                );
            }
            const cycleH2 = async () => {
                // Infinite loop
                while (true) {
                    // Cycle index
                    setIndex(i => (i + 1) % MESSAGES.length);
                    await controls.start("visible");
                    await new Promise(resolve => setTimeout(resolve, 1_000));
                    await controls.start("hidden");
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            };
            displayH2().then(cycleH2);
        }, [ controls ]
    );

    return (
        <header id="scheme-header">
            <h1>scheme</h1>
            {
                startCycling &&
                <motion.h2 variants={ h2Variants } initial="hidden" animate={ controls }>{ MESSAGES[index] }</motion.h2>
            }
            <ul id="scheme-icons">
                <li className="material-symbols-outlined" title='Blocks'>responsive_layout</li>
                <li className="material-symbols-outlined" title='Fields'>input</li>
                <li className="material-symbols-outlined" title='Notifications'>notifications</li>
                <li className="material-icons" title='Authenticate'>account_circle</li>
                <li className="material-icons" title='Authorize'>admin_panel_settings</li>
                <li className="material-icons" title='Chat'>forum</li>
            </ul>
        </header>
    )
}

export default Header;