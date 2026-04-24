
// Recharts fix - Full type declarations for React 18 compatibility
declare module 'recharts' {
  import { Component, ReactNode } from 'react';
  
  export interface PolarAngleAxisProps {
    dataKey: string;
    tick?: any;
    stroke?: string;
    [key: string]: any;
  }
  
  export interface PolarGridProps {
    stroke?: string;
    [key: string]: any;
  }
  
  export interface RadarChartProps {
    data?: any[];
    [key: string]: any;
  }
  
  export interface RadarProps {
    dataKey?: string;
    stroke?: string;
    fill?: string;
    fillOpacity?: number;
    [key: string]: any;
  }
  
  export interface TooltipProps {
    [key: string]: any;
  }
  
  export interface LegendProps {
    [key: string]: any;
  }
  
  export interface ResponsiveContainerProps {
    width?: string | number;
    height?: string | number;
    children?: ReactNode;
    [key: string]: any;
  }
  
  export interface BarChartProps {
    data?: any[];
    layout?: string;
    [key: string]: any;
  }
  
  export interface BarProps {
    dataKey?: string;
    fill?: string;
    [key: string]: any;
  }
  
  export interface XAxisProps {
    dataKey?: string;
    stroke?: string;
    [key: string]: any;
  }
  
  export interface YAxisProps {
    stroke?: string;
    [key: string]: any;
  }
  
  export interface CartesianGridProps {
    stroke?: string;
    [key: string]: any;
  }
  
  export interface LineChartProps {
    data?: any[];
    [key: string]: any;
  }
  
  export interface LineProps {
    type?: string;
    dataKey?: string;
    stroke?: string;
    [key: string]: any;
  }
  
  export class PolarAngleAxis extends Component<PolarAngleAxisProps, any> {}
  export class PolarGrid extends Component<PolarGridProps, any> {}
  export class RadarChart extends Component<RadarChartProps, any> {}
  export class Radar extends Component<RadarProps, any> {}
  export class Tooltip extends Component<TooltipProps, any> {}
  export class Legend extends Component<LegendProps, any> {}
  export class ResponsiveContainer extends Component<ResponsiveContainerProps, any> {}
  export class BarChart extends Component<BarChartProps, any> {}
  export class Bar extends Component<BarProps, any> {}
  export class XAxis extends Component<XAxisProps, any> {}
  export class YAxis extends Component<YAxisProps, any> {}
  export class CartesianGrid extends Component<CartesianGridProps, any> {}
  export class LineChart extends Component<LineChartProps, any> {}
  export class Line extends Component<LineProps, any> {}
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