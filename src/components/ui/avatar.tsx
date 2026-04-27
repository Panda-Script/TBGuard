export const Avatar = ({ src, alt, fallback, size = 40 }: { src?: string; alt?: string; fallback: string; size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: "#e5e7eb",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {src ? (
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ) : (
      <span style={{ fontSize: size * 0.4 }}>{fallback}</span>
    )}
  </div>
);
