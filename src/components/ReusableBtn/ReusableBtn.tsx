import { FC } from 'react';
import { ReusableBtnProps } from '../../types/ReusableBtnProps';
import styles from './ReusableBtn.module.scss';

const ReusableBtn: FC<ReusableBtnProps> = ({
  text,
  href,
  target,
  rel,
  type,
  onClick,
  ...props
}) => {
  const className = href ? `${styles.reuseLinkBtn}` : `${styles.reuseBtn}`;

  if (href) {
    return (
      <div className={className}>
        <a href={href} target={target} rel={rel} {...props}>
          <p>{text}</p>
        </a>
      </div>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      <p>{text}</p>
    </button>
  );
};

export default ReusableBtn;
