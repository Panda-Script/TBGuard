import * as React from "react";

const dialogStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "672px",
    width: "90%",
    maxHeight: "90vh",
    overflowY: "auto" as const,
    position: "relative" as const,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  closeButton: {
    position: "absolute" as const,
    top: "16px",
    right: "16px",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#6b7280",
    padding: "4px",
    lineHeight: 1,
  },
  header: {
    marginBottom: "16px",
  },
  title: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
  },
};

export const Dialog = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  return (
    <div style={dialogStyles.overlay} onClick={() => onOpenChange(false)}>
      <div style={dialogStyles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <>{children}</>;
}; 

export const DialogHeader = ({ children }: { children: React.ReactNode }) => {
  return <div style={dialogStyles.header}>{children}</div>;
};

export const DialogTitle = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 style={dialogStyles.title}>{children}</h2>;
};
