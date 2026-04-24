import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";
 
const pieData = [
  { name: "DS-TB", value: 57.9 },
  { name: "MDR-TB", value: 26.3 },
  { name: "Other", value: 15.8 },
];
const PIE_COLORS = ["#3b82f6", "#a855f7", "#f59e0b"];

const barData = [
  { name: "DS", count: 18 },
  { name: "MDR", count: 8 },
  { name: "XDR", count: 3 },
  { name: "Pre-XDR", count: 2 },
  { name: "RR", count: 1 },
];

const radarData = [
  { agent: "Genomics", standard: 8, premium: 6, deluxe: 7 },
  { agent: "Clinical", standard: 5, premium: 7, deluxe: 6 },
  { agent: "X-Ray", standard: 7, premium: 8, deluxe: 9 },
  { agent: "RAG", standard: 6, premium: 5, deluxe: 7 },
  { agent: "CT Scan", standard: 9, premium: 7, deluxe: 8 },
];

const styles = {
  container: {
    display: "grid",
    gap: "32px",
  },
  containerMobile: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  containerDesktop: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
  },
  chartTitle: {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    marginBottom: "16px",
    marginTop: 0,
  },
  chartContainer: {
    width: "100%",
    height: "200px",
  },
};

export default function StatsCharts() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        ...styles.container,
        ...(isDesktop ? styles.containerDesktop : styles.containerMobile),
      }}
    >
      {/* Pie Chart */}
      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>Diagnosis Distribution</h3>
        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
                labelLine={false}
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>Cases by Classification</h3>
        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Radar Chart */}
      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>Agent Confidence Overview</h3>
        <div style={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="agent"
                tick={{ fontSize: 10, fill: "#6b7280" }}
              />
              <PolarRadiusAxis
                domain={[0, 10]}
                tick={{ fontSize: 9, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Radar
                name="Standard"
                dataKey="standard"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.2}
              />
              <Radar
                name="Premium"
                dataKey="premium"
                stroke="#a855f7"
                fill="#a855f7"
                fillOpacity={0.2}
              />
              <Radar
                name="Deluxe"
                dataKey="deluxe"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.2}
              />
              <Legend
                wrapperStyle={{ fontSize: 11, color: "#6b7280" }}
                iconType="circle"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
