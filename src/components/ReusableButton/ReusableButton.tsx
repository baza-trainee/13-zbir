import { ReusableButtonProps } from '../../types/ReusableButtonProps';
import styles from './ReusableButton.module.scss';

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  const ReusableBtn = props.href ? 'a' : 'button';
  return (
    <ReusableBtn {...props} onClick={onClick} className={styles.reusableButton}>
      {text}
    </ReusableBtn>
  );
};

export default ReusableButton;
