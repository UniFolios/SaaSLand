export interface BaseComponentProps {
  className?: string;
  id?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
} 