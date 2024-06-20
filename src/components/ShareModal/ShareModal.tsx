import React, { useEffect } from 'react';
// import dagger from '../../assets/images/dagger.svg';
import sprite from '../../assets/images/sprite.svg';
import styles from './ShareModal.module.scss';

type ShareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.shareButton}
          style={{ backgroundColor: 'var(--facebook-button-color)' }}
        >
          Поділитись у Facebook
        </button>
        <button
          className={styles.shareButton}
          style={{ backgroundColor: 'var(--linkedin-button-color)' }}
        >
          Поділитись у Linkedin
        </button>
        <button
          className={styles.shareButton}
          style={{ backgroundColor: 'var(--viber-button-color)' }}
        >
          Поділитись у Viber
        </button>

        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Закрити модальне вікно"
        >
          <svg className={styles.svgClose}>
            <use href={sprite + '#icon-dagger'} ></use>
          </svg>
          <svg className={styles.svgCloseDesktop}>
            <use href={sprite + '#icon-dagger-desktop'} ></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
