interface ButtonProps {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: string;
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  if (variant) {
  }
  return (
    <button
      onClick={onClick}
      className="border border-gray-300 cursor-pointer h-10 px-6 py-2 bg-gray-100 flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
