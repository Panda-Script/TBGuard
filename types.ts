
// Recharts fix
declare module 'recharts' {
  export interface PolarAngleAxisProps {
    dataKey: string;
    tick?: any;
    stroke?: string;
  }
}

// UI Component Types
export interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
} 

export interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: number;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "success" | "danger";
}

export interface BreadcrumbsProps {
  items: Array<{ label: string; href: string }>;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

// Patient Types
export interface PatientRecord {
  id: string;
  patient_id: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  judge_verdict: string;
  genomics_agent_score: number;
  clinical_agent_score: number;
  xray_agent_score: number;
  rag_confidence_score: number;
  ct_agent_score: number;
  confidence_score: number;
  notes: string;
  image_url: string | null;
}