import { ArrowDown } from "lucide-react";

const agents = [
  {
    name: "Genomics Agent",
    desc: "Analyzes genetic markers & resistance patterns",
  },
  { name: "Clinical Agent", desc: "Reviews patient symptoms & history" },
  { name: "X-Ray Agent", desc: "Evaluates chest X-ray imagery" },
  {
    name: "RAG Agent",
    desc: "Retrieves & cross-references medical literature",
  },
  { name: "CT Scan Agent", desc: "Interprets CT scan findings" },
];

const styles = {
  container: {
    paddingTop: "48px",
    paddingBottom: "48px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "16px",
    marginBottom: "32px",
  },
  agentColumn: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  agentCard: {
    backgroundColor: "#f3f4f6",
    color: "#1f2937",
    borderRadius: "12px 12px 4px 4px",
    padding: "24px 16px",
    textAlign: "center" as const,
    width: "100%",
    clipPath: "polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)",
  },
  agentName: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    margin: 0,
    marginBottom: "4px",
  },
  agentDesc: {
    fontSize: "12px",
    opacity: 0.8,
    margin: 0,
  },
  arrowIcon: {
    width: "24px",
    height: "24px",
    color: "#1f2937",
    marginTop: "8px",
  },
  judgeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  judgeCard: {
    backgroundColor: "#1f2937",
    color: "white",
    borderRadius: "12px",
    padding: "20px 48px",
    textAlign: "center" as const,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  judgeTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
    margin: 0,
    marginBottom: "4px",
  },
  judgeDesc: {
    fontSize: "12px",
    opacity: 0.7,
    margin: 0,
  },
}; 

export default function AgentFlowDiagram() {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {agents.map((agent) => (
          <div key={agent.name} style={styles.agentColumn}>
            <div style={styles.agentCard}>
              <p style={styles.agentName}>{agent.name}</p>
              <p style={styles.agentDesc}>{agent.desc}</p>
            </div>
            <ArrowDown style={styles.arrowIcon} />
          </div>
        ))}
      </div>
      <div style={styles.judgeContainer}>
        <div style={styles.judgeCard}>
          <p style={styles.judgeTitle}>Judge</p>
          <p style={styles.judgeDesc}>Final TB determination</p>
        </div>
      </div>
    </div>
  );
}
