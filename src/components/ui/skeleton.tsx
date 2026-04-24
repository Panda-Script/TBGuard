export const Skeleton = ({
  width = "100%",
  height = 20,
  borderRadius = 4,
  count = 1,
}) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div
        key={i}
        style={{
          width: typeof width === "number" ? width : width,
          height,
          background: "#e5e7eb",
          borderRadius,
          animation: "pulse 1.5s ease-in-out infinite",
          marginBottom: i < count - 1 ? 8 : 0,
        }}
      /> 
    );
  }
  return (
    <>
      {skeletons}
      <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
    </>
  );
};