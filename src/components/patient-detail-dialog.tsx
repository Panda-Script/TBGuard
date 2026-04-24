import "../types";
import React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import * as Recharts from "recharts";


// Remove the problematic line: const PolarAngleAxis = (props: any) => null;
const RadarChart = Recharts.RadarChart as any;
const PolarGrid = Recharts.PolarGrid as any;
const PolarAngleAxis = Recharts.PolarAngleAxis as any;
const PolarRadiusAxis = Recharts.PolarRadiusAxis as any;
const Radar = Recharts.Radar as any;
const ResponsiveContainer = Recharts.ResponsiveContainer as any;

interface PatientRecord {
  patient_id: string;
  name?: string;
  age?: number; 
  gender?: string;
  diagnosis?: string;
  judge_verdict?: "Positive" | "Negative" | "Pending";
  genomics_agent_score?: number;
  clinical_agent_score?: number;
  xray_agent_score?: number;
  rag_confidence_score?: number;
  ct_agent_score?: number;
  notes?: string;
}

interface PatientDetailDialogProps {
  record: PatientRecord | null;
  open: boolean;
  onClose: () => void;
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    fontSize: "14px",
    marginBottom: "16px",
  },
  label: {
    color: "#6b7280",
    fontSize: "12px",
    marginBottom: "4px",
  },
  value: {
    fontWeight: 500,
    margin: 0,
  },
  sectionTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    marginBottom: "12px",
  },
  notesText: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: 1.5,
    margin: 0,
  },
  chartContainer: {
    height: "256px",
    width: "100%",
    marginTop: "8px",
  },
};

export default function PatientDetailDialog({
  record,
  open,
  onClose,
}: PatientDetailDialogProps) {
  if (!record) return null;

  const agentData = [
    { agent: "Genomics", score: record.genomics_agent_score ?? 0 },
    { agent: "Clinical", score: record.clinical_agent_score ?? 0 },
    { agent: "X-Ray", score: record.xray_agent_score ?? 0 },
    { agent: "RAG", score: record.rag_confidence_score ?? 0 },
    { agent: "CT Scan", score: record.ct_agent_score ?? 0 },
  ];

  const getVerdictBadgeVariant = (verdict: string) => {
    if (verdict === "Positive") return "danger";
    if (verdict === "Negative") return "success";
    return "outline";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Patient: {record.name || record.patient_id}</DialogTitle>
        </DialogHeader>

        <div style={styles.container}>
          <div>
            <div style={styles.label}>Patient ID</div>
            <p style={styles.value}>{record.patient_id}</p>
          </div>
          <div>
            <div style={styles.label}>Age / Gender</div>
            <p style={styles.value}>
              {record.age ?? "—"} / {record.gender ?? "—"}
            </p>
          </div>
          <div>
            <div style={styles.label}>Diagnosis</div>
            <p style={styles.value}>{record.diagnosis ?? "Pending"}</p>
          </div>
          <div>
            <div style={styles.label}>Judge Verdict</div>
            <Badge
              variant={getVerdictBadgeVariant(
                record.judge_verdict ?? "Pending"
              )}
            >
              {record.judge_verdict ?? "Pending"}
            </Badge>
          </div>
        </div>

        <Separator />

        <div>
          <h3 style={styles.sectionTitle}>Agent Confidence Scores</h3>
          <div style={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={agentData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis
                  dataKey="agent"
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 10]}
                  tick={{ fontSize: 10, fill: "#6b7280" }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {record.notes && (
          <>
            <Separator />
            <div>
              <h3 style={styles.sectionTitle}>Notes</h3>
              <p style={styles.notesText}>{record.notes}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}