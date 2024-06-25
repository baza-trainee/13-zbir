import { FC, useState } from 'react';
import ShareModal from './ShareModal/ShareModal';
import ReusableBtn from '../ReusableBtn/ReusableBtn';
import styles from './CallShare.module.scss';
import '../../styles/index.scss';

const CallShare: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={`${styles.sectionWrapper} container`}>
      <p className={styles.mobileParagraph}>
        Будемо вдячні кожному за підтримку та поширення збору!
      </p>
      <p className={styles.gloryUkr}>Слава Україні!</p>
      <div className={styles.buttonWrapper}>
        <ReusableBtn
          text="Поділитися збором"
          type="button"
          onClick={openModal}
        />
      </div>

      <ShareModal isOpen={isModalOpen} onClose={openModal} />
    </section>
  );
};

export default CallShare;
