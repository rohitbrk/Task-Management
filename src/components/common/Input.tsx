interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border-gray-300 p-2 m-1 w-full rounded-lg shadow-lg hover:shadow-xl"
    ></input>
  );
};

export default Input;
