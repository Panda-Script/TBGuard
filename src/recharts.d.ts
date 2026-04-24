import { Component, ReactNode } from 'react';

declare module 'recharts' {
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
  
  export interface PieChartProps {
    data?: any[];
    [key: string]: any;
  }
  
  export interface PieProps {
    data?: any[];
    dataKey?: string;
    cx?: string | number;
    cy?: string | number;
    outerRadius?: number;
    label?: any;
    labelLine?: boolean;
    [key: string]: any;
  }
  
  export interface CellProps {
    fill?: string;
    [key: string]: any;
  }
  
  export const PolarAngleAxis: React.ComponentType<any>;
  export const PolarGrid: React.ComponentType<any>;
  export const PolarRadiusAxis: React.ComponentType<any>;
  export const RadarChart: React.ComponentType<any>;
  export const Radar: React.ComponentType<any>;
  export const Tooltip: React.ComponentType<any>;
  export const Legend: React.ComponentType<any>;
  export const ResponsiveContainer: React.ComponentType<any>;
  export const BarChart: React.ComponentType<any>;
  export const Bar: React.ComponentType<any>;
  export const XAxis: React.ComponentType<any>;
  export const YAxis: React.ComponentType<any>;
  export const CartesianGrid: React.ComponentType<any>;
  export const LineChart: React.ComponentType<any>;
  export const Line: React.ComponentType<any>;
  export const PieChart: React.ComponentType<any>;
  export const Pie: React.ComponentType<any>;
  export const Cell: React.ComponentType<any>;
}