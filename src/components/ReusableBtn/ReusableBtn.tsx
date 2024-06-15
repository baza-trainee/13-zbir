import { ReusableBtnProps } from '../../types/ReusableBtnProps';
import styles from './ReusableBtn.module.scss';

const ReusableBtn: React.FC<ReusableBtnProps> = ({
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
          {text}
        </a>
      </div>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
};

export default ReusableBtn;
