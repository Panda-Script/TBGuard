interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        fontSize: "14px",
        fontWeight: 500,
        color: "#374151",
      }}
    >
      {children}
    </label>
  ); 
};
