import React from 'react';
import styles from './CallShare.module.scss';

const CallShare = () => {
  return (
    <section className={styles.container}>
      <div className={styles.paragraphContainer}>
        <p className={styles.MobileParagraph}>Будемо вдячні кожному <br/> за  підтримку та <br /> поширення збору!</p>
        <p className={styles.DesltopParagraph}>Будемо вдячні кожному за <br />  підтримку та поширення збору!</p>
        <p className={styles.GloryUkr}>Слава Україні!</p>
      </div>
      <button className={styles.ShareButton}>Поділитися збором</button>
    </section>
  );
};

export default CallShare;
