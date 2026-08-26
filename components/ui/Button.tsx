
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]";
  
  const variantClasses = {
    primary: "bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 shadow-md hover:shadow-lg hover:shadow-amber-400/10",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/60",
    outline: "border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400",
    gold: "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-semibold hover:from-amber-400 hover:to-amber-300 shadow-md"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
