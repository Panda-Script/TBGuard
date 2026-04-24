import { useState, useEffect } from "react";
import { Skeleton } from "../components/ui/skeleton";
import PatientCard from "../components/patientcard";
import PatientDetailDialog from "../components/patient-detail-dialog";

// Mock patient data
const mockPatientRecords = [
  {
    id: "1",
    patient_id: "P-10001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    diagnosis: "MDR",
    judge_verdict: "Positive",
    genomics_agent_score: 8.5,
    clinical_agent_score: 7.2,
    xray_agent_score: 9.0,
    rag_confidence_score: 8.8,
    ct_agent_score: 7.5,
    confidence_score: 85,
    notes: "Patient responded well to initial treatment.",
    image_url: null,
  },
  {
    id: "2",
    patient_id: "P-10002",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    diagnosis: "DS",
    judge_verdict: "Positive",
    genomics_agent_score: 9.0,
    clinical_agent_score: 8.5,
    xray_agent_score: 8.8,
    rag_confidence_score: 9.2,
    ct_agent_score: 8.9,
    confidence_score: 92,
    notes: "Early detection, treatment plan initiated.",
    image_url: null,
  },
  {
    id: "3",
    patient_id: "P-10003",
    name: "Michael Chen",
    age: 58,
    gender: "Male",
    diagnosis: "XDR",
    judge_verdict: "Positive",
    genomics_agent_score: 7.8,
    clinical_agent_score: 8.0,
    xray_agent_score: 7.5,
    rag_confidence_score: 8.2,
    ct_agent_score: 7.9,
    confidence_score: 78,
    notes: "Requires intensive treatment regimen.",
    image_url: null,
  },
  {
    id: "4",
    patient_id: "P-10004",
    name: "Emily Rodriguez",
    age: 27,
    gender: "Female",
    diagnosis: "Pre-XDR",
    judge_verdict: "Inconclusive",
    genomics_agent_score: 6.5,
    clinical_agent_score: 7.0,
    xray_agent_score: 6.8,
    rag_confidence_score: 7.2,
    ct_agent_score: 6.9,
    confidence_score: 65,
    notes: "Further testing recommended.",
    image_url: null,
  },
  {
    id: "5",
    patient_id: "P-10005",
    name: "David Williams",
    age: 52,
    gender: "Male",
    diagnosis: "RR",
    judge_verdict: "Negative",
    genomics_agent_score: 4.5,
    clinical_agent_score: 5.0,
    xray_agent_score: 4.8,
    rag_confidence_score: 5.2,
    ct_agent_score: 4.9,
    confidence_score: 48,
    notes: "No active TB detected.",
    image_url: null,
  },
  {
    id: "6",
    patient_id: "P-10006",
    name: "Lisa Thompson",
    age: 39,
    gender: "Female",
    diagnosis: "DS",
    judge_verdict: "Positive",
    genomics_agent_score: 8.9,
    clinical_agent_score: 8.7,
    xray_agent_score: 9.1,
    rag_confidence_score: 8.8,
    ct_agent_score: 9.0,
    confidence_score: 90,
    notes: "Good response to standard treatment.",
    image_url: null,
  },
  {
    id: "7",
    patient_id: "P-10007",
    name: "James Brown",
    age: 61,
    gender: "Male",
    diagnosis: "MDR",
    judge_verdict: "Positive",
    genomics_agent_score: 7.9,
    clinical_agent_score: 8.1,
    xray_agent_score: 7.8,
    rag_confidence_score: 8.0,
    ct_agent_score: 7.7,
    confidence_score: 82,
    notes: "Second-line treatment initiated.",
    image_url: null,
  },
  {
    id: "8",
    patient_id: "P-10008",
    name: "Maria Garcia",
    age: 44,
    gender: "Female",
    diagnosis: "Pending",
    judge_verdict: "Inconclusive",
    genomics_agent_score: 6.0,
    clinical_agent_score: 5.5,
    xray_agent_score: 6.2,
    rag_confidence_score: 5.8,
    ct_agent_score: 6.1,
    confidence_score: 55,
    notes: "Awaiting additional test results.",
    image_url: null,
  },
];

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 24px",
  },
  title: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gap: "24px",
    width: "100%",
  },
  emptyState: {
    textAlign: "center" as const,
    paddingTop: "80px",
    paddingBottom: "80px",
  },
  emptyTitle: {
    fontSize: "18px",
    color: "#6b7280",
    margin: 0,
    marginBottom: "4px",
  },
  emptySubtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
    marginTop: "4px",
  },
};

// Custom hook for responsive design
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function DataPage() {
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const width = useWindowWidth();

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecords(mockPatientRecords);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getGridStyle = () => {
    let columns;

    if (width >= 1440) {
      columns = "repeat(4, 1fr)"; // 4 cards on very large screens
    } else if (width >= 1024) {
      columns = "repeat(3, 1fr)"; // 3 cards on desktop
    } else if (width >= 768) {
      columns = "repeat(2, 1fr)"; // 2 cards on tablet
    } else {
      columns = "1fr"; // 1 card on mobile
    }

    return {
      ...styles.grid,
      gridTemplateColumns: columns,
    };
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Patient Data</h2>

      {isLoading ? (
        <div style={getGridStyle()}>
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} />
            ))}
        </div>
      ) : records.length === 0 ? (
        <div style={styles.emptyState}>
          <p style={styles.emptyTitle}>No patient records found.</p>
          <p style={styles.emptySubtitle}>
            Records from the external database will appear here.
          </p>
        </div>
      ) : (
        <div style={getGridStyle()}>
          {records.map((r) => (
            <PatientCard key={r.id} record={r} onClick={setSelected} />
          ))}
        </div>
      )}

      <PatientDetailDialog
        record={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
} 