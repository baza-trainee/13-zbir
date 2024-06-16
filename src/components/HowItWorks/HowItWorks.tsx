import styles from "./HowItWorks.module.scss";

const HowItWorks = () => {
    return (
        <section className={`${styles.wrapper} container`}>
            <p className={styles.title}>як це працюЄ</p>
            <div className={styles.infoContainer}>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>
                        1
                    </span>
                    <span className={styles.stepText}>
                        Твій донат
                    </span>
                </div>

                <span className={styles.arrow}></span>

                <div className={styles.step}>
                    <span className={styles.stepNumber}>
                        2
                    </span>
                    <span className={styles.stepText}>
                        Система РЕБ
                    </span>
                </div>

                <span className={styles.arrow}></span>

                <div className={styles.step}>
                    <span className={styles.stepNumber}>
                        3
                    </span>
                    <span className={styles.stepText}>
                        Захист на фронті
                    </span>
                </div>
            </div>
        </section>
    )
};
export default HowItWorks;
