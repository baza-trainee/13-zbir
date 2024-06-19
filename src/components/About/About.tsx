import ReusableBtn from "../ReusableBtn/ReusableBtn";

import styles from "./About.module.scss";

const About = () => {
    return (
        <section className={`${styles.wrapper} container`}>
            <p className={styles.title}>батальйон</p>
            <div className={styles.contant}>
                <div className={styles.info}>
                13-й окремий стрілецький батальйон (13 ОСБ) — це українське військове формування військ територіальної оборони у складі оперативного командування «Північ». Батальйон був сформований у березні 2014 року на базі Уманського військового комісаріату. Він складається з добровольців та мобілізованих військовослужбовців і підпорядковується командуванню Сухопутних військ Збройних Сил України.
                Основними завданнями 13 ОСБ є охорона та оборона об’єктів критичної інфраструктури, боротьба з диверсійно-розвідувальними силами та забезпечення операцій зі стабілізації у разі надзвичайних ситуацій. Територія відповідальності батальйону включає Черкаську, Кіровоградську та Полтавську області. 
                </div>
                <div className={styles.picture}>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <ReusableBtn 
                text={"Задонатити"} 
                href={"url"}
            />
            </div>
            
        </section>
    )
}

export default About;