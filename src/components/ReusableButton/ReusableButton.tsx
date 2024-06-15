import './ReusableButton.module.scss';

interface ReusableButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  const ReusableButton = props.href ? 'a' : 'button';
  return (
    <ReusableButton {...props} onClick={onClick}>
      {children}
    </ReusableButton>
  );
};

export default ReusableButton;
