import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Search, SlidersHorizontal } from "lucide-react";
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
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "40px 24px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
  },
  title: {
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
  },
  searchInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "24px",
    flexWrap: "wrap" as const,
  },
  searchInfoText: {
    fontSize: "14px",
    color: "#6b7280",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },
  gridMd: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  gridLg: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  emptyState: {
    textAlign: "center" as const,
    paddingTop: "80px",
    paddingBottom: "80px",
    color: "#6b7280",
  },
  emptyTitle: {
    fontSize: "18px",
    marginBottom: "4px",
  },
  emptySubtitle: {
    fontSize: "14px",
    marginTop: "4px",
  },
  placeholderIcon: {
    width: "48px",
    height: "48px",
    margin: "0 auto 16px auto",
    opacity: 0.3,
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    paddingTop: "8px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  },
  select: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "white",
    cursor: "pointer",
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

export default function SearchPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("patient_id");
  const [activeSearch, setActiveSearch] = useState(null);
  const [selected, setSelected] = useState(null);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const width = useWindowWidth();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecords(mockPatientRecords);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredRecords = activeSearch
    ? records.filter((r) => {
        const value = String(r[activeSearch.field] || "").toLowerCase();
        return value.includes(activeSearch.term.toLowerCase());
      })
    : [];

  const handleSubmit = () => {
    if (!searchTerm.trim()) return;
    setActiveSearch({ field: filterField, term: searchTerm.trim() });
    setSearchOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    setActiveSearch(null);
    setSearchTerm("");
  };

  const getGridStyle = () => {
    if (width >= 1024) return styles.gridLg;
    if (width >= 768) return styles.gridMd;
    return styles.grid;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Search Records</h2>
        <Button onClick={() => setSearchOpen(true)}>
          <Search size={16} style={{ marginRight: "8px" }} />
          Search
        </Button>
      </div>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <div style={styles.dialogContent}>
            <div style={styles.fieldGroup}>
              <Label>Search field</Label>
              <select
                value={filterField}
                onChange={(e) => setFilterField(e.target.value)}
                style={styles.select}
              >
                <option value="patient_id">Patient ID</option>
                <option value="name">Name</option>
                <option value="diagnosis">Diagnosis</option>
                <option value="judge_verdict">Judge Verdict</option>
                <option value="gender">Gender</option>
              </select>
            </div>
            <div style={styles.fieldGroup}>
              <Label>Search value</Label>
              <Input
                placeholder="Enter search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
            </div>
            <Button onClick={handleSubmit} fullWidth>
              Submit
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      {activeSearch ? (
        <>
          <div style={styles.searchInfo}>
            <SlidersHorizontal size={16} color="#6b7280" />
            <span style={styles.searchInfoText}>
              Showing results for <strong>{activeSearch.field}</strong>{" "}
              containing "<strong>{activeSearch.term}</strong>" —{" "}
              {filteredRecords.length} found
            </span>
            <Button variant="ghost" size="sm" onClick={handleClear}>
              Clear
            </Button>
          </div>
          {filteredRecords.length === 0 ? (
            <p style={styles.emptyState}>No records match your search.</p>
          ) : (
            <div style={getGridStyle()}>
              {filteredRecords.map((r) => (
                <PatientCard key={r.id} record={r} onClick={setSelected} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div style={styles.emptyState}>
          <Search style={styles.placeholderIcon} />
          <p style={styles.emptyTitle}>
            Click "Search" to find patient records
          </p>
          <p style={styles.emptySubtitle}>
            Filter by patient ID, name, diagnosis, or verdict
          </p>
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
