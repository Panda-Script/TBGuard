export const Breadcrumbs = ({ items }) => (
  <nav>
    <ol
      style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
        margin: 0,
        gap: 8,
      }}
    >
      {items.map((item, idx) => (
        <li key={idx} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {idx < items.length - 1 ? (
            <a
              href={item.href}
              style={{ textDecoration: "none", color: "#3b82f6" }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{ color: "#6b7280" }}>{item.label}</span>
          )} 
          {idx < items.length - 1 && (
            <span style={{ color: "#9ca3af" }}>/</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
