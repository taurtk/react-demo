export type BasicButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'ghost' | 'primary-yellow';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string;
  title?: string;
};