import { type ReactNode } from 'react';
import { ErrorFilled, InfoFilled, SuccessFilled, WarningFilled } from '../icons';

export type HelperTextType = 'default' | 'error' | 'success' | 'warning';

export interface HelperTextProps {
  type?: HelperTextType;
  children: ReactNode;
  className?: string;
}

const config: Record<HelperTextType, { icon: ReactNode; textClass: string }> = {
  default: {
    icon: <InfoFilled size={16} color="var(--color-grey-600)" />,
    textClass: 'text-[var(--color-grey-600)]',
  },
  error: {
    icon: <ErrorFilled size={16} color="var(--color-red-600)" />,
    textClass: 'text-[var(--color-red-600)]',
  },
  success: {
    icon: <SuccessFilled size={16} color="var(--color-green-600)" />,
    textClass: 'text-[var(--color-green-600)]',
  },
  warning: {
    icon: <WarningFilled size={16} color="var(--color-yellow-600)" />,
    textClass: 'text-[var(--color-yellow-600)]',
  },
};

export function HelperText({ type = 'default', children, className = '' }: HelperTextProps) {
  const { icon, textClass } = config[type];

  return (
    <div className={`flex items-start gap-[var(--spacing-4)] ${className}`}>
      <span className="shrink-0 mt-[var(--spacing-2)]">{icon}</span>
      <p
        className={`text-compact-medium ${textClass}`}
      >
        {children}
      </p>
    </div>
  );
}
