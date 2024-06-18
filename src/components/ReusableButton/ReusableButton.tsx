import { ReusableBtnProps } from '../../types/ReusableBtnProps';

const ReusableButton: React.FC<ReusableBtnProps> = ({
  text,
  onClick,
  ...props
}) => {
  const ReusableBtn = props.href ? 'a' : 'button';
  return (
    <ReusableBtn {...props} onClick={onClick} >
      {text}
    </ReusableBtn>
  );
};

export default ReusableButton;
