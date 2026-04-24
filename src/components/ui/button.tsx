interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "ghost";
  size?: "sm" | "md";
  fullWidth?: boolean;
}

export const Button = ({ children, onClick, variant = "default", size = "md", fullWidth }: ButtonProps) => {
  const variants: Record<string, React.CSSProperties> = {
    default: { backgroundColor: "#3b82f6", color: "white", border: "none" },
    ghost: { backgroundColor: "transparent", color: "#6b7280", border: "1px solid #e5e7eb" },
  };
  
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "6px 12px", fontSize: "12px" },
    md: { padding: "10px 16px", fontSize: "14px" },
  };
   
  return (
    <button
      onClick={onClick}
      style={{
        ...variants[variant],
        ...sizeStyles[size],
        borderRadius: "6px",
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {children}
    </button>
  );
};