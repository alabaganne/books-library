import React, { Children } from 'react';

interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
  type?:
    | 'primary'
    | 'outline-primary'
    | 'secondary'
    | 'outline-secondary'
    | 'outline-black'
    | 'outline-light'
    | undefined;
  className?: string;
}

const Button = ({ children, size, type, className }: Props) => {
  const sizes: any = {
    sm: 'px-4 py-3 text-xs font-semibold',
    md: 'px-5 py-3 font-medium',
    lg: 'px-6 py-4 font-semibold',
    default: '',
  };

  const types: any = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-500',
    'outline-black':
      'border-gray-300 bg-transparent text-black shadow-none hover:border-black hover:bg-black hover:text-white',
    'outline-light': 'border border-gray-300 hover:bg-gray-100',
  };

  return (
    <button
      className={
        className +
        ' inline-flex items-center gap-2 rounded-lg border duration-75 ' +
        types[type || 'primary'] +
        ' ' +
        sizes[size || 'md']
      }
    >
      {children}
    </button>
  );
};

export default Button;
