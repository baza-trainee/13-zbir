// components/CallShare.tsx

import { useState } from 'react';
import styles from './CallShare.module.scss';
import ShareModal from '../ShareModal/ShareModal';
import ReusableBtn from '../ReusableBtn/ReusableBtn';

const CallShare: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.paragraphContainer}>
        <p className={styles.mobileParagraph}>Будемо вдячні кожному <br/> за  підтримку та <br /> поширення збору!</p>
        <p className={styles.desktopParagraph}>Будемо вдячні кожному за <br />  підтримку та поширення збору!</p>
        <p className={styles.gloryUkr}>Слава Україні!</p>
      </div>
      <ReusableBtn
      text='Поділитися збором'
      type='button'
      onClick={openModal}
      />
      
      <ShareModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default CallShare;
