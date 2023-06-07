import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
