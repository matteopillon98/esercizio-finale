import React from "react";

interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
