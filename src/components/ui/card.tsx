interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = ({ children, title, footer }: CardProps) => (
  <div
    style={{
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "white",
    }}
  >
    {title && (
      <div style={{ padding: "16px", borderBottom: "1px solid #e5e7eb", fontWeight: "bold" }}>
        {title}
      </div>
    )} 
    <div style={{ padding: "16px" }}>{children}</div>
    {footer && (
      <div style={{ padding: "16px", borderTop: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
        {footer}
      </div>
    )}
  </div>
);
