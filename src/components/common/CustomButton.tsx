interface ButtonProps {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: string;
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  const baseStyles = "";

  const variantStyles: any = {
    default: "",
    primary:
      "border border-gray-300 cursor-pointer h-10 px-4 py-2 bg-gray-100 flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  };
  const buttonClasses = `${baseStyles} ${variantStyles[variant]}`;
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
