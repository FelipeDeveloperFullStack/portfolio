// HOOKS
import { useState, useEffect } from "react";
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// REACT ICONS
import { FaMoon, FaSun, FaPalette } from "react-icons/fa6";
// CSS 
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [lightMode, setLightMode] = useState(false);

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    }

    useEffect(() => {
        if (lightMode) {
            document.body.classList.add('light_mode');
        } else {
            document.body.classList.remove('light_mode');
        }
    }, [lightMode]);
    

    const [paletteOpen, setPaletteOpen] = useState(false);

    const handlePaletteToggle = () => {
        setPaletteOpen(!paletteOpen)
    }

    return (
        <header className={styles.header}>
            <NavLink to={"/"} className={styles.logo}>
                &lt; <span className={styles.logo_span}>I.K DEV</span>/&gt;
            </NavLink>

            <nav className={styles.navbar}>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Home
                </NavLink>

                <NavLink to="/about"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Sobre
                </NavLink>

                <NavLink to="/skills"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Skills
                </NavLink>

                <NavLink to="/portfolio"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Portfolio
                </NavLink>

                <NavLink to="/contact"
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >Contato
                </NavLink>
            </nav>

            <div className={styles.icons_container}>
                <label>
                    <input
                        type="checkbox"
                        className={styles.input_darc_light_mode}
                        onClick={toggleLightMode}
                    />

                    <FaMoon className={styles.moon_icon} />
                    <FaSun className={styles.sun_icon} />
                    {/* {lightMode ?  : } */}
                </label>

                <label>
                    <input
                        type="checkbox"
                        className={styles.input_palette_colors}
                        onClick={handlePaletteToggle}
                    />

                    <FaPalette className={styles.palette} />

                    <div className={`${styles.toggle_palette_theme}
                         ${paletteOpen ? styles.palette_open : ""}`}
                    >
                        <button className={`${styles.ball} ${styles.ball_0}`}
                            style={{ "--p": 1 }}
                        ></button>
                        <button className={`${styles.ball} ${styles.ball_1}`}
                            style={{ "--p": 2 }}
                        ></button>
                        <button className={`${styles.ball} ${styles.ball_2}`}
                            style={{ "--p": 3 }}
                        ></button>
                        <button className={`${styles.ball} ${styles.ball_3}`}
                            style={{ "--p": 4 }}
                        ></button>
                        <button className={`${styles.ball} ${styles.ball_4}`}
                            style={{ "--p": 5 }}
                        ></button>
                    </div>
                </label>
            </div>
        </header>
    );
};

export default Navbar;
