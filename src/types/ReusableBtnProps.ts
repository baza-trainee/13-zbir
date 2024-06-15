export interface ReusableBtnProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}
