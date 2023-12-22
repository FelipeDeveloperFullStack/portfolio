// CSS
import styles from "./Home.module.css"
// REACT ROUTER DOM
import { NavLink } from "react-router-dom";
// COMPONENTS
import Transition from '../../components/Transition';
// REACT ICONS
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
// IMGAGENS
import Home_img from "./imgs/home_test_img_2.0.png"
// PARTICLES
import ParticlesBackground from '../../components/ParticlesBackground';
// FRAMER MOTION
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <Transition >
                <section className={styles.home}>
                    <div className={styles.home_content}>
                        <ParticlesBackground />

                        <motion.h3
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 2,
                                delay: 0.4,
                                // ease: [0, 0.71, 0.2, 1.01],
                                ease: [0.3, 0, 0.2, 1]
                            }}
                        >
                            {/* Olá eu sou */}
                            Inovando a cada <span>Byte</span>
                        </motion.h3>

                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 2,
                                delay: 0.6,
                                // ease: [0, 0.71, 0.2, 1.01],
                                ease: [0.3, 0, 0.2, 1]
                            }}
                        >
                            Israel Kilday
                        </motion.h1>

                        <motion.div className={styles.transparent_text}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 2,
                                delay: 0.8,
                                // ease: [0, 0.71, 0.2, 1.01],
                                ease: [0.3, 0, 0.2, 1]
                            }}
                        >
                            <h3 className={styles.animation_text}>Front-End Developer</h3>
                        </motion.div>

                        <div className={styles.social_media}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: 1.2,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <NavLink to="https://api.whatsapp.com/send?phone=5585989295516"
                                    className={styles.whatsapp_link}
                                >
                                    <FaWhatsapp />
                                </NavLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: 1.5,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <NavLink to="https://www.instagram.com/israelkilday/"
                                    className={styles.instagram_link}
                                >
                                    <FaInstagram />
                                </NavLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 1.7,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <NavLink to="https://www.linkedin.com/in/israeldevfrontend"
                                    className={styles.linkedin_link}
                                >
                                    <FaLinkedinIn />
                                </NavLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 3,
                                    delay: 1.9,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 5,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <NavLink to="https://github.com/Israelkilday"
                                    className={styles.github_link}
                                >
                                    <FaGithub />
                                </NavLink>
                            </motion.div>
                        </div>

                        <motion.div className={styles.btn_box}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 2,
                                delay: 1.7,
                                // ease: [0, 0.71, 0.2, 1.01],
                                ease: [0.2, 0, 0.2, 1]
                            }}
                        >
                            <a
                                href="./cv/IsraelKildayMachadodeSouza_FrontEndDeveloper_currículo_4.pdf"
                                download
                                className={styles.btn}
                            >
                                Download CV
                            </a>
                        </motion.div>
                    </div>

                    <motion.div className={styles.home_img}
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        transition={{
                            duration: 2,
                            delay: 0.7,
                            ease: [0.2, 0, 0.2, 1]
                        }}
                    >
                        <img src={Home_img} alt="home_img" />
                    </motion.div>
                </section>
            </Transition>
        </>
    )
};

export default Home; 