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

export interface CardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "ghost";
  size?: "sm" | "md";
  fullWidth?: boolean;
}

export type VerdictType = "Positive" | "Negative" | "Inconclusive" | "Pending";

// Updated Patient Types - Include all fields from your mock data
export interface PatientRecord {
  id: string;                              // ✅ Added
  patient_id: string;
  name?: string;
  age?: number;                            // ✅ Added
  gender?: string;                         // ✅ Added
  diagnosis?: string;
  judge_verdict?: VerdictType;
  genomics_agent_score?: number;           // ✅ Added
  clinical_agent_score?: number;           // ✅ Added
  xray_agent_score?: number;               // ✅ Added
  rag_confidence_score?: number;           // ✅ Added
  ct_agent_score?: number;                 // ✅ Added
  confidence_score?: number;
  notes?: string;                          // ✅ Added
  image_url?: string | null;
}