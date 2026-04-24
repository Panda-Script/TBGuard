import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, Activity } from "lucide-react";

const diagnosisBadgeVariants = {
  DS: "default",
  MDR: "secondary",
  XDR: "danger",
  "Pre-XDR": "outline",
  RR: "success",
  Pending: "outline",
  Negative: "success",
} as const;

const verdictColors = {
  Positive: { color: "#dc2626" },
  Negative: { color: "#16a34a" },
  Inconclusive: { color: "#d97706" },
};

const styles = {
  card: {
    cursor: "pointer",
    overflow: "hidden" as const,
    transition: "all 0.3s ease",
  },
  cardHover: {
    transform: "translateY(-4px)",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  imageContainer: {
    aspectRatio: "1",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  noImageContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    color: "rgba(59, 130, 246, 0.4)",
  },
  noImageText: {
    fontSize: "12px",
    fontWeight: 500,
  },
  badgeContainer: {
    position: "absolute" as const,
    top: "8px",
    right: "8px",
  },
  content: {
    padding: "16px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  patientInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  patientIcon: {
    width: "16px",
    height: "16px",
    color: "#6b7280",
  },
  patientName: {
    fontWeight: 500,
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#6b7280",
  },
  verdictText: {
    fontWeight: 600,
  },
};

interface PatientRecord {
  patient_id: string;
  name?: string;
  diagnosis?: string;
  judge_verdict?: "Positive" | "Negative" | "Inconclusive";
  confidence_score?: number;
  image_url?: string;
}

interface PatientCardProps {
  record: PatientRecord;
  onClick?: (record: PatientRecord) => void;
}

export default function PatientCard({ record, onClick }: PatientCardProps) {
  const handleClick = () => {
    onClick?.(record);
  };

  const diagnosisVariant =
    diagnosisBadgeVariants[
      record.diagnosis as keyof typeof diagnosisBadgeVariants
    ] || "outline";
  const verdictStyle = record.judge_verdict
    ? verdictColors[record.judge_verdict]
    : null;

  return (
    <div
      onClick={handleClick}
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow as string;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
      }}
    >
      <Card>
        <div style={styles.imageContainer}>
          {record.image_url ? (
            <img
              src={record.image_url}
              alt={`Scan for ${record.patient_id}`}
              style={styles.image}
            />
          ) : (
            <div style={styles.noImageContainer}>
              <Activity size={48} />
              <span style={styles.noImageText}>No Scan</span>
            </div>
          )}
          <div style={styles.badgeContainer}>
            <Badge variant={diagnosisVariant}>
              {record.diagnosis || "Pending"}
            </Badge>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.patientInfo}>
             <User style={styles.patientIcon} />
            <span style={styles.patientName}>
              {record.name || record.patient_id}
            </span>
          </div>
          <div style={styles.footer}>
            <span>Confidence: {record.confidence_score ?? "—"}%</span>
            {record.judge_verdict && (
              <span
                style={{ ...styles.verdictText, color: verdictStyle?.color }}
              >
                {record.judge_verdict}
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
