import { ReusableButtonProps } from '../../types/ReusableButtonProps';
import './ReusableButton.module.scss';

const ReusableButton: React.FC<ReusableButtonProps> = ({
  text,
  onClick,
  ...props
}) => {
  const ReusableBtn = props.href ? 'a' : 'button';
  return (
    <ReusableBtn {...props} onClick={onClick}>
      {text}
    </ReusableBtn>
  );
};

export default ReusableButton;
