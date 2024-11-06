import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  variant = 'primary'
}) => {
  const baseStyles = "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};