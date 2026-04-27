export const Badge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "secondary" | "outline" | "success" | "danger" }) => {
  const variants = {
    default: { background: "#3b82f6", color: "white" },
    secondary: { background: "#e5e7eb", color: "#374151" },
    outline: {
      border: "1px solid #d1d5db",
      background: "transparent",
      color: "#374151",
    },
    success: { background: "#22c55e", color: "white" },
    danger: { background: "#ef4444", color: "white" },
  };
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: 9999,
        fontSize: 12,
        fontWeight: 500,
        ...variants[variant],
      }}
    > 
      {children}
    </span>
  );
};