export const AspectRatio = ({ ratio = 16 / 9, children }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      paddingBottom: `${100 / ratio}%`,
    }}
  >
    <div style={{ position: "absolute", inset: 0 }}>{children}</div>
  </div>
);
 