interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  type = "text",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      style={{
        width: "100%",
        padding: "8px 12px",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "14px", 
        outline: "none",
        transition: "border-color 0.2s",
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#3b82f6";
        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.1)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#d1d5db";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
};
