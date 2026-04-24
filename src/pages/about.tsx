import { Card } from "../components/ui/card";
import { ExternalLink } from "lucide-react";
import StatsCharts from "../components/statschart";
import AgentFlowDiagram from "../components/agent-flow-diagram";

const styles = {
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "40px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "64px",
  },
  section: {
    width: "100%",
  },
  sectionTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "32px",
  },
  heroSection: {
    backgroundColor: "#3b82f6",
    borderRadius: "24px",
    padding: "32px",
  },
  heroSectionDesktop: {
    padding: "48px",
  },
  heroTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    marginBottom: "16px",
    color: "white",
  },
  heroTitleDesktop: {
    fontSize: "30px",
  },
  heroDescription: {
    textAlign: "center" as const,
    maxWidth: "768px",
    margin: "0 auto",
    opacity: 0.9,
    lineHeight: 1.625,
    color: "white",
  },
  aboutCard: {
    padding: "32px",
    border: "1px solid #e5e7eb",
  },
  aboutText: {
    color: "#6b7280",
    lineHeight: 1.625,
    marginBottom: "24px",
  },
  linkContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#3b82f6",
    fontWeight: 500,
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default function About() {
  // Check if desktop (you can use a resize hook for responsiveness)
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <div style={styles.container}>
      {/* Stats section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Overview & Analytics</h2>
        <StatsCharts />
      </section>

      {/* Agent explanation */}
      <section
        style={{
          ...styles.heroSection,
          ...(isDesktop && styles.heroSectionDesktop),
        }}
      >
        <h2
          style={{
            ...styles.heroTitle,
            ...(isDesktop && styles.heroTitleDesktop),
          }}
        >
          What are agents, and what are they doing?
        </h2>
        <p style={styles.heroDescription}>
          Our system uses multiple specialised AI agents, each analysing a
          different aspect of patient data — genomics, clinical history, X-ray
          imagery, medical literature (RAG), and CT scans. By having many agents
          examining different dimensions, the overall assessment becomes far
          more reliable. Each agent independently forms an opinion, and their
          outputs are fed into a single
          <strong> Judge</strong> model that makes the final tuberculosis
          determination.
        </p>

        <AgentFlowDiagram />
      </section>

      {/* About / Links */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About This Project</h2>
        <Card>
          <div style={styles.aboutCard}>
            <p style={styles.aboutText}>
              This dashboard hosts data from an external tuberculosis detection
              database. AI agents form independent opinions about different
              sections of the data, and a judge model then decides whether the
              case is tuberculosis or not based on the agents' collective
              answers. The system is designed to improve diagnostic accuracy
              through multi-agent consensus.
            </p>
            <div style={styles.linkContainer}>
              <a
                href="#"
                style={styles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                <ExternalLink size={16} />
                View Source Code
              </a>
              <a
                href="#"
                style={styles.link}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                <ExternalLink size={16} />
                Research Paper
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
} 