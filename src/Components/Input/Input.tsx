type InputProps = {
  label: string;
  htmlFor: string;
  fieldType?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
};

const Input = ({
  label,
  htmlFor,
  fieldType,
  inputValue,
  setInputValue,
}: InputProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={fieldType}
        id={htmlFor}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default Input;
